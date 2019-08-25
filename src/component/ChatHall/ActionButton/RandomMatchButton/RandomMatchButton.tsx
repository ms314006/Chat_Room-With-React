import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import IsUndone from '../../../FeedBack/IsUndone';
import useStyles from '../makeStyles';

const RandomMatchButton = () => {
  const classes = useStyles({});
  const [isOpenUndone, setIsOpenUndone] = useState(false);
  return (
    <>
      <Button
        classes={{
          root: `${classes.button} ${classes.fontColor}`,
        }}
        onClick={() => { setIsOpenUndone(true); }}
      >
        隨機 1 對 1 配對
      </Button>
      <IsUndone
        isOpen={isOpenUndone}
        onClose={() => { setIsOpenUndone(false); }}
      />
    </>
  );
};

export default RandomMatchButton;
