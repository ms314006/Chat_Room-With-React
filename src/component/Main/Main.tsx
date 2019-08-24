import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Entrance from '../Entrance';
import styles from './index.scss';

const Main = (): JSX.Element => (
  <div
    className={styles.mainBlock}
    data-testid="main_block"
  >
    <Switch>
      <Route path="/entrance/setNameOption" component={Entrance} />
      <Redirect exact from="/" to="/entrance/setNameOption" />
    </Switch>
    <Entrance />
  </div>
);

export default Main;
