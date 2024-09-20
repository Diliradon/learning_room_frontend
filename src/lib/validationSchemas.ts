import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email('Invalid email')
    .max(126, 'Email must be less than 126 characters long')
    .matches(/@.+\..+/, 'Email must contain a valid domain'),
  password: Yup.string()
    .required('Required')
    .min(6, "The length of password can't be less than 6 characters")
    .max(41, 'The length of password must be less than 41 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    ),
});

export const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'Name is too short')
    .max(30, 'Name is too long')
    .matches(/^[^\d]*$/, 'The name must contain only letters')
    .matches(
      /^(?:[A-Za-z]+|[А-Яа-яЁёІіЇїЄєҐґ]+)$/,
      'The name must contain only English letters or Cyrillic letters, but not both',
    ),
  lastName: Yup.string()
    .required('Surname is required')
    .min(2, 'Surname is too short')
    .max(30, 'Surname is too long')
    .matches(/^[^\d]*$/, 'The surname must contain only letters')
    .matches(
      /^(?:[A-Za-z]+|[А-Яа-яЁёІіЇїЄєҐґ]+)$/,
      'The surname must contain only English letters or Cyrillic letters, but not both',
    ),
  email: Yup.string()
    .required('Required')
    .email('Invalid email')
    .max(126, 'Email must be less than 126 characters long')
    .matches(/@.+\..+/, 'Email must contain a valid domain'),
});

export const confirmPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(6, "The length of password can't be less than 6 characters")
    .max(41, 'The length of password must be less than 41 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    )
    .matches(/\d/, 'The password must contain at least one number')
    .matches(/^\S*$/, "The password can't contain spaces"),
  confirmPassword: Yup.string().required('Required'),
});
