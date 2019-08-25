import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles({
  root: {
    borderRadius: '0px 0px',
  },
});

const ChatRoomIsEmpty = (props: any) => {
  const classes = useStyles({});
  const { isOpen, onClose, } = props;
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        classes: {
          root: classes.root,
        },
      }}
    >
      <DialogTitle
        classes={{
          root: classes.root,
        }}
      >
        欸欸欸啊啊！
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          目前聊天室是空的！請創建一個新聊天室開始聊天：）
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          我知道了
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatRoomIsEmpty;
