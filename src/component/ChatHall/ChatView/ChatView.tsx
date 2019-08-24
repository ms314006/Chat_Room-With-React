import React from 'react';
import CurrentChatRoomList from './CurrentChatRoomList';
import styles from './index.scss';

const ChatView = () => {
  return (
    <div className={styles.chatView}>
      <CurrentChatRoomList />
    </div>
  );
};

export default ChatView;
