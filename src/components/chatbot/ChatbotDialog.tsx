"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Send, Loader2, X, MessageSquarePlus, ChevronDown, ChevronUp,
  Trash2, Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  `Tell me about ${AUTHOR_NAME}'s AI Voice Agent project.`,
  `What is ${AUTHOR_NAME}'s work experience?`,
  `What is ${AUTHOR_NAME}'s backend & cloud experience?`,
  `Why should a recruiter hire ${AUTHOR_NAME}?`,
  `How can I contact ${AUTHOR_NAME}?`,
];

const LOCAL_STORAGE_KEY = "portfolioChatHistory_Tinkal_v4";

const initialBotMessage: Message = {
  id: "initial-bot-message-tinkal",
  sender: "bot",
  text: `Hello! I'm Tinkal's portfolio assistant. I can help you learn about Tinkal's experience, technical skills, projects, and professional background. What would you like to know about him?`,
  suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
};

export function ChatbotDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [suggestionsExpanded, setSuggestionsExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // Point directly at the native scrollable div (not Radix's Root)
  const messagesScrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { toast } = useToast();

  /**
   * Reliably restore focus to the input textarea.
   * Uses requestAnimationFrame so it runs AFTER React's DOM commit and
   * browser layout, preventing scroll/state-update races from stealing focus.
   */
  const focusInput = useCallback(() => {
    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-resize the textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollH = textareaRef.current.scrollHeight;
      const nextH = Math.min(Math.max(scrollH, 38), 120);
      textareaRef.current.style.height = `${nextH}px`;
    }
  }, [currentInput]);

  // Load / reset chat history when panel opens
  useEffect(() => {
    if (!isOpen) return;
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed: Message[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          const lastBot = parsed.filter(m => m.sender === "bot" && !m.isLoading).pop();
          setCurrentSuggestions(
            lastBot?.suggestions?.length ? lastBot.suggestions : INITIAL_SUGGESTIONS.slice(0, 4)
          );
        } else {
          setMessages([initialBotMessage]);
          setCurrentSuggestions(initialBotMessage.suggestions ?? INITIAL_SUGGESTIONS.slice(0, 4));
        }
      } else {
        setMessages([initialBotMessage]);
        setCurrentSuggestions(initialBotMessage.suggestions ?? INITIAL_SUGGESTIONS.slice(0, 4));
      }
    } catch {
      setMessages([initialBotMessage]);
      setCurrentSuggestions(initialBotMessage.suggestions ?? INITIAL_SUGGESTIONS.slice(0, 4));
    }
    // Small delay so the AnimatePresence animation settles before focusing
    setTimeout(() => focusInput(), 150);
  }, [isOpen, focusInput]);

  // Persist messages to localStorage
  useEffect(() => {
    if (!isOpen || messages.length === 0) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore quota errors
    }
  }, [messages, isOpen]);

  // Auto-scroll the native div to the latest message
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (messagesScrollRef.current) {
        messagesScrollRef.current.scrollTop = messagesScrollRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
    // NOTE: do NOT call focusInput here — scroll must not steal focus from
    // an input the user may be actively typing in.
  }, [messages, scrollToBottom]);

  const processMessage = async (messageText: string) => {
    if (!messageText.trim()) return;
    // Allow queuing while a previous response is loading — guard only against
    // truly empty messages, not against isLoading, so rapid-fire works.

    const userMessage: Message = {
      id: `${Date.now()}-user-${Math.random().toString(36).substring(7)}`,
      sender: "user",
      text: messageText.trim(),
    };

    const messagesWithUser = [...messages, userMessage];
    setMessages(messagesWithUser);

    const history = messagesWithUser.map(m => ({
      role: (m.sender === "bot" ? "assistant" : "user") as "assistant" | "user",
      content: m.text,
    }));

    setIsLoading(true);
    const loadingId = `${Date.now()}-bot-loading-${Math.random().toString(36).substring(7)}`;
    setMessages(prev => [...prev, { id: loadingId, sender: "bot", text: "...", isLoading: true }]);

    try {
      const result: PortfolioChatOutput = await getPortfolioChatResponse({
        userInput: messageText.trim(),
        history: history.slice(-10),
      });

      const validSuggestions = (result.suggestedFollowUps ?? [])
        .filter(s => s?.trim())
        .slice(0, 4);

      const botMessage: Message = {
        id: loadingId,
        sender: "bot",
        text: result.response,
        isLoading: false,
        suggestions: validSuggestions.length > 0 ? validSuggestions : INITIAL_SUGGESTIONS.slice(0, 4),
      };

      setMessages(prev => prev.map(msg => (msg.id === loadingId ? botMessage : msg)));
      setCurrentSuggestions(validSuggestions.length > 0 ? validSuggestions : INITIAL_SUGGESTIONS.slice(0, 4));
    } catch {
      const errorMessage: Message = {
        id: loadingId,
        sender: "bot",
        text: "I'm having a brief connection issue. Please try again in a moment!",
        isLoading: false,
        suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
      };
      setMessages(prev => prev.map(msg => (msg.id === loadingId ? errorMessage : msg)));
      setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0, 4));
    } finally {
      setIsLoading(false);
      // Re-focus after API response (or error) lands so user can type immediately
      focusInput();
    }
  };

  const handleSendCurrentInput = () => {
    const text = currentInput.trim();
    if (!text) return;
    // 1. Clear input value first (synchronous — no flicker)
    setCurrentInput("");
    // 2. Restore focus immediately so the user can start typing the next
    //    message while Sora is still generating a response
    focusInput();
    // 3. Fire async API request — does NOT block typing
    processMessage(text);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentInput("");
    focusInput();
    processMessage(suggestion);
  };

  const handleClearChat = () => {
    setMessages([initialBotMessage]);
    setCurrentSuggestions(INITIAL_SUGGESTIONS.slice(0, 4));
    setSuggestionsExpanded(true);
    setCurrentInput("");
    try { localStorage.removeItem(LOCAL_STORAGE_KEY); } catch { /* ignore */ }
    toast({ title: "Chat Cleared", description: "Memory has been reset." });
    focusInput();
  };

  const chatWindowVariants = {
    closed: { opacity: 0, y: 30, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 },
  };

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* ── Floating trigger button ────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
        <Button
          onClick={() => setIsOpen(o => !o)}
          size="icon"
          className={cn(
            "rounded-full h-14 w-14 shadow-2xl transition-all duration-300 transform hover:scale-110 p-0 overflow-hidden border-2 border-primary/40",
            isOpen
              ? "bg-card text-foreground border-border"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          aria-label="Toggle Sora AI Chatbot"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Avatar className="h-full w-full">
              <AvatarImage src={SORA_AVATAR_URL} alt="Sora AI" className="object-cover" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot className="h-7 w-7" />
              </AvatarFallback>
            </Avatar>
          )}
        </Button>
      </div>

      {/* ── Chat window ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatWindowVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              // Base: sit just above the trigger button, never go off-screen
              "fixed bottom-24 z-[9999] pointer-events-auto",
              "rounded-2xl bg-card/95 backdrop-blur-xl shadow-2xl border border-border",
              // Responsive widths: nearly full-width on mobile, fixed on larger screens
              "left-2 right-2",                       // mobile: 4px margins each side
              "sm:left-auto sm:right-6 sm:w-[380px]", // sm+: fixed right-anchored
              "md:w-[420px]",                          // md+: slightly wider
              // Height: flex column so the message area stretches, never overflows
              "flex flex-col",
              "max-h-[min(calc(100dvh-7.5rem),620px)]"
            )}
          >
            {/* Header — never scrolls */}
            <header className="flex-shrink-0 bg-secondary/40 p-3.5 border-b border-border flex items-center justify-between min-w-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <Avatar className="h-9 w-9 flex-shrink-0 border border-primary/50 overflow-hidden shadow-sm">
                  <AvatarImage src={SORA_AVATAR_URL} alt="Sora AI Assistant" className="object-cover" />
                  <AvatarFallback className="text-[10px]">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base text-foreground font-headline flex items-center gap-1.5 truncate">
                    Sora Assistant
                    <span className="flex-shrink-0 flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground truncate">Tinkal&apos;s Portfolio Assistant</p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1">
                <Button
                  variant="ghost" size="icon"
                  onClick={handleClearChat}
                  className="h-8 w-8 hover:text-destructive text-muted-foreground"
                  title="Clear chat history"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost" size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-muted-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </header>

            {/* Suggested Questions — open by default */}
            {currentSuggestions.length > 0 && (
              <div className="flex-shrink-0 p-2.5 border-b border-border/60 bg-secondary/20 min-w-0">
                {!suggestionsExpanded ? (
                  <Button
                    variant="ghost" size="sm"
                    className="w-full justify-start text-xs text-primary py-1.5 h-auto hover:bg-secondary/40"
                    onClick={() => setSuggestionsExpanded(true)}
                    disabled={isLoading}
                  >
                    <MessageSquarePlus className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span className="truncate">Suggested Questions</span>
                    <ChevronDown className="h-3.5 w-3.5 ml-auto flex-shrink-0" />
                  </Button>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-1.5 px-0.5">
                      <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                        <MessageSquarePlus className="h-3.5 w-3.5 text-primary" />
                        Suggested Questions
                      </span>
                      <Button
                        variant="ghost" size="sm"
                        className="h-6 px-1.5 text-[10px] text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                        onClick={() => setSuggestionsExpanded(false)}
                      >
                        Hide
                        <ChevronUp className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                    {/* Wrap chips; each chip text wraps internally */}
                    <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-0.5">
                      {currentSuggestions.map((q, i) => (
                        <Button
                          key={i}
                          variant="outline" size="sm"
                          className="text-[11px] h-auto py-1 px-2.5 rounded-full bg-card hover:bg-primary/10 border-border whitespace-normal text-left"
                          style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
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

            {/* ── Message area — THIS is the only scrollable zone ───────── */}
            {/* 
              We use a plain overflowing div instead of Radix ScrollArea.
              Radix ScrollArea creates its own viewport element that prevents
              scrollIntoView from reaching the correct container.
            */}
            <div
              ref={messagesScrollRef}
              className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3"
            >
              {messages.map(msg => (
                <ChatMessage
                  key={msg.id}
                  sender={msg.sender}
                  text={msg.text}
                  isLoading={msg.isLoading}
                />
              ))}
              {/* Sentinel — kept for future use but scroll is driven by scrollTop above */}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer / Input — multiline auto-expanding textarea */}
            <footer className="flex-shrink-0 p-3 border-t border-border bg-card">
              <form
                onSubmit={e => { e.preventDefault(); handleSendCurrentInput(); }}
                className="flex items-end gap-2 min-w-0"
              >
                <textarea
                  ref={textareaRef}
                  rows={1}
                  placeholder="Ask Sora anything about Tinkal... (Shift+Enter for new line)"
                  value={currentInput}
                  onChange={e => setCurrentInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendCurrentInput();
                    }
                  }}
                  className="flex-1 min-w-0 resize-none rounded-md border border-border/80 bg-background px-3 py-2 text-xs sm:text-sm leading-relaxed shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 overflow-y-auto"
                  style={{ minHeight: "38px", maxHeight: "120px" }}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !currentInput.trim()}
                  className="h-9 w-9 flex-shrink-0 mb-[1px]"
                >
                  {isLoading
                    ? <Loader2 className="h-4 w-4 animate-spin" />
                    : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}
