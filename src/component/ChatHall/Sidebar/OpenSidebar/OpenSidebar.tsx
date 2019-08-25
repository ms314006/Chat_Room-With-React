import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import ChatRoomList from './ChatRoomList';
import RandomJoinButton from '../../ActionButton/RandomJoinButton';
import RandomMatchButton from '../../ActionButton/RandomMatchButton';
import CreateChatRoomButton from '../../ActionButton/CreateChatRoomButton';
import { setSearchWord } from '../../../../action/chatRoom';
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
  search: {
    fontSize: 16,
    width: '100%',
    background: '#1E1E1E',
    border: '1px solid #1E1E1E',
    borderRadius: '20px 20px',
    padding: '0px 12px',
  },
});

const OpenSidebar = (props: any) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { publicChatRooms, searchWord, } = useSelector(state => state);
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
        <RandomMatchButton />
        <RandomJoinButton />
      </div>
      <div className={styles.marginGap}>
        <Input
          disableUnderline
          placeholder="搜尋聊天室名稱或編號"
          value={searchWord}
          onChange={(e) => {
            dispatch(setSearchWord(e.target.value));
          }}
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
      <ChatRoomList title="公開聊天室" chatRoomList={publicChatRooms} />
      <ChatRoomList title="最近加入聊天室" chatRoomList={publicChatRooms} />
      <div className={styles.createChatRoom}>
        <CreateChatRoomButton />
      </div>
    </>
  );
};

export default OpenSidebar;
