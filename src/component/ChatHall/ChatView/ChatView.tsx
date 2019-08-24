import React from 'react';
import CurrentChatRoomList from './CurrentChatRoomList';
import ChatWindow from './ChatWindow';
import InputMessage from './InputMessage';
import styles from './index.scss';

const ChatView = () => {
  return (
    <div className={styles.chatView}>
      <CurrentChatRoomList />
      <ChatWindow />
      <InputMessage />
    </div>
  );
};

export default ChatView;
