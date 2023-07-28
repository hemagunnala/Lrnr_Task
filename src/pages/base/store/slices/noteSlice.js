import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: ''
};

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      const { payload } = action;
      state.search = payload;
    }
  }
});

export const { setSearch } = noteSlice.actions;

export default noteSlice.reducer;
