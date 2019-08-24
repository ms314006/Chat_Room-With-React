import React from 'react';
import Sidebar from './Sidebar';
import styles from './index.scss';

const ChatHall = () => {
  return (
    <div
      className={styles.chatHall}
    >
      <Sidebar />
    </div>
  );
};

export default ChatHall;
