import React from 'react';
import styles from './notes.module.scss';
// import { useSelector } from 'react-redux';
import Header from '../../globalComponents/Header';
import View from './panels/View';
const Notes = () => {
  return (
    <div className={styles.notes}>
      <Header />
      <div className={styles.panel}>
        <View />
        <div className={styles.temp}>Temp</div>
      </div>
    </div>
  );
};

export default Notes;
