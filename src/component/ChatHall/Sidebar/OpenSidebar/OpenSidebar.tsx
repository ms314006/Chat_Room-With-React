import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import ChatRoomList from './ChatRoomList';
import styles from './index.scss';

const useStyles = makeStyles({
  fontColor: {
    color: '#D4D4D4',
  },
  iconButton: {
    width: '36px',
    height: '36px',
    background: '#303030',
    padding: '0px',
    margin: '0px 8px',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
  button: {
    width: '136px',
    height: '32px',
    background: '#303030',
    border: '1px solid #D4D4D4',
    borderRadius: '0px 0px',
    padding: '0px',
    '&:hover': {
      backgroundColor: '#696969',
    },
    fontSize: '14px',
  },
  search: {
    fontSize: 16,
    width: '100%',
    background: '#1E1E1E',
    border: '1px solid #1E1E1E',
    borderRadius: '20px 20px',
    padding: '0px 12px',
  },
  createChatRoomButton: {
    width: '100%',
  },
});

const chatRoomList = [
  {
    id: 'C239', name: '吃飯不揪', numberOfPeople: 16, numberLimit: 20,
  },
  {
    id: 'C192', name: '謝謝照顧', numberOfPeople: 2, numberLimit: 5,
  },
  {
    id: 'C543', name: '一日群組', numberOfPeople: 1, numberLimit: 14,
  },
  {
    id: 'C987', name: '2176 英精班', numberOfPeople: 5, numberLimit: 12,
  },
  {
    id: 'C194', name: '謝謝照顧', numberOfPeople: 2, numberLimit: 5,
  },
  {
    id: 'C342', name: '一日群組', numberOfPeople: 1, numberLimit: 14,
  },
  {
    id: 'C246', name: '2176 英精班', numberOfPeople: 5, numberLimit: 12,
  },
  {
    id: 'C666', name: '謝謝照顧', numberOfPeople: 2, numberLimit: 5,
  },
  {
    id: 'C245', name: '一日群組', numberOfPeople: 1, numberLimit: 14,
  },
  {
    id: 'C724', name: '2176 英精班', numberOfPeople: 5, numberLimit: 12,
  }
];

const OpenSidebar = (props: any) => {
  const classes = useStyles({});
  const { closeSidebar, } = props;
  return (
    <>
      <div className={styles.titleBlock}>
        <div className={styles.title}>
          <i className="fas fa-users" />
          <span className={styles.marginGap}>聊天大廳</span>
        </div>
        <div className={styles.closeSidebar}>
          <IconButton
            classes={{
              root: `${classes.iconButton} ${classes.fontColor}`,
            }}
            onClick={closeSidebar}
          >
            <i className="fas fa-chevron-left" />
          </IconButton>
        </div>
      </div>
      <div className={`${styles.chatMode} ${styles.marginGap}`}>
        <Button
          classes={{
            root: `${classes.button} ${classes.fontColor}`,
          }}
        >
          隨機 1 對 1 配對
        </Button>
        <Button
          classes={{
            root: `${classes.button} ${classes.fontColor}`,
          }}
        >
          隨機進入群組
        </Button>
      </div>
      <div className={styles.marginGap}>
        <Input
          disableUnderline
          placeholder="搜尋聊天室名稱或編號"
          classes={{
            root: `${classes.search} ${classes.fontColor}`,
          }}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                classes={{
                  root: classes.fontColor,
                }}
              >
                <i className="fas fa-search" />
              </IconButton>
            </InputAdornment>
          )}
        />
      </div>
      <ChatRoomList title="公開聊天室" chatRoomList={chatRoomList} />
      <ChatRoomList title="最近加入聊天室" chatRoomList={chatRoomList} />
      <div className={styles.createChatRoom}>
        <Button
          classes={{
            root: `${classes.createChatRoomButton} ${classes.button} ${classes.fontColor}`,
          }}
        >
          新增聊天室
        </Button>
      </div>
    </>
  );
};

export default OpenSidebar;
