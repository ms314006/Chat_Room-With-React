import { IChatRoom } from '../interface/IChatRoom';
import { IUser } from '../interface/IUser';
import { IMessage } from '../interface/IMessage';

class ChatRoom implements IChatRoom {

  id: string;

  name: string;

  numberLimit: number;

  users: IUser[] = [];

  messages: IMessage[] = [];

  constructor(name: string, numberLimit: number) {
    this.id = `C${String(Math.random()).slice(-3)}.`;
    this.name = name;
    this.numberLimit = numberLimit;
  }

  addUser = (user: IUser): void => {
    this.users.push(user);
  };

  subUser = (user: IUser): void => {
    this.users.splice(this.users.indexOf(user), 1);
  };

  addMessage = (message: IMessage): void => {
    this.messages.push(message);
  }

}

export default ChatRoom;
