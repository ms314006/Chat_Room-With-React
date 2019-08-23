import { IChatRoom } from './IChatRoom';

export interface IChatHall {
  chatRooms: IChatRoom[];
  addChatRoom: (chartRoom: IChatRoom) => void;
  subChatRoom: (chartRoom: IChatRoom) => void;
}
