import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { createChatRoom } from '../../../../../action/chatRoom';
import styles from './index.scss';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      width: '240px',
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
  numberPeopleLimit: {
    color: '#AAAAAA',
    border: '1px solid #707070',
    borderRadius: '0px 0px',
    margin: '0px 8px',
    width: '56px',
    textAlign: 'center',
  },
  createButton: {
    background: '#252526',
    fontSize: '20px',
    boxShadow: '0px 0px',
    color: '#D4D4D4',
    '&:hover': {
      backgroundColor: '#696969',
    },
  },
});

const CreateChatRoom = (props: any) => {
  const classes = useStyles({});
  const { onClose, } = props;
  const dispatch = useDispatch();
  const [chatRoomInfo, setChatRoomInfo] = useState({
    name: '',
    numberPeopleLimit: 1,
  });
  const [validator, setValidator] = useState({
    name: { result: false, message: '', },
  });

  const submitCreateChatRoom = () => {
    const checkData = () => {
      if (chatRoomInfo.name === '') {
        setValidator({
          name: { result: true, message: '請輸入聊天室名稱！', },
        });
        return false;
      }
      return true;
    };

    if (checkData()) {
      dispatch(createChatRoom(
        chatRoomInfo.name, chatRoomInfo.numberPeopleLimit
      ));
      onClose();
    }
  };

  return (
    <div className={styles.createChatRoomBlock}>
      <div className={styles.createForm}>
        <div>
          <TextField
            label="聊天室名稱"
            onChange={(e) => {
              setChatRoomInfo({
                ...chatRoomInfo,
                name: e.target.value,
              });
            }}
            className={classes.textField}
          />
          <FormHelperText error={validator.name.result}>
            {validator.name.message}
          </FormHelperText>
        </div>
        <div className={styles.numberPeopleLimitBlock}>
          限制
          <FormControl>
            <Select
              disableUnderline
              className={classes.numberPeopleLimit}
              value={chatRoomInfo.numberPeopleLimit}
              onChange={(e) => {
                setChatRoomInfo({
                  ...chatRoomInfo,
                  numberPeopleLimit: Number(e.target.value),
                });
              }}
              inputProps={{
                name: '上限人數',
              }}
            >
              {
                Array(...new Array(30)).map((val, index) => (
                  <MenuItem
                    key={Math.random()}
                    value={index + 1}
                  >
                    {index + 1}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <div className={styles.numberPeopleLimitRemarkBlock}>
            人
            <span className={styles.limitRemark}>（上限 30 人）</span>
          </div>
        </div>
        <div className={styles.remark}>
          // 公開: 顯示在聊天大廳任何人都能加入
          <br />
          <br />
          // 私密:（尚未實裝）
        </div>
      </div>
      <Button
        onClick={() => {
          submitCreateChatRoom();
        }}
        classes={{
          root: `${classes.createButton}`,
        }}
      >
        [ 確定 ]
      </Button>
    </div>
  );
};

export default CreateChatRoom;
