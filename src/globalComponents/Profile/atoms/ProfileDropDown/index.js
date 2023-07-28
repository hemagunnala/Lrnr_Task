import React from 'react';
import styles from './profileDropDown.module.scss';
import { Switch } from 'antd';

const menuItems = [
  { text: 'Dark Mode' },
  { text: 'Profile' },
  { type: 'separator' },
  { text: "What's New" },
  { text: 'Help' },
  { text: 'Send Feedback' },
  { text: 'Hints and Shortcuts' },
  { type: 'separator' },
  { text: 'Log Out' }
];

const ProfileDropDown = () => {
  return (
        <div className={styles.dropDown}>
            {menuItems.map((item, index) =>
              item.type === 'separator'
                ? (
                    <div className={styles.separator} key={index} />
                  )
                : (
                    <div className={styles['dropDown-item']} key={index}>
                        {item.text !== 'Dark Mode' ? <span className={styles['dropDown-text']}>{item.text}</span> : <div className={styles.theme}><span className={styles['dropDown-text']}>{item.text}</span><Switch size='small'/></div>}
                    </div>
                  )
            )}
        </div>
  );
};

export default ProfileDropDown;
