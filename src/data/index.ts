interface Message {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner?: boolean;
}

const messages: Message[] = [];

export { messages };
