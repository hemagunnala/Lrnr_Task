import React, { useState } from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Profile';
import NavDrawer from './atoms/NavDrawer';

const Header = () => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  /**
   * Handle closing the navigation drawer
   */
  const handleNavDrawerClose = () => {
    setIsNavDrawerOpen(false);
  };

  /**
   * Copy the current URL to the clipboard
   */
  const copyLink = () => {
    const currentURL = window.location.href;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: '#757978' }}
            onClick={() => {
              setIsNavDrawerOpen(true);
            }}
          />
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} style={{ color: '#757978' }} size="lg" />
            <input type="text" placeholder="dfin" className={styles.searchBox__input} />
          </div>
        </div>
        <div className={styles.header__right}>
          <div className={styles.addMember} onClick={copyLink}>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faUserPlus} flip="horizontal" style={{ color: '#757978' }} size="xs" />
              <span>INVITE TEAM MEMBER</span>
            </div>
            {copied && <div className={styles.copy_text}>{<span>{'Link Copied'}</span>}</div>}
          </div>
          <FontAwesomeIcon icon={faBell} flip="horizontal" style={{ color: '#757978' }} />
          <Profile name="Hema" />
        </div>
      </div>
      <NavDrawer visible={isNavDrawerOpen} handleNavDrawerClose={handleNavDrawerClose} />
    </>
  );
};

export default Header;
