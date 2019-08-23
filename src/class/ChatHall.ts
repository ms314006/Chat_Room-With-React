import { IChatHall } from '../interface/IChatHall';
import { IChatRoom } from '../interface/IChatRoom';

class ChatHall implements IChatHall {

  chatRooms: IChatRoom[] = [];

  addChatRoom = (chatRoom: IChatRoom): void => {
    this.chatRooms.push(chatRoom);
  }

  subChatRoom = (chatRoom: IChatRoom): void => {
    this.chatRooms.splice(this.chatRooms.indexOf(chatRoom), 1);
  }

}

export default ChatHall;
