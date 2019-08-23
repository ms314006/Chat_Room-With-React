import uuidv1 from 'uuid/v1';
import { IPeople } from '../interface/IPeople';
import { IChatRoom } from '../interface/IChatRoom';

class People implements IPeople {

  name: string;

  chatRooms: IChatRoom[] = [];

  constructor(name: string) {
    this.name = name || uuidv1();
  }

  joinChatRoom = (chatRoom: IChatRoom) => {
    this.chatRooms.push(chatRoom);
    chatRoom.addPeople(this);
  }

  leaveChatRoom = (chatRoom: IChatRoom) => {
    this.chatRooms.splice(this.chatRooms.indexOf(chatRoom), 1);
    chatRoom.subPeople(this);
  }
}

export default People;
