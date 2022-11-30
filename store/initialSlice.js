import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    getUserData: (state, action) => {
      console.log('state', state)
      console.log('action', action)
      console.log('action.payload.user', action.payload.user)
      state.user = _.cloneDeep(action.payload.user)
    }
  },
});

export const { getUserData } = initialSlice.actions;
export default initialSlice.reducer;

