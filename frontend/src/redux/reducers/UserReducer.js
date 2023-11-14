import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const UserReducer = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.value = action.payload;
    },
    logOut: state => {
      state.value = null;
    },
  },
});

export const { userDetails, logOut } = UserReducer.actions;

export default UserReducer.reducer;