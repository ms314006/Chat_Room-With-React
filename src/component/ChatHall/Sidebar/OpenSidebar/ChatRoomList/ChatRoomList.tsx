import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { joinChatRoom, chageCurrentChatRoom } from '../../../../../action/chatRoom';
import { fillZeroToTwoLength } from '../../../../../utils';
import styles from './index.scss';

const useStyles = makeStyles({
  fontColor: {
    color: '#D4D4D4',
  },
});

const ChatRoomList = (props: any) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { participateChatRooms, } = useSelector(state => state);
  const { chatRoomList, title, } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.chatRoomsList}>
      <div className={styles.listTitle}>
        {
          isOpen
            ? (
              <IconButton
                classes={{ root: classes.fontColor, }}
                onClick={() => { setIsOpen(false); }}
              >
                <i className="fas fa-angle-up" />
              </IconButton>
            ) : (
              <IconButton
                classes={{ root: classes.fontColor, }}
                onClick={() => { setIsOpen(true); }}
              >
                <i className="fas fa-angle-down" />
              </IconButton>
            )
        }
        {`${title}(${chatRoomList.length})`}
      </div>
      <div
        className={
          `${styles.listBlock} ${isOpen ? styles.openListBlock : styles.closeListBlock}`
        }
      >
        {
          chatRoomList.map((chatRoom: any) => (
            <div
              key={chatRoom.id}
              className={styles.list}
              onClick={() => {
                if (participateChatRooms.indexOf(chatRoom) === -1) {
                  dispatch(joinChatRoom(chatRoom));
                } else {
                  dispatch(chageCurrentChatRoom(chatRoom));
                }
              }}
              onKeyDown={() => {}}
            >
              <div>
                {`${chatRoom.id} ${chatRoom.name}`}
              </div>
              <div>
                {fillZeroToTwoLength(chatRoom.users.length)}
                {' / '}
                {fillZeroToTwoLength(chatRoom.numberLimit)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ChatRoomList;
