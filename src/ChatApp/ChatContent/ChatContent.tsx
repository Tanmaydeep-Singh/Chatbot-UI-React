import React from "react";
import {} from "../../hooks/messages-transform.types";

interface Message {
  text: string;
  sentBy: string;
  isChatOwner?: boolean;
}
interface ChatContentProps {
  messages: Message[];
}

const ChatContent = ({ messages }: ChatContentProps) => {
  return (
    <div className="max-h-64 h-64 px-6 py-1 overflow-auto">
      {messages.map((message: Message, index: number) => (
        <div
          key={index}
          className={`py-2 flex flex-row w-full ${
            message.isChatOwner ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`${message.isChatOwner ? "order-2" : "order-1"}`}>
          </div>
          <div
            className={`px-2 w-fit py-3 flex flex-col bg-purple-500 rounded-lg text-white ${
              message.isChatOwner ? "order-1 mr-2" : "order-2 ml-2"
            }`}
          >
            <span className="text-xs text-gray-200">
              {message.sentBy}
            </span>
            <span className="text-md">{message.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContent;
