import React from 'react';
import CurrentChatRoomList from './CurrentChatRoomList';
import ChatWindow from './ChatWindow';
import styles from './index.scss';

const ChatView = () => {
  return (
    <div className={styles.chatView}>
      <CurrentChatRoomList />
      <ChatWindow />
    </div>
  );
};

export default ChatView;
