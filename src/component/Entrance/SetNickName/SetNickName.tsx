import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import mainStyles from '../../../style/index.scss';
import styles from './index.scss';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
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
  submitButton: {
    background: '#252526',
    fontSize: '20px',
    boxShadow: '0px 0px',
    color: '#D4D4D4',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
});

const SetNickName = () => {
  const classes = useStyles({});
  return (
    <div className={styles.mainBlock}>
      <div className={styles.title}>暱稱聊天</div>
      <div className={styles.formBlock}>
        <TextField
          label="輸入暱稱"
          className={classes.textField}
        />
      </div>
      <Link
        to="/entrance/setChatMode"
        className={mainStyles.removeLinkStyle}
        style={{ textAlign: 'center', }}
      >
        <Button
          variant="contained"
          classes={{
            root: `${classes.submitButton}`,
          }}
        >
          [ 確定 ]
        </Button>
      </Link>
    </div>
  );
};

export default SetNickName;
