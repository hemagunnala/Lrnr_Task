import React from 'react';
import styles from './notes.module.scss';
// import { useSelector } from 'react-redux';
import Header from '../../globalComponents/Header';
const Notes = () => {
  return (
    <div className={styles.notes}>
      <Header />
    </div>
  );
};

export default Notes;
