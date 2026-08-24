"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, X, MessageSquarePlus, ChevronDown, ChevronUp, Trash2, Copy, Check, Bot, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { getPortfolioChatResponse } from "@/ai/flows/portfolio-chat-flow";
import type { PortfolioChatOutput } from "@/ai/flows/portfolio-chat-types";
import { AUTHOR_NAME, SORA_AVATAR_URL } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  isLoading?: boolean;
  suggestions?: string[];
}

const INITIAL_SUGGESTIONS = [
  `What are ${AUTHOR_NAME}'s key skills?`,
  `Tell me about ${AUTHOR_NAME}'s projects.`,
  `What is ${AUTHOR_NAME}'s work experience?`,
  `How can I contact ${AUTHOR_NAME}?`,
  `What certifications does ${AUTHOR_NAME} hold?`,
  `Describe ${AUTHOR_NAME}'s education background.`,
  `What stack does ${AUTHOR_NAME} specialize in?`,
  `Is ${AUTHOR_NAME} available for freelance or hire?`,
];

const LOCAL_STORAGE_KEY = 'portfolioChatHistory_Sora_v3'; 

const initialBotMessage: Message = {
  id: "initial-bot-message-sora",
  sender: "bot",
  text: `Hi! I'm **Sora**, ${AUTHOR_NAME}'s AI assistant.\n\nAsk me anything about Tinkal's skills, full-stack projects, experience, or how to get in touch. Click any suggestion below to get started!`,
  suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
};

