import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TreeNode from './atoms/TreeNode';
import styles from './treeView.module.scss';
import { setContainer, setItem, setMasterContainer } from '../../pages/base/store/slices/noteSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBackward, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';

/**
 * TreeView component displays a tree structure of containers and items.
 */
const TreeView = () => {
  const data = useSelector((store) => store.noteSlice.data);
  const dispatch = useDispatch();

  /**
   * Handles the click event when the "Add Container" icon is clicked.
   */
  const handleAddContainerClick = () => {
    dispatch(setMasterContainer());
  };

  const renderTreeNodes = () => {
    return data.map((container, index) => (
      <TreeNode
        container={container}
        addContainerClick={() => {
          dispatch(setContainer(container?.name));
        }}
        addItemClick={() => {
          dispatch(setItem(container?.name));
        }}
        key={index}
      />
    ));
  };

  return (
    <div className={styles.treeView}>
      <div className={styles.header}>
        <h3>DFIN</h3>
        <div className={styles.header__icons}>
          <Tooltip title='Add Container'>
            <FontAwesomeIcon
              icon={faAdd}
              style={{ color: '#bd7080' }}
              onClick={handleAddContainerClick}
            />
          </Tooltip>
          <FontAwesomeIcon icon={faExpand} style={{ color: '#757978' }} />
          <FontAwesomeIcon icon={faBackward} style={{ color: '#757978' }} />
        </div>
      </div>
      <div className={styles.tree_container}>{renderTreeNodes()}</div>
    </div>
  );
};

export default TreeView;
