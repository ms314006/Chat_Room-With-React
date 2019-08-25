import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatView from './ChatView';
import styles from './index.scss';

const ChatHall = withRouter(({ history, }) => {

  const { user, } = useSelector(state => state);
  if (user === null) {
    history.push('/');
  }

  return (
    <div
      className={styles.chatHall}
    >
      <Sidebar />
      <ChatView />
    </div>
  );
});

export default ChatHall;
