import * as actions from '../action/chatRoom';
import User from '../class/User';

const initiState = {
  user: null,
};

const chatRoomReducer = (state = initiState, action: any) => {
  switch (action.type) {
    case actions.CREATE_USER:
      return {
        ...state,
        user: new User(action.payload.nickname),
      };
    default:
      return { ...state, };
  }
};

export default chatRoomReducer;
