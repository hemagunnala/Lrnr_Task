import React from 'react';
import styles from './notes.module.scss';
import Header from '../../globalComponents/Header';
import View from './panels/View';
import { useTreeData } from './notes.utils';
/**
 * Notes component.
 * Renders a notes panel with a header, view and editor.
 * Retrieves data from the Redux store and saves it to local storage.
 */
const Notes = () => {
  useTreeData();
  return (
    <div className={styles.notes}>
      <Header />
      <div className={styles.panel}>
        <View />
        <div className={styles.temp}><></></div>
      </div>
    </div>
  );
};

export default Notes;
