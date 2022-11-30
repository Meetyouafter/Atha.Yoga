import { configureStore } from '@reduxjs/toolkit'
import initialReducer from './initialSlice.js'

export default configureStore({
  reducer: {
    initial: initialReducer,
  },
});