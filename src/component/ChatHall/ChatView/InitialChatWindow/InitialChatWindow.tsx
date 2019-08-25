import React from 'react';
import RandomMatchButton from '../../ActionButton/RandomMatchButton';
import RandomJoinButton from '../../ActionButton/RandomJoinButton';
import CreateChatRoomButton from '../../ActionButton/CreateChatRoomButton';
import styles from './index.scss';

const InitialChatWindow = () => (
  <div className={styles.initialChatWindow}>
    <div>ヽ(✿ﾟ▽ﾟ)ノ</div>
    <div>馬上開始你的聊天吧~</div>
    <div className={styles.actionBlock}>
      <RandomMatchButton />
      <RandomJoinButton />
      <CreateChatRoomButton />
    </div>
  </div>
);

export default InitialChatWindow;
