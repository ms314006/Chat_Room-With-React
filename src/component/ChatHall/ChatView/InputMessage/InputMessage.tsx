import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { sendMessage } from '../../../../action/chatRoom';
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
  emoji: {
    width: '24px',
    fontSize: '12px',
  },
  send: {
    width: '140px',
    background: '#2A2A2A',
  },
});

const InputMessage = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { user, } = useSelector(state => state);
  const [message, setMessage] = useState('');
  return (
    <div className={styles.inputMessageBlock}>
      <div className={styles.topBlock}>
        <i className={`fas fa-user ${styles.iconGap}`} />
        <span>3 / 5</span>
        <i className={`fas fa-lock ${styles.iconGap}`} />
        <span>私密</span>
        <i className={`fas fa-cog ${styles.iconGap}`} />
      </div>
      <div className={styles.centerBlock}>
        <div className={styles.userNameBlock}>
          <div className={styles.userName}>
            {user.name}
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
          >
            (ﾟ∀ﾟ)
          </Button>
        </div>
        <Button
          classes={{
            root: `${classes.button} ${classes.send}`,
          }}
          onClick={() => {
            if (message.replace(' ', '')) {
              dispatch(sendMessage(message));
              setMessage('');
            }
          }}
        >
          {'傳送 >'}
        </Button>
      </div>
    </div>
  );
};

export default InputMessage;
