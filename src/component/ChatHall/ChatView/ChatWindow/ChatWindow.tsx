import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import JoinMessage from './JoinMessage';
import UserMessage from './UserMessage';
import SelfMessage from './SelfMessage';
import { getCurrentTime } from '../../../../utils';
import styles from './index.scss';

const ChatWindow = () => {
  const chatWindow = useRef(null);
  const {
    currentChatRoom: { messages, },
    username,
  } = useSelector(state => state);

  const updateScallPosition = useCallback(
    () => {
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    },
    [messages]
  );

  const isSameOfLast = (index: number) => (
    index !== 0
    && messages[index - 1].name === messages[index].name
    && messages[index - 1].sendTime === messages[index].sendTime
  );

  const isSelfMessage = (index: number) => (
    messages[index].name === username
  );

  const getMessageGroup = (index: number) => {

    const generateMessageGroupArray = (messagesRange, initMessage) => {
      const messageGroup = [...initMessage];
      messagesRange.every((message: any, i: number) => {
        if (messageGroup[0].name === messagesRange[i].name
        && messageGroup[0].sendTime === messagesRange[i].sendTime) {
          messageGroup.push(message);
          return true;
        }
        return false;
      });
      return messageGroup;
    };

    let messagesRange = [...messages];
    messagesRange = messagesRange.slice(index + 1);
    const initMessage: any[] = [messages[index]];
    const messageGroup = generateMessageGroupArray(messagesRange, initMessage);
    updateScallPosition();
    return (
      isSelfMessage(index)
        ? <SelfMessage messageGroup={messageGroup} />
        : <UserMessage messageGroup={messageGroup} />
    );
  };
  return (
    <div
      ref={chatWindow}
      className={styles.chatWindow}
    >
      <div className={styles.messageBlock}>
        <div className={styles.message}>
          <div className={styles.timeBlock}>
            {getCurrentTime()}
          </div>
          <JoinMessage name={username} />
        </div>
        {
          messages.map((message: any, index: number) => (
            isSameOfLast(index)
              ? null
              : (
                <div
                  key={message.id}
                  className={styles.message}
                >
                  <div className={styles.timeBlock}>
                    {message.sendTime}
                  </div>
                  {getMessageGroup(index)}
                </div>
              )
          ))
        }
      </div>
    </div>
  );
};

export default ChatWindow;
