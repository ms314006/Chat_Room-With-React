import { IChatRoom } from '../interface/IChatRoom';
import { IUser } from '../interface/IUser';

class ChatRoom implements IChatRoom {

  name: string;

  users: IUser[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addUser = (user: IUser): void => {
    this.users.push(user);
  };

  subUser = (user: IUser): void => {
    this.users.splice(this.users.indexOf(user), 1);
  };

}

export default ChatRoom;
