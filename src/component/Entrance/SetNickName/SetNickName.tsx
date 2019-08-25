import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import { createUser } from '../../../action/chatRoom';
import mainStyles from '../../../style/index.scss';
import styles from './index.scss';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      color: '#AAAAAA',
      fontSize: 16,
    },
    '& .MuiInputLabel-root': {
      color: '#AAAAAA',
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

const SetNickName = withRouter(({ history, }) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const [nickname, changeNickname] = useState('');
  const [validator, setValidator] = useState({
    name: { result: false, message: '', },
  });

  const submitCreateUser = () => {
    const checkData = () => {
      if (nickname === '') {
        setValidator({
          name: { result: true, message: '請輸入暱稱！', },
        });
        return false;
      }
      if (nickname.length > 6) {
        setValidator({
          name: { result: true, message: '暱稱長度不得大於 6 ！', },
        });
        return false;
      }
      return true;
    };

    if (checkData()) {
      dispatch(createUser(nickname));
      history.push('/entrance/setChatMode');
    }
  };

  return (
    <div className={styles.mainBlock}>
      <div className={styles.title}>暱稱聊天</div>
      <div className={styles.formBlock}>
        <TextField
          label="輸入暱稱"
          value={nickname}
          onChange={(e) => {
            changeNickname(e.target.value.replace(' ', ''));
          }}
          className={classes.textField}
        />
        <FormHelperText error={validator.name.result}>
          {validator.name.message}
        </FormHelperText>
      </div>
      <Button
        onClick={() => {
          submitCreateUser();
        }}
        classes={{
          root: `${classes.submitButton}`,
        }}
      >
        [ 確定 ]
      </Button>
    </div>
  );
});

export default SetNickName;
