import * as actions from '../action/chatRoom';
import ChatHall from '../class/ChatHall';
import ChatRoom from '../class/ChatRoom';
import User from '../class/User';
import Message from '../class/Message';
import { getCurrentTime, getRandom } from '../utils';
import { autoResponseMessageList } from '../asset/autoResponseMessages';

const chatHall = new ChatHall();
let currentChatRoom = null;
let user = null;

const autoResponse = () => {
  const firstWelcomeMessage = () => {
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      '最強 8+9',
      'Hi！我是最強 8+9 ，雖然這裡還沒什麼人，但我會偶爾回覆你的！'
    ));
  };

  const secondWelcomeMessage = () => {
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      '最強 8+9',
      '欸啊啊！我忘了說，如果你在等我的時候覺得無聊，可以到神 Q 超人的 Medium 看看！'
    ));
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      '最強 8+9',
      'https://medium.com/enjoy-life-enjoy-coding'
    ));
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      '最強 8+9',
      '自從看了，我每次考試都一百分呢 ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡'
    ));
  };

  switch (true){
    case currentChatRoom.messages.length === 0:
      firstWelcomeMessage();
      break;
    case currentChatRoom.messages.length === 2:
      secondWelcomeMessage();
      break;
    default:
      if (getRandom(0, 15) < 10) {
        currentChatRoom.addMessage(new Message(
          getCurrentTime(),
          '最強 8+9',
          autoResponseMessageList[Number(getRandom(0, 9))]
        ));
      }
      break;
  }
};


const initiState = {
  searchWord: '',
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
      autoResponse();
      return updateChatRoomInfo();
    }
    case actions.SEND_MESSAGE: {
      const message = new Message(
        getCurrentTime(), user.name, action.payload.message
      );
      currentChatRoom.addMessage(message);

      autoResponse();

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
    case actions.SET_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.searchWord,
      };
    default:
      return { ...state, };
  }
};

export default chatRoomReducer;
