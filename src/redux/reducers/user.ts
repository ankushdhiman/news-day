import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types';

const initialState: User = {
  username: '',
  email: '',
};

const summarySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo(state, action: PayloadAction<User>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUser() {
      return {
        username: '',
        email: '',
      };
    },
  },
});

export const { addUserInfo, clearUser } = summarySlice.actions;
export default summarySlice.reducer;
