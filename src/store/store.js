import { configureStore } from '@reduxjs/toolkit';
import initialReducer from './userSlice';

export default configureStore({
  reducer: {
    initial: initialReducer,
  },
});
