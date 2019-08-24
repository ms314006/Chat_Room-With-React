import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './index.scss';

const useStyles = makeStyles({
  root: {
    background: '#252526',
    fontSize: '20px',
    boxShadow: '0px 0px',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
  anonymous: {
    color: '#D7BA7D',
  },
  nickname: {
    color: '#D4D4D4',
  },
});

const SetNameOption = () => {
  const classes = useStyles({});
  return (
    <div className={styles.entanceOption}>
      <Button
        variant="contained"
        classes={{
          root: `${classes.root} ${classes.anonymous}`,
        }}
      >
        [ 匿名聊天 ]
      </Button>
      <Button
        variant="contained"
        classes={{
          root: `${classes.root} ${classes.nickname}`,
        }}
      >
        [ 暱稱聊天 ]
      </Button>
    </div>
  );
};

export default SetNameOption;
