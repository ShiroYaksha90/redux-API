import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});