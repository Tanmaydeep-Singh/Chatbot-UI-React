import React from "react";
import DebouncedInput from "../../components/DebouncedInput";
import axios from "axios";
interface Message {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner?: boolean;
}

interface ChatInputBoxProps {
  sendANewMessage: (message: Message) => void;
}

const ChatInputBox = ({ sendANewMessage }: ChatInputBoxProps) => {
  const [newMessage, setNewMessage] = React.useState("");

  /**
   * Send message handler
   * Should empty text field after sent
   */
  const doSendMessage = async() => {
    console.log(  "called")
    if (newMessage && newMessage.length > 0) {
      const newMessagePayload: Message = {
        sentAt: new Date(),
        sentBy: "You",
        isChatOwner: true,
        text: newMessage
      };
      sendANewMessage(newMessagePayload);
      setNewMessage("");


  const body = {
      "message" : newMessage
    }
  
    const response = await axios.post("http://192.168.1.127:8000//predict", body)
       const newResponsePayload: Message = {
      sentAt: new Date(),
      sentBy: "ZuraBot",
      isChatOwner: false,
      text: response.data.answer
    };
    sendANewMessage(newResponsePayload);


   
    }
  };

  return (
    <div className="px-6 py-3 bg-white w-100 overflow-hidden rounded-bl-xl rounded-br-xla">
      <div className="flex flex-row items-center space-x-5">
        <DebouncedInput
          value={newMessage ?? ""}
          debounce={100}
          onChange={(value) => setNewMessage(String(value))}
        />
        <button
          type="button"
          disabled={!newMessage || newMessage.length === 0}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 disabled:opacity-50"
          onClick={() => doSendMessage()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
