import React from 'react';
import { useSelector } from 'react-redux';
import CurrentChatRoomList from './CurrentChatRoomList';
import ChatWindow from './ChatWindow';
import InputMessage from './InputMessage';
import styles from './index.scss';

const ChatView = () => {
  const { participateChatRooms, } = useSelector(state => state);
  return (
    <div className={styles.chatView}>
      <CurrentChatRoomList />
      {
        participateChatRooms.length === 0
          ? <div>sdfdsf</div>
          : (
            <>
              <ChatWindow />
              <InputMessage />
            </>
          )
      }
    </div>
  );
};

export default ChatView;
