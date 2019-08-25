import React from 'react';
import { useSelector } from 'react-redux';
import CurrentChatRoomList from './CurrentChatRoomList';
import InitialChatWindow from './InitialChatWindow';
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
          ? <InitialChatWindow />
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
