import * as actions from '../action/chatRoom';
import ChatHall from '../class/ChatHall';
import ChatRoom from '../class/ChatRoom';
import User from '../class/User';
import Message from '../class/Message';
import { getCurrentTime } from '../utils';

const initiState = {
  chatHall: new ChatHall(),
  currentChatRoom: null,
  user: null,
};

const chatRoomReducer = (state = initiState, action: any) => {
  switch (action.type) {
    case actions.CREATE_USER:
      return {
        ...state,
        user: new User(action.payload.nickname),
      };
    case actions.CREATE_CHATROOM: {
      const chatRoom = new ChatRoom(
        action.payload.name, action.payload.numberLimit
      );
      state.chatHall.addChatRoom(chatRoom);
      state.user.joinChatRoom(chatRoom);
      return {
        ...state,
        currentChatRoom: chatRoom,
      };
    }
    case actions.SEND_MESSAGE: {
      const time = getCurrentTime();
      const message = new Message(
        time, state.user.name, action.payload.message
      );
      state.currentChatRoom.addMessage(message);
      return { ...state, };
    }
    case actions.CHANGE_CURRENT_CHAT_ROOM:
      return {
        ...state,
        currentChatRoom: action.payload.chatRoom,
      };
    case actions.LEAVE_CHAT_ROOM: {
      state.user.leaveChatRoom(action.payload.chatRoom);
      console.log(JSON.stringify(state.user.chatRooms[0].name))
      return { ...state, };
    }
    default:
      return { ...state, };
  }
};

export default chatRoomReducer;
