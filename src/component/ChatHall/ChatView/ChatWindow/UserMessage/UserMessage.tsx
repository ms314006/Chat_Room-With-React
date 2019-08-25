import React from 'react';
import styles from '../index.scss';

const UserMessage = (props: any) => {
  const { messageGroup, } = props;
  return (
    <div className={styles.userMessageBlock}>
      <div>
        <span>{'<'}</span>
        <span className={styles.tagColor}>
          {messageGroup[0].name}
        </span>
        <span>{'>'}</span>
      </div>
      <div className={styles.userMessage}>
        {
          messageGroup.map((message: any) => (
            <span
              key={Math.random()}
              className={styles.messageColor}
            >
              {message.message}
            </span>
          ))
        }
      </div>
      <div>
        <span>{'</'}</span>
        <span className={styles.tagColor}>
          {messageGroup[0].name}
        </span>
        <span>{'>'}</span>
      </div>
    </div>
  );
};

export default UserMessage;
