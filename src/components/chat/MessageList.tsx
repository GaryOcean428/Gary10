import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamp: string;
  isCurrentUser: boolean;
}

interface MessageListProps {
  messages?: Message[];
}

const defaultMessages: Message[] = [
  {
    id: "1",
    text: "Hey there! How are you?",
    sender: {
      id: "1",
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    timestamp: "10:00 AM",
    isCurrentUser: false,
  },
  {
    id: "2",
    text: "I'm doing great! Thanks for asking. How about you?",
    sender: {
      id: "2",
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    timestamp: "10:01 AM",
    isCurrentUser: true,
  },
  {
    id: "3",
    text: "Pretty good! Just working on some new features.",
    sender: {
      id: "1",
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    timestamp: "10:02 AM",
    isCurrentUser: false,
  },
];

const MessageBubble = ({ message }: { message: Message }) => {
  return (
    <div
      className={cn(
        "flex items-start gap-2 mb-4",
        message.isCurrentUser ? "flex-row-reverse" : "flex-row",
      )}
    >
      <Avatar className="w-8 h-8">
        <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
        <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "flex flex-col max-w-[70%]",
          message.isCurrentUser ? "items-end" : "items-start",
        )}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">{message.sender.name}</span>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
        <div
          className={cn(
            "rounded-lg px-4 py-2",
            message.isCurrentUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted",
          )}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
};

const MessageList = ({ messages = defaultMessages }: MessageListProps) => {
  return (
    <div className="h-full w-full bg-background">
      <ScrollArea className="h-full w-full p-4">
        <div className="flex flex-col">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageList;
