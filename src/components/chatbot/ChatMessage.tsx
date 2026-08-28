"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { UserCircle2, Bot } from 'lucide-react';
import { SORA_AVATAR_URL } from '@/lib/data';

interface ChatMessageProps {
  sender: "user" | "bot";
  text: string;
  isLoading?: boolean;
}

export const ChatMessage = React.memo(function ChatMessage({ sender, text, isLoading = false }: ChatMessageProps) {
  const isUser = sender === "user";

  // Clean up raw error JSON that may slip through from the AI flow
  const displayText = React.useMemo(() => {
    if (isUser || isLoading) return text;
    // If the response looks like a raw JSON/error dump, show a friendly message
    if (text.startsWith('[Sora Error]') || text.startsWith('{"error"')) {
      return "I'm having a brief connection issue. Please try again in a moment!";
    }
    return text;
  }, [text, isUser, isLoading]);

  return (
    <div
      className={cn(
        "flex items-start gap-2 mb-3 w-full min-w-0",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {isUser ? (
          <Avatar className="h-7 w-7 border border-muted-foreground/50">
            <AvatarFallback className="bg-muted text-muted-foreground">
              <UserCircle2 className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        ) : (
          <Avatar className="h-7 w-7 border border-primary/50 overflow-hidden">
            <AvatarImage
              src={SORA_AVATAR_URL}
              alt="Sora AI Assistant"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground text-[10px]">
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      {/* Bubble */}
      <div
        className={cn(
          // max-w keeps bubble from taking full width; min-w-0 allows flex shrinking
          "min-w-0 max-w-[75%] rounded-xl p-2.5 text-sm shadow-sm",
          // word wrapping for long text, URLs, code
          "break-words overflow-wrap-anywhere",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-secondary/60 text-card-foreground rounded-tl-none border border-border"
        )}
        style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
      >
        {isLoading ? (
          <div className="flex items-center space-x-1 py-0.5">
            <span className="h-2 w-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="h-2 w-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="h-2 w-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        ) : (
          displayText.split('\n').map((line, index, arr) => (
            <span key={index}>
              {line}
              {index < arr.length - 1 && <br />}
            </span>
          ))
        )}
      </div>
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';
