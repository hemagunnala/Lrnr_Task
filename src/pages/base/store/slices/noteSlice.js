import { createSlice } from '@reduxjs/toolkit';

function getNextLevelName (parentName, length, isItem = false) {
  let content = parentName;

  // If the parent level is an item, replace 'collection' with 'Content Page'
  if (isItem) {
    content = parentName.replace('collection', 'Content Page');
  }
  // Generate the name for the next level by appending the length + 1 to the parent name
  return `${content}.${length + 1}`;
}

const initialState = {
  search: '',
  currentTab: 'All',
  data: [],
  selectedLeaf: ''
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
    setMasterContainer: (state, { payload }) => {
      state.data.push({
        name: getNextLevelName('collection.', state.data.length),
        container: payload?.container || [],
        leafNodes: payload?.leafNodes || []
      });
    },
    setContainer: (state, { payload }) => {
      const findParent = (data) => {
        if (data.name === payload) {
          data.container.push({
            name: getNextLevelName(payload, data?.container?.length),
            container: [],
            leafNodes: [
            ]
          });
        } else if (data.container && data.container.length > 0) {
          for (const item of data.container) {
            findParent(item);
          }
        }
      };
      state.data.forEach(findParent);
    },
    setItem: (state, { payload }) => {
      const findParent = (data) => {
        if (data.name === payload) {
          data.leafNodes.push({ name: getNextLevelName(payload, data?.leafNodes?.length, true), content: '' });
        } else if (data.container && data.container.length > 0) {
          for (const item of data.container) {
            findParent(item);
          }
        }
      };
      state.data.forEach(findParent);
    },
    setSelectedLeaf: (state, { payload }) => {
      state.selectedLeaf = payload;
    }
  }
});

export const { setSearch, setCurrentTab, setContainer, setItem, setMasterContainer, setSelectedLeaf } = noteSlice.actions;

export default noteSlice.reducer;
