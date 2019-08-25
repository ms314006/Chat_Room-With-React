import uuidv1 from 'uuid/v1';
import { IUser } from '../interface/IUser';
import { IChatRoom } from '../interface/IChatRoom';

class User implements IUser {

  name: string;

  chatRooms: IChatRoom[] = [];

  constructor(name: string) {
    this.name = name || uuidv1();
  }

  joinChatRoom = (chatRoom: IChatRoom) => {
    this.chatRooms.push(chatRoom);
    chatRoom.addUser(this);
  }

  leaveChatRoom = (chatRoom: IChatRoom) => {
    this.chatRooms.splice(this.chatRooms.indexOf(chatRoom), 1);
    chatRoom.subUser(this);
  }
}

export default User;
