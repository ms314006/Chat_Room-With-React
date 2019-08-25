import uuidv1 from 'uuid/v1';
import { IMessage } from "../interface/IMessage";

class Message implements IMessage {
  id: string = uuidv1();

  sendTime: string;

  name: string;

  message: string;

  constructor(sendTime: string, name: string, message: string) {
    this.sendTime = sendTime;
    this.name = name;
    this.message = message;
  }
}

export default Message;
