import React from 'react';
import styles from '../index.scss';

const SelfMessage = (props: any) => {
  const { messageGroup, } = props;
  return (
    <div
      className={
        `${styles.userMessageBlock} ${styles.selfMessageColor}`
      }
    >
      <div>
        <span>{'<!--'}</span>
        <span>
          {messageGroup[0].name}
        </span>
      </div>
      <div className={styles.userMessage}>
        {
          messageGroup.map((message: any) => (
            <span key={Math.random()}>
              {message.message}
            </span>
          ))
        }
      </div>
      <div>
        <span>{'-->'}</span>
      </div>
    </div>
  );
};

export default SelfMessage;
