import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  users: [
    {
      email: '111',
      password: '111',
      acceptTerms: true,
      id: '111',
    },
  ],
}

export const autorizationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addNewUser: (state, action) => {
      console.log('state', state)
      console.log('action', action)
      state.users.push(action.payload)
    }
  },
})

export const { increment, decrement, incrementByAmount, addNewUser } = autorizationSlice.actions
export default autorizationSlice.reducer