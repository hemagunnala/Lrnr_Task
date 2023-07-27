import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  currentTab: 'All',
  data: [
    {
      name: 'collection.1.1.1',
      container: [],
      leafNodes: [
        {
          name: 'Content Page 1.1.1.1',
          content: '<h1>Content Page</h2>'
        }
      ]
    }
  ]
};

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      const { payload } = action;
      state.search = payload;
    },
    setCurrentTab: (state, action) => {
      const { payload } = action;
      state.currentTab = payload;
    },
    setContainer: (state, action) => {
      const { con, index } = action.payload;
      if (index !== null) { state.data[index].container.push(con); } else { state.data.push(con); }
    },
    setLeaf: (state, action) => {
      const { con, index } = action.payload;
      state.data[index].leafNodes.push(con);
    }
  }
});

export const { setSearch, setCurrentTab, setContainer, setLeaf } = noteSlice.actions;

export default noteSlice.reducer;
