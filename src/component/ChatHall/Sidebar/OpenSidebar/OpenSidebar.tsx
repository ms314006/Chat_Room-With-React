import React from 'react';
import styles from './index.scss';

const OpenSidebar = (props: any) => {
  const { closeSidebar, } = props;
  return (
    <div className={styles.titleBlock}>
      <div className={styles.title}>
        <i className="fas fa-users" />
        <span className={styles.titleGap}>聊天大廳</span>
      </div>
      <div className={styles.closeSidebar}>
        <i
          className="fas fa-chevron-left"
          onClick={closeSidebar}
          onKeyDown={() => {}}
        />
      </div>
    </div>
  );
};

export default OpenSidebar;
