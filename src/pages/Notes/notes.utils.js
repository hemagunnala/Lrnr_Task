import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMasterContainer } from '../base/store/slices/noteSlice';

export const useTreeData = () => {
  const { data } = useSelector((store) => store.noteSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    // Retrieve data from local storage and dispatch action to set master container
    const localData = JSON.parse(localStorage.getItem('data'));
    localData?.forEach((eachData) => {
      dispatch(setMasterContainer(eachData));
    });
  }, []);

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
};
