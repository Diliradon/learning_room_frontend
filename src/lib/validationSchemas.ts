import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Password is too short - should be 4 chars minimum.').required('Required'),
});

export const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Name is too short').required('First name is required'),
  lastName: Yup.string().min(2, 'Surname is too short').required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const confirmPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().min(4, 'Password is too short - should be 4 chars minimum.').required('Required'),
  confirmPassword: Yup.string().min(4, 'Password is too short - should be 4 chars minimum.').required('Required'),
});

