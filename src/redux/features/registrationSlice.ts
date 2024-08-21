import { createSlice } from '@reduxjs/toolkit';

interface RegistrationState {
  firstName: string,
  lastName: string;
  email: string;
}

const initialState: RegistrationState = {
  firstName: '',
  lastName: '',
  email: '',
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setNameEmail(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    clearRegistration(state) {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
    },
  },
});

export const { setNameEmail, clearRegistration } = registrationSlice.actions;

export default registrationSlice.reducer;
