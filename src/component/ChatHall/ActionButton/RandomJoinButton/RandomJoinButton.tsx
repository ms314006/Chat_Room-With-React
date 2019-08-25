import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import ChatRoomIsEmpty from '../../../FeedBack/ChatRoomIsEmpty';
import useStyles from '../makeStyles';
import { joinChatRoom, chageCurrentChatRoom } from '../../../../action/chatRoom';
import { getRandom } from '../../../../utils';

const RandomJoinButton = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const {
    publicChatRooms, participateChatRooms,
  } = useSelector(state => state);
  const [isOpenChatRoomEmpty, setIsOpenChatRoomEmpty] = useState(false);
  return (
    <>
      <Button
        classes={{
          root: `${classes.button} ${classes.fontColor}`,
        }}
        onClick={() => {
          const publicNumberChatRooms = publicChatRooms.length;
          if (publicNumberChatRooms === 0) {
            setIsOpenChatRoomEmpty(true);
            return;
          }
          const randomRoom = publicChatRooms[
            getRandom(0, publicNumberChatRooms - 1)
          ];
          if (participateChatRooms.indexOf(randomRoom) === -1) {
            dispatch(joinChatRoom(randomRoom));
          } else {
            dispatch(chageCurrentChatRoom(randomRoom));
          }
        }}
      >
        隨機進入群組
      </Button>
      <ChatRoomIsEmpty
        isOpen={isOpenChatRoomEmpty}
        onClose={() => { setIsOpenChatRoomEmpty(false); }}
      />
    </>
  );
};

export default RandomJoinButton;