export function ChatbotDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [suggestionsExpanded, setSuggestionsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null); 

  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      if (typeof window !== 'undefined') {
        try {
          const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (savedMessages) {
            const parsedMessages = JSON.parse(savedMessages);
            if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
              setMessages(parsedMessages);
              const lastBotMessage = parsedMessages.filter(m => m.sender === 'bot' && !m.isLoading).pop();
              if (lastBotMessage && lastBotMessage.suggestions && lastBotMessage.suggestions.length > 0) {
                setCurrentSuggestions(lastBotMessage.suggestions);
              } else {
                setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0, 4));
              }
            } else {
              setMessages([initialBotMessage]);
              setCurrentSuggestions(initialBotMessage.suggestions || INITIAL_SUGGESTIONS.slice(0, 4));
            }
          } else {
            setMessages([initialBotMessage]);
            setCurrentSuggestions(initialBotMessage.suggestions || INITIAL_SUGGESTIONS.slice(0, 4));
          }
        } catch (error) {
          setMessages([initialBotMessage]);
          setCurrentSuggestions(initialBotMessage.suggestions || INITIAL_SUGGESTIONS.slice(0, 4));
        }
      }
      setSuggestionsExpanded(false); 
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && messages.length > 0) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        // console.error("Failed to save chat history to localStorage:", error);
      }
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      requestAnimationFrame(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [messages]);

  const processMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    setSuggestionsExpanded(false);

    const userMessage: Message = {
      id: `${Date.now()}-user-${Math.random().toString(36).substring(7)}`,
      sender: "user",
      text: messageText.trim(),
    };
    
    const newMessagesBeforeBot = [...messages, userMessage];
    setMessages(newMessagesBeforeBot);

    const history: { role: 'user' | 'assistant'; content: string }[] = newMessagesBeforeBot.map(m => ({
      role: m.sender === 'bot' ? ('assistant' as const) : ('user' as const),
      content: m.text
    }));

    setIsLoading(true);
    const loadingBotMessageId = `${Date.now()}-bot-loading-${Math.random().toString(36).substring(7)}`;
    
    setMessages(prev => [...prev, { id: loadingBotMessageId, sender: 'bot', text: '...', isLoading: true }]);

    try {
      const result: PortfolioChatOutput = await getPortfolioChatResponse({ 
        userInput: messageText.trim(),
        history: history.slice(-10)
      });
      
      const validSuggestions = (result.suggestedFollowUps || [])
        .filter(s => s && s.trim() !== "")
        .slice(0, 4);

      const botMessage: Message = {
        id: loadingBotMessageId,
        sender: 'bot',
        text: result.response,
        isLoading: false,
        suggestions: validSuggestions.length > 0 ? validSuggestions : INITIAL_SUGGESTIONS.slice(0, 4)
      };

      setMessages((prevMessages) =>
        prevMessages.map(msg => msg.id === loadingBotMessageId ? botMessage : msg)
      );
      
      if (validSuggestions.length > 0) {
        setCurrentSuggestions(validSuggestions);
      } else {
        setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0, 4));
      }

    } catch (error) {
      const errorBotMessage: Message = {
        id: loadingBotMessageId,
        sender: 'bot',
        text: "I'm having a brief connection issue. Please try again in a moment!",
        isLoading: false,
        suggestions: INITIAL_SUGGESTIONS.slice(0, 4)
      };
      setMessages((prevMessages) =>
        prevMessages.map(msg => msg.id === loadingBotMessageId ? errorBotMessage : msg)
      );
      setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0, 4));
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSendCurrentInput = () => {
    processMessage(currentInput);
    setCurrentInput("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentInput(""); 
    processMessage(suggestion);
  };

  const handleClearChat = () => {
    setMessages([initialBotMessage]);
    setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0, 4));
    setSuggestionsExpanded(false);
    setCurrentInput("");
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (error) {
        // console.error("Failed to clear chat history from localStorage:", error);
      }
    }
    toast({
      title: "Chat Reset",
      description: "Conversation history has been cleared.",
    });
    inputRef.current?.focus();
  };

  const handleCopyChat = () => {
    const chatText = messages
      .filter(m => !m.isLoading)
      .map(m => `${m.sender.toUpperCase()}: ${m.text}`)
      .join('\n\n');
    
    navigator.clipboard.writeText(chatText).then(() => {
      setCopied(true);
      toast({ title: "Copied!", description: "Conversation copied to clipboard." });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const chatWindowVariants = {
    closed: { opacity: 0, y: 24, scale: 0.94 },
    open: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className={cn(
            "rounded-full h-14 w-14 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 p-0 overflow-hidden border-2 border-primary/30",
            isOpen ? "bg-card hover:bg-card text-foreground" : "bg-primary hover:bg-primary/95 text-primary-foreground"
          )}
          aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <div className="relative h-full w-full flex items-center justify-center">
              <Avatar className="h-full w-full">
                <AvatarImage
                  src={SORA_AVATAR_URL}
                  alt="Sora"
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot className="h-7 w-7" />
                </AvatarFallback>
              </Avatar>
              <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatWindowVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "fixed bottom-24 z-50 rounded-2xl bg-card/95 backdrop-blur-md shadow-2xl border border-border/80 overflow-hidden flex flex-col",
              "left-3 right-3 w-auto",
              "sm:left-auto sm:right-6 sm:w-[420px] md:w-[450px]"
            )}
            style={{ 
              height: 'min(580px, calc(100vh - 120px))',
            }} 
          >
            {/* Header */}
            <header className="px-4 py-3 bg-card border-b border-border/60 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <Avatar className="h-9 w-9 border border-primary/40 shadow-sm overflow-hidden">
                    <AvatarImage
                      src={SORA_AVATAR_URL}
                      alt="Sora AI Assistant"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-card" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-base text-foreground font-headline leading-tight">Sora AI</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-primary/10 text-primary rounded-full border border-primary/20">
                      Assistant
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-primary inline" />
                    {AUTHOR_NAME}&apos;s Personal AI Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyChat}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title="Copy chat text"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClearChat}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  title="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title="Close assistant"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </header>

            {/* Suggestions Drawer / Quick Prompts */}
            {currentSuggestions.length > 0 && (
              <div className="px-3 py-2 border-b border-border/40 bg-muted/40 shrink-0">
                {!suggestionsExpanded ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-xs text-primary font-medium hover:bg-primary/5 h-8 px-2"
                    onClick={() => setSuggestionsExpanded(true)}
                    disabled={isLoading}
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquarePlus className="h-3.5 w-3.5" />
                      Suggested questions ({currentSuggestions.length})
                    </span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                ) : (
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-xs text-muted-foreground hover:text-foreground h-8 px-2 mb-1.5"
                      onClick={() => setSuggestionsExpanded(false)}
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageSquarePlus className="h-3.5 w-3.5 text-primary" />
                        Quick Prompts
                      </span>
                      <ChevronUp className="h-3.5 w-3.5" />
                    </Button>
                    <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                      {currentSuggestions.map((q, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs h-auto py-1 px-2.5 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border-border/60 transition-colors whitespace-normal text-left font-normal"
                          onClick={() => handleSuggestionClick(q)}
                          disabled={isLoading}
                        >
                          {q}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Chat Messages */}
            <ScrollArea ref={scrollAreaRef} className="flex-1 px-4 py-3">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} isLoading={msg.isLoading} />
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input Form Footer */}
            <footer className="p-3 border-t border-border/60 bg-card shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendCurrentInput();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask Sora about Tinkal's work..."
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 h-10 rounded-xl bg-muted/50 border-border/60 focus-visible:ring-1 focus-visible:ring-primary text-sm px-3.5"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !currentInput.trim()}
                  className="h-10 w-10 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm shrink-0"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
