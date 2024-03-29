import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser } from '../../../action/chatRoom';
import mainStyles from '../../../style/index.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#252526',
    fontSize: '20px',
    boxShadow: '0px 0px',
    color: '#D4D4D4',
    '&:hover': {
      backgroundColor: '#696969',
      color: '#D7BA7D',
    },
  },
});

const SetNameOption = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to="/entrance/setChatMode"
        className={mainStyles.removeLinkStyle}
        style={{ textAlign: 'center', }}
      >
        <Button
          variant="contained"
          classes={{
            root: classes.root,
          }}
          onClick={() => {
            dispatch(createUser(''));
          }}
        >
          [ 匿名聊天 ]
        </Button>
      </Link>
      <Link
        to="/entrance/setNickName"
        className={mainStyles.removeLinkStyle}
        style={{ textAlign: 'center', }}
      >
        <Button
          variant="contained"
          classes={{
            root: classes.root,
          }}
        >
          [ 暱稱聊天 ]
        </Button>
      </Link>
    </>
  );
};

export default SetNameOption;
