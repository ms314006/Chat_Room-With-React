import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Entrance from '../Entrance';
import ChatHall from '../ChatHall';
import styles from './index.scss';

const Main = (): JSX.Element => (
  <div
    className={styles.mainBlock}
    data-testid="main_block"
  >
    <Switch>
      <Route path="/entrance" component={Entrance} />
      <Route path="/chatHall" component={ChatHall} />
      <Redirect exact from="/" to="/entrance/setNameOption" />
    </Switch>
  </div>
);

export default Main;
