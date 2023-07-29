import React from 'react';
import styles from '../../treeView.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCopy, faEllipsisVertical, faPlus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setContainer, setItem, setSelectedLeaf } from '../../../../pages/base/store/slices/noteSlice';

const { Panel } = Collapse;

const TreeNode = ({ container, addContainerClick, addItemClick }) => {
  const dispatch = useDispatch();
  const selectedLeaf = useSelector(state => state.noteSlice.selectedLeaf);
  return (
    <Collapse ghost expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleDown} size='2xs' style={isActive ? {} : { transform: 'rotate(-90deg)' }} />}>
      <Panel
        header={
          <div className={styles.treeNode}>
                <span>{container?.name}</span>
            <div className={styles.icons}>
              <Tooltip title='Create item'><FontAwesomeIcon icon={faPlus} style={{ color: '#757978' }} onClick={addItemClick}/></Tooltip>
              <Tooltip title='Create container'><FontAwesomeIcon icon={faSquarePlus} style={{ color: '#757978' }} onClick={addContainerClick} /></Tooltip>
              <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#757978' }} />
            </div>
            <div className={styles.copyIcon}>
                <FontAwesomeIcon icon={faCopy} style={{ color: '#dfdfe0' }}/>
            </div>
          </div>
        }
        key={container.name}
        collapsible='icon'
      >
        <div className={styles.leafNode}>
          {container?.leafNodes?.map((leaf, index) => (
            <div key={index} style={{ padding: '1rem' }} className={selectedLeaf.name === leaf.name ? styles.active : ''} onClick={() => dispatch(setSelectedLeaf(leaf))}>{leaf.name}</div>
          ))}
        </div>
        {container?.container?.map((nestedContainer, index) => (
          <TreeNode key={index} container={nestedContainer} addContainerClick={() => { dispatch(setContainer(nestedContainer?.name)); }} addItemClick={() => { dispatch(setItem(nestedContainer?.name)); }} />
        ))}
      </Panel>
    </Collapse>
  );
};

export default TreeNode;
