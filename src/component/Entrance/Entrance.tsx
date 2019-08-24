import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SetNameOption from './SetNameOption';
import styles from './index.scss';

const Entrance = () => {
  return (
    <div className={styles.enteanceBlock}>
      <Switch>
        <Route exact path="/" component={SetNameOption} />
      </Switch>
    </div>
  );
};

export default Entrance;
