import { Drawer } from 'antd';
import React from 'react';
import { navbarItems } from './navDrawer.constants';
import styles from './navDrawer.module.scss';

const NavDrawer = ({ visible, handleNavDrawerClose }) => {
  return (
    <Drawer
      title='Switch Modules'
      placement='left'
      closable={true}
      onClose={handleNavDrawerClose}
      open={visible}
    >
      <div className={styles.vertical_navbar}>
        {navbarItems.map((item) => (
          <div className={styles.nav_item} key={item.text}>
            <span className={styles.nav_text}>{item.text}</span>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default NavDrawer;
