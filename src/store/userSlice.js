import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    getUserData: (state, action) => {
      const data = state;
      data.user = action.payload.user;
    },
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
