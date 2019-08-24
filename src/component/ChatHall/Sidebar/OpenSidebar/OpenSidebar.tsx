import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import styles from './index.scss';

const useStyles = makeStyles({
  button: {
    width: '36px',
    height: '36px',
    background: '#303030',
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
});

const OpenSidebar = (props: any) => {
  const classes = useStyles({});
  const { closeSidebar, } = props;
  return (
    <div className={styles.titleBlock}>
      <div className={styles.title}>
        <i className="fas fa-users" />
        <span className={styles.titleGap}>聊天大廳</span>
      </div>
      <div className={styles.closeSidebar}>
        <IconButton
          classes={{
            root: `${classes.button} ${classes.iconButton}`,
          }}
          onClick={closeSidebar}
        >
          <i className="fas fa-chevron-left" />
        </IconButton>
      </div>
    </div>
  );
};

export default OpenSidebar;
