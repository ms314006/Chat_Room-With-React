import { IUser } from './IUser';
import { IMessage } from './IMessage';

export interface IChatRoom {
  id: string;
  name: string;
  numberLimit: number;
  users: IUser[];
  messages: IMessage[];
  addUser: (user: IUser) => void;
  subUser: (user: IUser) => void;
  addMessage: (message: IMessage) => void;
}
