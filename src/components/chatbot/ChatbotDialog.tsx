"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Send, Loader2, X, MessageSquarePlus, ChevronDown, ChevronUp, Trash2, Bot, Sparkles } from "lucide-react";
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
  `Tell me about a project ${AUTHOR_NAME} worked on.`,
  `What is ${AUTHOR_NAME}'s work experience?`,
  `How can I contact ${AUTHOR_NAME}?`,
  `What certifications does ${AUTHOR_NAME} hold?`,
  `Describe ${AUTHOR_NAME}'s education.`,
  `What is ${AUTHOR_NAME} passionate about?`,
  `Is ${AUTHOR_NAME} open to relocation?`,
];

const LOCAL_STORAGE_KEY = 'portfolioChatHistory_Sora_v3'; 

const initialBotMessage: Message = {
  id: "initial-bot-message-sora",
  sender: "bot",
  text: `Hello! I'm Sora, Tinkal's personal AI assistant. Ask me about his skills, projects, experience, or how to get in touch!`,
  suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
};

export function ChatbotDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [suggestionsExpanded, setSuggestionsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null); 

  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  // NEVER set overflow = hidden to ensure full non-blocking page scrolling while chat is open

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
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
              setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0,4));
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
      setSuggestionsExpanded(false); 
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && messages.length > 0) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        // ignore storage errors
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

    const history = newMessagesBeforeBot.map(m => ({
      role: m.sender === 'bot' ? 'assistant' : 'user',
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
        suggestions: validSuggestions.length > 0 ? validSuggestions : INITIAL_SUGGESTIONS.slice(0,4) 
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
        suggestions: INITIAL_SUGGESTIONS.slice(0,4)
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
    setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0,4));
    setSuggestionsExpanded(false);
    setCurrentInput("");
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (error) {
        // ignore error
      }
    }
    toast({
      title: "Chat Cleared",
      description: "Memory has been reset.",
    });
    inputRef.current?.focus();
  };

  const chatWindowVariants = {
    closed: { opacity: 0, y: 30, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 }
  };

  const gridTemplateRows = currentSuggestions.length > 0 ? "auto auto 1fr auto" : "auto 1fr auto";

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* Floating Chat Trigger Button - Viewport Fixed & Always Visible from top to bottom */}
      <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className={cn(
            "rounded-full h-14 w-14 shadow-2xl transition-all duration-300 transform hover:scale-110 p-0 overflow-hidden border-2 border-primary/40",
            isOpen ? "bg-card text-foreground border-border" : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          aria-label="Toggle Sora AI Chatbot"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Avatar className="h-full w-full">
              <AvatarImage 
                src={SORA_AVATAR_URL} 
                alt="Sora AI"
                className="object-cover"
              />
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot className="h-7 w-7" />
              </AvatarFallback>
            </Avatar>
          )}
        </Button>
      </div>

      {/* Floating Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatWindowVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              "fixed bottom-24 z-[9999] rounded-2xl bg-card/95 backdrop-blur-xl shadow-2xl border border-border overflow-hidden grid pointer-events-auto",
              "left-4 right-4 w-auto", 
              "sm:left-auto sm:right-6 sm:w-[380px]", 
              "md:w-[420px]"
            )}
            style={{ 
              maxHeight: 'min(calc(100vh - 7.5rem), 620px)',
              gridTemplateRows: gridTemplateRows 
            }} 
          >
            <header className="bg-secondary/40 p-3.5 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Avatar className="h-9 w-9 border border-primary/50 overflow-hidden shadow-sm">
                  <AvatarImage 
                    src={SORA_AVATAR_URL} 
                    alt="Sora AI Assistant"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-[10px]">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-base text-foreground font-headline flex items-center gap-1.5">
                    Sora Assistant
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground">Tinkal&apos;s Portfolio Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={handleClearChat} className="h-8 w-8 hover:text-destructive text-muted-foreground" title="Clear chat history">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-muted-foreground">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </header>

            {currentSuggestions.length > 0 && (
              <div className="p-2.5 border-b border-border/60 bg-secondary/20">
                {!suggestionsExpanded ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs text-primary py-1.5 h-auto"
                    onClick={() => setSuggestionsExpanded(true)}
                    disabled={isLoading}
                  >
                    <MessageSquarePlus className="h-3.5 w-3.5 mr-1.5" />
                    Suggested Questions
                    <ChevronDown className="h-3.5 w-3.5 ml-auto" />
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-xs text-muted-foreground mb-2 py-1.5 h-auto"
                      onClick={() => setSuggestionsExpanded(false)}
                    >
                      <MessageSquarePlus className="h-3.5 w-3.5 mr-1.5" />
                      Hide Suggestions
                      <ChevronUp className="h-3.5 w-3.5 ml-auto" />
                    </Button>
                    <div className="flex flex-wrap gap-1.5">
                      {currentSuggestions.map((q, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-[11px] h-auto py-1 px-2.5 rounded-full bg-card hover:bg-primary/10 border-border"
                          onClick={() => handleSuggestionClick(q)}
                          disabled={isLoading}
                        >
                          {q}
                        </Button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            <ScrollArea ref={scrollAreaRef} className="p-4 min-h-[220px]">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} isLoading={msg.isLoading} />
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>

            <footer className="p-3 border-t border-border bg-card">
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
                  placeholder="Ask Sora anything about Tinkal..."
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-grow h-9 text-xs sm:text-sm bg-background border-border/80"
                />
                <Button type="submit" size="icon" disabled={isLoading || !currentInput.trim()} className="h-9 w-9 flex-shrink-0">
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    < />,
    document.body
  );
}
