import { useState } from "react";

interface Message {
  role: "user" | "assistant" | "tool";
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    setIsLoading(true);

    const userMessage: Message = { role: "user", content };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      const newMessages = data.response.messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
      }));
      setMessages((prev) => [...prev, ...newMessages]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Add error message to chat
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, there was an error processing your message.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading,
  };
}
