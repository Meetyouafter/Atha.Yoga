import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const autorizationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users.push(action.payload)
    }
  },
})

export const { addNewUser } = autorizationSlice.actions
export default autorizationSlice.reducer