import * as actions from '../action/chatRoom';
import ChatHall from '../class/ChatHall';
import ChatRoom from '../class/ChatRoom';
import User from '../class/User';
import Message from '../class/Message';
import { getCurrentTime } from '../utils';

const chatHall = new ChatHall();
let currentChatRoom = null;
let user = null;

const initiState = {
  username: '',
  publicChatRooms: [],
  participateChatRooms: [],
  currentChatRoom: {
    id: '',
    name: '',
    numberLimit: '',
    numberParticipate: '',
    messages: '',
  },
};

const chatRoomReducer = (state = initiState, action: any) => {
  const updateChatRoomInfo = () => ({
    ...state,
    username: user ? user.name : '',
    publicChatRooms: chatHall.chatRooms,
    participateChatRooms: user ? user.chatRooms : [],
    currentChatRoom: {
      ...state.currentChatRoom,
      id: currentChatRoom ? currentChatRoom.id : '',
      name: currentChatRoom ? currentChatRoom.name : '',
      numberLimit: currentChatRoom ? currentChatRoom.numberLimit : 0,
      numberParticipate: currentChatRoom ? currentChatRoom.users.length : 0,
      messages: currentChatRoom ? currentChatRoom.messages : [],
    },
  });
  switch (action.type) {
    case actions.CREATE_USER:
      user = new User(action.payload.nickname);
      return updateChatRoomInfo();
    case actions.CREATE_CHATROOM: {
      currentChatRoom = new ChatRoom(
        action.payload.name, action.payload.numberLimit
      );
      chatHall.addChatRoom(currentChatRoom);
      user.joinChatRoom(currentChatRoom);
      return updateChatRoomInfo();
    }
    case actions.SEND_MESSAGE: {
      const time = getCurrentTime();
      const message = new Message(
        time, user.name, action.payload.message
      );
      currentChatRoom.addMessage(message);
      return updateChatRoomInfo();
    }
    case actions.CHANGE_CURRENT_CHAT_ROOM:
      currentChatRoom = action.payload.chatRoom;
      return updateChatRoomInfo();
    case actions.JOIN_CHAT_ROOM: {
      user.joinChatRoom(action.payload.chatRoom);
      currentChatRoom = action.payload.chatRoom;
      return updateChatRoomInfo();
    }
    case actions.LEAVE_CHAT_ROOM: {
      user.leaveChatRoom(action.payload.chatRoom);
      [currentChatRoom] = user.chatRooms;
      return updateChatRoomInfo();
    }
    default:
      return { ...state, };
  }
};

export default chatRoomReducer;
