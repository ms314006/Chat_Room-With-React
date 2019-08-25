import * as actions from '../action/chatRoom';
import ChatHall from '../class/ChatHall';
import ChatRoom from '../class/ChatRoom';
import User from '../class/User';
import Message from '../class/Message';
import { getCurrentTime } from '../utils';

const chatHall = new ChatHall();
let currentChatRoom = null;
let user = null;

const autoResponse = () => {
  const firstWelcomeMessage = () => {
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      'superUser',
      '嗨！你好啊！我是超級使用者，雖然這裡還沒什麼人，但我會偶爾回覆你的！'
    ));
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      'superUser',
      '但是但是，真的偶爾而已哦！你也知道超級使用者是很忙的！'
    ));
  };

  const secondWelcomeMessage = () => {
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      'superUser',
      '欸啊啊！我忘了說，如果你在等我的時候覺得無聊，可以到神 Q 超人的 Medium 看看！'
    ));
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      'superUser',
      'https://medium.com/enjoy-life-enjoy-coding'
    ));
    currentChatRoom.addMessage(new Message(
      getCurrentTime(),
      'superUser',
      '自從看了，我每次考試都一百分呢：）'
    ));
  };

  switch (true){
    case currentChatRoom.messages.length === 1:
      firstWelcomeMessage();
      break;
    case currentChatRoom.messages.length === 4:
      secondWelcomeMessage();
      break;
    default:
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
