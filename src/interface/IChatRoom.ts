import { IUser } from './IUser';

export interface IChatRoom {
  name: string;
  users: IUser[];
  addUser: (user: IUser) => void;
  subUser: (user: IUser) => void;
}
