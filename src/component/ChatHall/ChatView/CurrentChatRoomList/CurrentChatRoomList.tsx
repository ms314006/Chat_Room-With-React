import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { IChatRoom } from '../../../../interface/IChatRoom';
import {
  chageCurrentChatRoom, leaveChatRoom, updateNextChatRoom
} from '../../../../action/chatRoom';
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
  const { chatRoom, } = props;
  const dispatch = useDispatch();
  const { currentChatRoom, } = useSelector(state => state);
  return (
    <div
      className={
        `${styles.roomList} ${chatRoom.name === currentChatRoom.name ? styles.currentRoom : ''}`
      }
      onClick={() => { dispatch(chageCurrentChatRoom(chatRoom)); }}
      onKeyDown={() => {}}
    >
      <div>{`${chatRoom.id} ${chatRoom.name}`}</div>
      <IconButton
        classes={{
          root: classes.root,
        }}
        onClick={() => {
          dispatch(leaveChatRoom(chatRoom));
        }}
      >
        <i className="fas fa-times" />
      </IconButton>
    </div>
  );
};

const CurrentChatRoomList = () => {
  const { participateChatRooms, } = useSelector(state => state);
  return (
    <div className={styles.listBlock}>
      {
        participateChatRooms.map((chatRoom: IChatRoom) => (
          <RoomList
            key={chatRoom.id}
            chatRoom={chatRoom}
          />
        ))
      }
    </div>
  );
};

export default CurrentChatRoomList;
