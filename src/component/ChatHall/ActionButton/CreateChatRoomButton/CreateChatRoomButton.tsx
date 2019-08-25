import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateChatRoom from '../../Sidebar/OpenSidebar/CreateChatRoom';
import useStyles from '../makeStyles';

const CreateChatRoomButton = () => {
  const classes = useStyles({});
  const [isOpenCreateChatRoom, setIsOpenCreateChatRoom] = useState(false);
  return (
    <>
      <Button
        classes={{
          root: `${classes.button} ${classes.fontColor}`,
        }}
        onClick={() => { setIsOpenCreateChatRoom(true); }}
      >
        新增聊天室
      </Button>
      <Dialog
        open={isOpenCreateChatRoom}
        onClose={() => { setIsOpenCreateChatRoom(false); }}
        PaperProps={{
          classes: {
            root: classes.createChatRoomWindow,
          },
        }}
      >
        <DialogTitle
          classes={{
            root: classes.createChatRoomTitle,
          }}
        >
          新增聊天室
        </DialogTitle>
        <DialogContent>
          <CreateChatRoom
            onClose={() => { setIsOpenCreateChatRoom(false); }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateChatRoomButton;
