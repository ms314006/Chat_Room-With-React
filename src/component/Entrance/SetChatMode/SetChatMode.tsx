import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import mainStyles from '../../../style/index.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#252526',
    fontSize: '20px',
    color: '#D4D4D4',
    boxShadow: '0px 0px',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
});

const SetChatMode = () => {
  const classes = useStyles({});
  return (
    <>
      <Link
        to="/chatHall/chat"
        className={mainStyles.removeLinkStyle}
        style={{ textAlign: 'center', }}
      >
        <Button
          variant="contained"
          classes={{
            root: classes.root,
          }}
        >
          [ 隨機配對 1 對 1 聊天 ]
        </Button>
      </Link>
      <Link
        to="/chatHall/randomChat"
        className={mainStyles.removeLinkStyle}
        style={{ textAlign: 'center', }}
      >
        <Button
          variant="contained"
          classes={{
            root: classes.root,
          }}
        >
          [ 進入聊天大廳 ]
        </Button>
      </Link>
    </>
  );
};

export default SetChatMode;
