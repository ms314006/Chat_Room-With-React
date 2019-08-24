import React, { useState } from 'react';
import JoinMessage from './JoinMessage';
import UserMessage from './UserMessage';
import styles from './index.scss';

const MessageTime = () => {
  const getCurrentTime = () => {
    const fillZeroToTwoLength = (word: number) => {
      let result = String(word);
      if (result.length >= 2) {
        return result;
      }
      while (result.length < 2) {
        result = `0${result}`;
      }
      return result;
    };

    const date = new Date();

    return `${fillZeroToTwoLength(date.getHours())}:${fillZeroToTwoLength(date.getMinutes())}`;
  };
  return (
    <div className={styles.timeBlock}>
      {getCurrentTime()}
    </div>
  );
};

const ChatWindow = () => {
  const [messages] = useState([
    { name: '小馬彬', message: '晚上要餓著了', },
    { name: '神 Q 超人', message: '我也是  = =', },
    { name: '神 Q 超人', message: '乾', },
    { name: '神 Q 超人', message: '風雨幹大', },
    { name: '小馬彬', message: '如果有王子家的屯糧就能用在這一時', },
    { name: '王子', message: '沒屯啊', }
  ]);

  const isSameOfLast = (index: number) => (
    index !== 0 && messages[index - 1].name === messages[index].name
  );

  const getMessageGroup = (index: number) => {

    const generateMessageGroupArray = (messagesRange, initMessage) => {
      const messageGroup = [...initMessage];
      messagesRange.every((message: any, i: number) => {
        if (
          i !== messagesRange.length - 1
          && messageGroup[0].name === messagesRange[i].name
        ) {
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

    return <UserMessage messageGroup={messageGroup} />;
  };
  return (
    <div className={styles.chatWindow}>
      <div className={styles.messageBlock}>
        <div className={styles.message}>
          <MessageTime />
          <JoinMessage name="神 Q 超人超人超人超人超人超人超人超人超人超人超人超人超人超人超人超人超人超人" />
        </div>
        {
          messages.map((message: any, index: number) => (
            isSameOfLast(index)
              ? null
              : (
                <div
                  key={message.message}
                  className={styles.message}
                >
                  <MessageTime />
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
