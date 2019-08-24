import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import styles from './index.scss';

const useStyles = makeStyles({
  root: {
    width: '24px',
    height: '24px',
    background: '#252526',
    fontSize: '12px',
    color: '#D4D4D4',
    boxShadow: '0px 0px',
    padding: '0px',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
});

const RoomList = (props: any) => {
  const classes = useStyles({});
  const { roomName, } = props;
  return (
    <div
      key={roomName}
      className={
        `${styles.roomList} ${roomName === '大家一起聊吧！' ? styles.currentRoom : ''}`
      }
    >
      <div>{roomName}</div>
      <IconButton
        classes={{
          root: classes.root,
        }}
      >
        <i className="fas fa-times" />
      </IconButton>
    </div>
  );
};

const CurrentChatRoomList = () => {
  const [chatRooms] = useState(['B022.隨機配對', '大家一起聊吧！']);
  return (
    <div className={styles.listBlock}>
      {
        chatRooms.map(roomName => (
          <RoomList key={roomName} roomName={roomName} />
        ))
      }
    </div>
  );
};

export default CurrentChatRoomList;
