import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { sendMessage } from '../../../../action/chatRoom';
import { emojiList } from '../../../../asset/emoji';
import styles from './index.scss';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      width: '100%',
      color: '#6C6C6C',
      fontSize: 16,
    },
    '& .MuiInputLabel-root': {
      color: '#6C6C6C',
      fontSize: 16,
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid #6C6C6C',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '1px solid #6C6C6C',
    },
  },
  button: {
    width: '36px',
    height: '36px',
    background: '#1E1E1E',
    color: '#D4D4D4',
    boxShadow: '0px 0px',
    padding: '0px',
    margin: '0px 8px',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
  iconButton: {
    fontSize: '24px',
  },
  emojiButton: {
    width: '140px',
    height: '36px',
    fontSize: '12px',
    color: '#D4D4D4',
    '&:hover': {
      color: '#D7BA7D',
    },
  },
  send: {
    width: '140px',
    background: '#2A2A2A',
  },
});

const InputMessage = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { username, currentChatRoom, } = useSelector(state => state);
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [openEmoji, setOpenEmoji] = React.useState(false);

  const submitMessage = () => {
    if (message.replace(' ', '')) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <div className={styles.inputMessageBlock}>
      <div className={styles.topBlock}>
        <i className={`fas fa-user ${styles.iconGap}`} />
        <span>
          {currentChatRoom.numberParticipate}
          {' / '}
          {currentChatRoom.numberLimit}
        </span>
        <i className={`fas fa-lock-open ${styles.iconGap}`} />
        <span>公開</span>
        <i className={`fas fa-cog ${styles.iconGap}`} />
      </div>
      <div className={styles.centerBlock}>
        <div className={styles.userNameBlock}>
          <div className={styles.userName}>
            {username}
          </div>
          <span>
            &nbsp;
            {'>'}
            &nbsp;
          </span>
        </div>
        <div className={styles.inputBlock}>
          <TextField
            multiline
            fullWidth
            rows={5}
            rowsMax={5}
            className={classes.textField}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                submitMessage();
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>
      <div className={styles.bottomBlock}>
        <div>
          <IconButton
            classes={{
              root: `${classes.button} ${classes.iconButton}`,
            }}
          >
            <i className="fas fa-paperclip" />
          </IconButton>
          <IconButton
            classes={{
              root: `${classes.button} ${classes.iconButton}`,
            }}
          >
            <i className="fas fa-image" />
          </IconButton>
          <Button
            classes={{
              root: `${classes.button} ${classes.emoji}`,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              setAnchorEl(event.currentTarget);
              setOpenEmoji(!openEmoji);
            }}
          >
            (ﾟ∀ﾟ)
          </Button>
          <Popper open={openEmoji} anchorEl={anchorEl} placement="top" transition>
            {({ TransitionProps, }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <div className={styles.emojiBlock}>
                    {
                      emojiList.map(emoji => (
                        <Button
                          key={emoji}
                          classes={{ root: classes.emojiButton, }}
                          onClick={() => {
                            setMessage(`${message}${emoji}`);
                            setOpenEmoji(false);
                          }}
                        >
                          {emoji}
                        </Button>
                      ))
                    }
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
        <Button
          classes={{
            root: `${classes.button} ${classes.send}`,
          }}
          onClick={submitMessage}
        >
          {'傳送 >'}
        </Button>
      </div>
    </div>
  );
};

export default InputMessage;
