import { IChatRoom } from "../interface/IChatRoom";

export const CREATE_USER = 'CREATE_USER';

export const createUser = (nickname: string) => ({
  type: CREATE_USER,
  payload: {
    nickname,
  },
});

export const CREATE_CHATROOM = 'CREATE_CHATROOM';

export const createChatRoom = (
  name: string, numberLimit: number
) => ({
  type: CREATE_CHATROOM,
  payload: {
    name,
    numberLimit,
  },
});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (message: string) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
  },
});

export const CHANGE_CURRENT_CHAT_ROOM = 'CHANGE_CURRENT_CHAT_ROOM';

export const chageCurrentChatRoom = (chatRoom: IChatRoom) => ({
  type: CHANGE_CURRENT_CHAT_ROOM,
  payload: {
    chatRoom,
  },
});

export const LEAVE_CHAT_ROOM = 'LEAVE_CHAT_ROOM';

export const leaveChatRoom = (chatRoom: IChatRoom) => ({
  type: LEAVE_CHAT_ROOM,
  payload: {
    chatRoom,
  },
});
