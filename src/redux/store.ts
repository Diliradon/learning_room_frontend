import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import registrationSlice from './features/registrationSlice';
import coursesSlice from './features/coursesSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    register: registrationSlice,
    courses: coursesSlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
