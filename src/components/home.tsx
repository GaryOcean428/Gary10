import React from "react";
import ChatContainer from "./chat/ChatContainer";

interface HomeProps {
  onSendMessage?: (message: string) => void;
  isTyping?: boolean;
  disabled?: boolean;
  messages?: Array<{
    id: string;
    text: string;
    sender: {
      id: string;
      name: string;
      avatar?: string;
    };
    timestamp: string;
    isCurrentUser: boolean;
  }>;
}

const defaultMessages = [
  {
    id: "1",
    text: "Welcome to the chat!",
    sender: {
      id: "1",
      name: "System",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=System",
    },
    timestamp: new Date().toLocaleTimeString(),
    isCurrentUser: false,
  },
];

const Home = ({
  onSendMessage = () => {},
  isTyping = false,
  disabled = false,
  messages = defaultMessages,
}: HomeProps) => {
  return (
    <div className="flex min-h-screen w-full bg-background p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto h-[calc(100vh-4rem)]">
        <ChatContainer
          onSendMessage={onSendMessage}
          isTyping={isTyping}
          disabled={disabled}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default Home;
