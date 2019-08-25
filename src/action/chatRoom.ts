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
