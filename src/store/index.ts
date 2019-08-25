import { createStore } from 'redux';
import chatRoomReducer from '../reducer/chatRoom';

const store = createStore(chatRoomReducer);

// 上線拿掉
window.store = store;

export default store;
