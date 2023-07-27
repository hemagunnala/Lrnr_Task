import React from 'react';
import styles from './app.module.scss';
import Notes from '../Notes';
import { Provider } from 'react-redux';
import store from './store/store';

function App () {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Notes />
      </div>
    </Provider>
  );
}

export default App;
