import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SetNameOption from './SetNameOption';
import SetNickName from './SetNickName';
import SetChatMode from './SetChatMode';
import styles from './index.scss';

const Entrance = () => {
  return (
    <div className={styles.enteanceBlock}>
      <div className={styles.entanceOption}>
        <Switch>
          <Route path="/entrance/setNameOption" component={SetNameOption} />
          <Route path="/entrance/setNickName" component={SetNickName} />
          <Route path="/entrance/SetChatMode" component={SetChatMode} />
        </Switch>
      </div>
    </div>
  );
};

export default Entrance;
