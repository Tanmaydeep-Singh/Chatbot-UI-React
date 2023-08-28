import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatContent from "./ChatContent/ChatContent";
import ChatInputBox from "./ChatInputBox/ChatInputBox";
import { useGetMessages } from "../hooks/useGetMessages";
import bg from "../Zuraverse.jpeg"

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

  const [chatMessages, setChatMessages] = React.useState<Message[]>(data);

   
  const sendANewMessage = (message: Message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="overflow-y-hidden	">
      <div> <img src={bg} className=" relative h-screen w-screen object-fill 	" />  </div>
    <div className="max-w-sm mx-auto mt-32 absolute top-[-10%] right-[38%] ">
      <div className="bg-white border border-gray-200 rounded-lg shadow relative w-96 top-32 ">
        <ChatHeader  />
        <ChatContent messages={chatMessages} />
        <ChatInputBox sendANewMessage={sendANewMessage} />
      </div>
    </div>
    </div>
  );
};

export default Chat;
