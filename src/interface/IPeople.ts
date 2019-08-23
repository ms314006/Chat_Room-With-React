import { IChatRoom } from "./IChatRoom";

export interface IPeople {
  name: string;
  chatRooms: IChatRoom[];
  joinChatRoom: (chatRoom: IChatRoom) => void;
  leaveChatRoom: (chatRoom: IChatRoom) => void;
}
