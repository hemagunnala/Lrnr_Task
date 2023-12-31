import React from 'react';
import styles from './view.module.scss';
import { TABS } from './view.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab } from '../../../base/store/slices/noteSlice';
import TreeView from '../../../../globalComponents/TreeView';

const View = () => {
  const currentTab = useSelector(state => state.noteSlice.currentTab);
  const dispatch = useDispatch();

  const handleTabChange = (e) => {
    dispatch(setCurrentTab(e.target.textContent));
  };

  const renderTabs = () => {
    return TABS.map(tab => (
      <div
        className={`${styles.tabs__items} ${currentTab === tab ? styles.active : ''}`}
        onClick={(e) => handleTabChange(e)}
        key={tab}
      >
        {tab}
      </div>
    ));
  };

  return (
    <div className={styles.view}>
      <div className={styles.tabs}>
        {renderTabs()}
        <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#757978' }} />
      </div>
      {currentTab === 'Graph' ? <div className={styles.graph}>Graph View</div> : <TreeView />}
    </div>
  );
};

export default View;
