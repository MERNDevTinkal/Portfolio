"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User, Bot, Sparkles } from 'lucide-react';
import { SORA_AVATAR_URL } from '@/lib/data';

interface ChatMessageProps {
  sender: "user" | "bot";
  text: string;
  isLoading?: boolean;
}

// Simple text formatter for bullet points, bold text, links, code, and line breaks
function FormattedMessageText({ text }: { text: string }) {
  const lines = text.split('\n');

  return (
    <div className="space-y-1.5 leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Check if line is a bullet point or numbered item
        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('*') || trimmed.startsWith('-');
        const cleanLine = isBullet ? trimmed.substring(1).trim() : trimmed;

        return (
          <div key={idx} className={cn(isBullet && "flex items-start gap-2 pl-1")}>
            {isBullet && (
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0 opacity-80" />
            )}
            <span className="flex-1">
              {formatInlineText(cleanLine)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function formatInlineText(text: string) {
  // Regex to split bold formatting **text** or *text* and URLs
  const parts = text.split(/(\*\*.*?\*\*|https?:\/\/[^\s]+)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-foreground dark:text-foreground">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('http://') || part.startsWith('https://')) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity break-all font-medium"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export const ChatMessage = React.memo(function ChatMessage({ sender, text, isLoading = false }: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div className={cn("flex items-start gap-2.5 mb-4 group", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <Avatar className="h-8 w-8 border border-primary/30 shadow-sm shrink-0 overflow-hidden mt-0.5">
          <AvatarImage 
            src={SORA_AVATAR_URL} 
            alt="Sora AI Assistant" 
            className="object-cover"
          />
          <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-[10px] font-medium">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "max-w-[82%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm shadow-sm transition-all duration-200",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-xs font-normal"
            : "bg-card/95 text-card-foreground border border-border/70 rounded-bl-xs backdrop-blur-sm"
        )}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2 py-1 px-1">
            <Sparkles className="h-4 w-4 text-primary animate-spin opacity-80" />
            <div className="flex items-center space-x-1">
              <span className="h-2 w-2 bg-primary/80 rounded-full animate-bounce delay-0" />
              <span className="h-2 w-2 bg-primary/80 rounded-full animate-bounce delay-150" />
              <span className="h-2 w-2 bg-primary/80 rounded-full animate-bounce delay-300" />
            </div>
            <span className="text-xs text-muted-foreground font-medium ml-1">Sora is thinking...</span>
          </div>
        ) : (
          <FormattedMessageText text={text} />
        )}
      </div>

      {isUser && (
        <Avatar className="h-8 w-8 border border-muted-foreground/30 shadow-sm shrink-0 overflow-hidden mt-0.5">
          <AvatarFallback className="bg-muted text-muted-foreground font-medium">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';
