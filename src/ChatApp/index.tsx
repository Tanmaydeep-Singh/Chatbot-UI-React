import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatContent from "./ChatContent/ChatContent";
import ChatInputBox from "./ChatInputBox/ChatInputBox";
import { useGetMessages } from "../hooks/useGetMessages";

const Chat = () => {
  /** Simulate a hook fetching the data */
  interface Message {
    text: string;
    sentBy: string;
    isChatOwner?: boolean;
  }

  const {
    messages: { data }
  } = useGetMessages();

  /** State to control new messages */
  const [chatMessages, setChatMessages] = React.useState<Message[]>(data);

  /**
   *
   * @param message
   * "Create" a new message
   */
  const sendANewMessage = (message: Message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="max-w-sm mx-auto mt-32 ">
      <div className="bg-white border border-gray-200 rounded-lg shadow relative">
        <ChatHeader  />
        <ChatContent messages={chatMessages} />
        <ChatInputBox sendANewMessage={sendANewMessage} />
      </div>
    </div>
  );
};

export default Chat;
