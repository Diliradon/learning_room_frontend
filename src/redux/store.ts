import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import registrationSlice from './features/registrationSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    register: registrationSlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
