"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { sendHistory } from "@/utils/reportHistory";

export default function ChatBot({
  isChatBotOpen: isOpen,
  setIsChatBotOpen: setIsOpen,
}: {
  isChatBotOpen: boolean;
  setIsChatBotOpen: (isOpen: boolean) => void;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! Feel free to ask me anything about Lumio or your specific AI needs.",
      timestamp: new Date().toLocaleTimeString([], { timeStyle: "short" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const timer = setTimeout(() => {
      setShowWelcome(true);
    // }, 5000);

    // return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const quickOptions = [
    "What is Lumio, and how can it help my business?",
    "Can you integrate AI with my existing systems?",
    "Can AI help with submitting lots of online applications?",
  ];

  const handleSend = async (inputValue: string) => {
    if (!inputValue.trim()) return;

    const newMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { timeStyle: "short" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: [...messages, newMessage] }),
    });

    setIsTyping(false);

    const reader = response.body ? response.body.getReader() : null;

    let result = "";

    while (true) {
      const { done, value } = (await reader?.read()) || {
        done: true,
        value: new Uint8Array(),
      };

      if (done) break;

      result += new TextDecoder().decode(value);

      const aiMessage = {
        role: "assistant",
        content: result,
        timestamp: new Date().toLocaleTimeString([], { timeStyle: "short" }),
      };

      setMessages([...messages, newMessage, aiMessage]);
    }

    await sendHistory(
      [
        ...messages,
        newMessage,
        {
          role: "assistant",
          content: result,
          timestamp: new Date().toLocaleTimeString([], { timeStyle: "short" }),
        },
      ],
      "chat"
    );
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {showWelcome && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px] animate-fade-in ">
          <p className="text-sm">Hello! Feel free to ask me anything about Lumio or...</p>
        </div>
      )}

      <Button
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 p-0 shadow-lg z-[2]"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <div
        className={`fixed bottom-0 right-0 max-w-[100vw] z-[3] w-[400px] bg-background shadow-lg transform transition-transform duration-300 ease-in-out h-[calc(100vh-4rem)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/images/logos/Lumio AI.png" />

                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">AI Assistant by Lumio</h2>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } mb-4`}
                id={`sswad0_${index}`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                  id={`vvzsey_${index}`}
                >
                  <Avatar className="h-8 w-8" id={`wyixj5_${index}`}>
                    {message.role === "assistant" ? (
                      <AvatarImage
                        src="/images/logos/Lumio AI.png"
                        id={`iwgwru_${index}`}
                      />
                    ) : (
                      <AvatarFallback id={`a0785d_${index}`}>U</AvatarFallback>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                    id={`smh9w1_${index}`}
                  >
                    <ReactMarkdown
                      className={cn(
                        "prose-sm",
                        message.role === "user" ? "prose-invert" : "prose"
                      )}
                    >
                      {message.content}
                    </ReactMarkdown>
                    <p
                      className="text-xs opacity-70 mt-1"
                      id={`3ub16h_${index}`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <Card className="w-fit">
                  <CardContent className="p-2">
                    <Badge variant="secondary">AI is typing...</Badge>
                  </CardContent>
                </Card>
              </div>
            )}
            <div ref={chatEndRef} />
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickOptions.map((option, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => {
                    setInputValue(option);
                    handleSend(option);
                  }}
                  id={`c8nj8k_${index}`}
                >
                  {option}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
              />

              <Button size="icon" onClick={() => handleSend(inputValue)}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
