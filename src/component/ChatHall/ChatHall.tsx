import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatView from './ChatView';
import styles from './index.scss';

const ChatHall = withRouter(({ history, }) => {

  const { username, } = useSelector(state => state);

  if (!username) {
    history.push('/');
    return null;
  }

  return (
    <div className={styles.chatHall}>
      <Sidebar />
      <ChatView />
    </div>
  );
});

export default ChatHall;
