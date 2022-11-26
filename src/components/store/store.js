import { configureStore } from '@reduxjs/toolkit'
import autorizationRedicer from './autorizationSlice'

const store = configureStore({
  reducer: {
    autorization: autorizationRedicer,
  },
});

export default store;
