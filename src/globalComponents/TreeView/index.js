import React from 'react';
import styles from './treeView.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAdd, faBackward, faExpand } from '@fortawesome/free-solid-svg-icons';
// import { container, leafNode } from './treeView.constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { setContainer, setLeaf } from '../../pages/base/store/slices/noteSlice';
// import { Input, Modal } from 'antd';

const TreeView = () => {
  // const data = useSelector(state => state.noteSlice.data);
  // const [containerName, setContainerName] = useState('');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAddingContainer, setIsAddingContainer] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(null);
  // console.log(data);
  // const dispatch = useDispatch();

  // const handleAddContainer = () => {
  //   if (!isAddingContainer) {
  //     // Add item logic here
  //     if (containerName !== '') {
  //       const con = { ...leafNode };
  //       con.name = containerName;
  //       dispatch(setLeaf({ con, index: activeIndex }));
  //       setLeaf('');
  //     } else {
  //       // toaster
  //     }
  //   } else {
  //     // Add container logic here
  //     if (containerName !== '') {
  //       const con = { ...container };
  //       con.name = containerName;
  //       dispatch(setContainer({ con, index: activeIndex }));
  //       setContainerName('');
  //     } else {
  //       // toaster
  //     }
  //   }
  //   setContainerName('');
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <div className={styles.treeView}>
        {/* <div className={styles.header}>
          <h3>DFIN</h3>
          <div className={styles.header__icons}>
            <FontAwesomeIcon
              icon={faAdd}
              style={{ color: '#bd7080' }}
              onClick={() => {
                setActiveIndex(null);
                setIsAddingContainer(true);
                setIsModalOpen(true);
              }}
            />
            <FontAwesomeIcon icon={faExpand} style={{ color: '#757978' }} />
            <FontAwesomeIcon icon={faBackward} style={{ color: '#757978' }} />
          </div>
        </div>
        <div className={styles.container}>
          {data.map((container, index) => (
            <>
              <span key={container.name}>{container.name}</span>
              <FontAwesomeIcon
                icon={faAdd}
                style={{ color: '#bd7080' }}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAddingContainer(true); // Set to true to indicate container is being added
                  setIsModalOpen(true);
                }}
              />
              <FontAwesomeIcon
                icon={faAdd}
                style={{ color: '#bd7080' }}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAddingContainer(false); // Set to true to indicate container is being added
                  setIsModalOpen(true);
                }}
              />
            </>
          ))}
        </div> */}
        ds
      </div>

      {/* <Modal
        open={isModalOpen}
        onOk={handleAddContainer}
        onCancel={() => {
          setIsModalOpen(false);
          setContainerName('');
        }}
      >
        <label>{isAddingContainer ? 'Container Name' : 'Item Name'}</label>
        <Input
          value={containerName}
          onChange={e => {
            setContainerName(e.target.value);
          }}
        />
      </Modal> */}
    </>
  );
};

export default TreeView;
