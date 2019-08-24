import React from 'react';
import styles from './index.scss';

const CloseSidebar = (props: any) => {
  const { openSidebar, } = props;
  return (
    <div
      className={styles.sidebar}
      onClick={openSidebar}
      onKeyDown={() => {}}
    >
      <i className={`fas fa-users ${styles.logo}`} />
      <div className={styles.word}>聊</div>
      <div className={styles.word}>天</div>
      <div className={styles.word}>大</div>
      <div className={styles.word}>廳</div>
      <i className={`fas fa-chevron-right ${styles.openSidebar}`} />
    </div>
  );
};

export default CloseSidebar;
