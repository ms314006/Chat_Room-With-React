import React, { useState } from 'react';
import OpenSidebar from './OpenSidebar';
import CloseSidebar from './CloseSidebar';
import styles from './index.scss';

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  return (
    <div
      className={
        `${styles.sidebar} ${sidebarIsOpen ? styles.openSidebar : styles.closeSidebar}`
      }
    >
      {
        sidebarIsOpen
          ? <OpenSidebar closeSidebar={() => { setSidebarIsOpen(false); }} />
          : <CloseSidebar openSidebar={() => { setSidebarIsOpen(true); }} />
      }
    </div>
  );
};

export default Sidebar;
