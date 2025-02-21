import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface ChatContainerProps {
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

const ChatContainer = ({
  onSendMessage = () => {},
  isTyping = false,
  disabled = false,
  messages = [],
}: ChatContainerProps) => {
  return (
    <div className="flex h-full w-full bg-background border rounded-lg overflow-hidden">
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-1 overflow-hidden">
          <MessageList messages={messages} />
        </div>
        <MessageInput
          onSendMessage={onSendMessage}
          isTyping={isTyping}
          disabled={disabled}
        />
      </div>
      <div className="w-[200px] border-l hidden md:block bg-muted p-4">
        <h3 className="font-semibold mb-4">Online Users</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>John Doe</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Jane Smith</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span>Mike Johnson</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
