import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { getResponse, getWelcomeMessage } from "@/lib/chatResponses";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  isNew: boolean;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: getWelcomeMessage(),
      isUser: false,
      isNew: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Mark messages as not new after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => ({ ...msg, isNew: false }))
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue.trim(),
      isUser: true,
      isNew: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking and typing
    const typingDelay = Math.random() * 1000 + 800;
    
    setTimeout(() => {
      const botResponse = getResponse(userMessage.content);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        isUser: false,
        isNew: true,
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, typingDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-chat overflow-hidden chat-widget-enter">
          {/* Header */}
          <div className="bg-primary px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">
                  Customer Support
                </h3>
                <p className="text-xs text-primary-foreground/80">
                  We typically reply instantly
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                isUser={message.isUser}
                isNew={message.isNew}
              />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-card border-t border-border">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="icon"
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-chat-button flex items-center justify-center transition-all duration-300 relative",
          isOpen
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground hover:scale-105"
        )}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary pulse-ring" />
        )}
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
