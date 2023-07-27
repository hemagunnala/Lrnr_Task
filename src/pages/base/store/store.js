import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './slices/noteSlice';
import masterSlice from './slices/masterSlice';

const store = configureStore({
  reducer: {
    noteSlice,
    masterSlice
  }
});

export default store;
