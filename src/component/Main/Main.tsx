import React from 'react';
import Entrance from '../Entrance';
import styles from './index.scss';

const Main = (): JSX.Element => (
  <div
    className={styles.mainBlock}
    data-testid="main_block"
  >
    <Entrance />
  </div>
);

export default Main;
