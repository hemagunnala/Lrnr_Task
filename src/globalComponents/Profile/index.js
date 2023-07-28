import React from 'react';
import styles from './profile.module.scss';
import { Dropdown } from 'antd';
import ProfileDropDown from './atoms/ProfileDropDown';
const Profile = ({ name = '' }) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  return (
       <Dropdown dropdownRender={() => <ProfileDropDown />}>
         <div className={styles.profile}>
            <span>{firstLetter}</span>
        </div>
       </Dropdown>
  );
};

export default Profile;
