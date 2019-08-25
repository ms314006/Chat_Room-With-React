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

const IsUndone = (props: any) => {
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
        非常抱歉！
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          此功能尚未完成，因為我豪想睡覺，嗚嗚嗚...
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          好吧！沒辦法！玩玩其他功能！
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IsUndone;
