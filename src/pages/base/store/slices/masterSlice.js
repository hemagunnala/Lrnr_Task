import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Hema Gunnala',
  isLoggedIn: false,
  theme: 'light'
};

const masterSlice = createSlice(
  {
    name: 'masterSlice',
    initialState,
    reducers: {
      toggleSignIn: (state, action) => {
        const { payload } = action;
        state.isLoggedIn = payload;
      },
      updateUserName: (state, action) => {
        const { payload } = action;
        state.userName = payload;
      },
      toggleTheme: (state) => {
        const theme = state.theme === 'light' ? 'dark' : 'light';
        state.theme = theme;
      }
    }
  }
);

export const { toggleSignIn, updateUserName, toggleTheme } = masterSlice.actions;
export default masterSlice.reducer;
