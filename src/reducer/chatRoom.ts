import * as actions from '../action/chatRoom';
import ChatHall from '../class/ChatHall';
import ChatRoom from '../class/ChatRoom';
import User from '../class/User';

const initiState = {
  chatHall: new ChatHall(),
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
      return { ...state, };
    }
    default:
      return { ...state, };
  }
};

export default chatRoomReducer;
