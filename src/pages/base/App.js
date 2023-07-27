import React from 'react';
import styles from './app.module.scss';
import Notes from './Notes';

function App () {
  return (
    <div className={styles.app}>
      <Notes />
    </div>
  );
}

export default App;
