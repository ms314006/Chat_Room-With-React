import React from 'react';
import Sidebar from './Sidebar';
import ChatView from './ChatView';
import styles from './index.scss';

const ChatHall = () => {
  return (
    <div
      className={styles.chatHall}
    >
      <Sidebar />
      <ChatView />
    </div>
  );
};

export default ChatHall;
