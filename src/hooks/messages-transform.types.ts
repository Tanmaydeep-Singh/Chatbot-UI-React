interface Message {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner?: boolean;
}
export class MessagesResponse {
  data: Message[];
  constructor(messages: Message[]) {
    this.data = messages;
  }
}

export interface MessagesModel {
  messages: MessagesResponse;
}
