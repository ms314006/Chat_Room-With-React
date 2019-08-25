import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ChatRoomList from './ChatRoomList';
import CreateChatRoom from './CreateChatRoom';
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
  createChatRoomWindow: {
    width: '300px',
    height: '360px',
    background: '#252526',
    borderRadius: '0px 0px',
  },
  createChatRoomTitle: {
    textAlign: 'center',
    color: '#9CDCFE',
  },
});

const OpenSidebar = (props: any) => {
  const classes = useStyles({});
  const { chatHall, } = useSelector(state => state);
  const { closeSidebar, } = props;
  const [isOpenCreateChatRoom, setIsOpenCreateChatRoom] = useState(false);
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
      <ChatRoomList title="公開聊天室" chatRoomList={chatHall.chatRooms} />
      <ChatRoomList title="最近加入聊天室" chatRoomList={chatHall.chatRooms} />
      <div className={styles.createChatRoom}>
        <Button
          classes={{
            root: `${classes.createChatRoomButton} ${classes.button} ${classes.fontColor}`,
          }}
          onClick={() => { setIsOpenCreateChatRoom(true); }}
        >
          新增聊天室
        </Button>
      </div>
      <Dialog
        open={isOpenCreateChatRoom}
        onClose={() => { setIsOpenCreateChatRoom(false); }}
        PaperProps={{
          classes: {
            root: classes.createChatRoomWindow,
          },
        }}
      >
        <DialogTitle
          classes={{
            root: classes.createChatRoomTitle,
          }}
        >
          新增聊天室
        </DialogTitle>
        <DialogContent>
          <CreateChatRoom
            onClose={() => { setIsOpenCreateChatRoom(false); }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OpenSidebar;
