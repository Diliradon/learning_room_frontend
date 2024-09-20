'use client';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { registrationValidationSchema } from '@/lib/validationSchemas';
import { setNameEmail } from '@/redux/features/registrationSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup';

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const validationSchema = registrationValidationSchema;

  const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: err.message }));
      }
    }
  };

  const handleNextSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await validationSchema.validate(
        { firstName, lastName, email },
        { abortEarly: false },
      );
      setErrors({});

      dispatch(setNameEmail({ firstName, lastName, email }));

      router.push('/sign-up/password');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach(error => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
      console.log(`Failed register: ${error}`);
    }
  };

  return (
    <Form
      title="Sign up"
      description="Fill in the details below to tell us more about you"
      type="signup"
      titleButton="Next"
      onNext={handleNextSignUp}
    >
      <FormInput
        title="Name"
        name="firstName"
        placeholder="Enter your name"
        type="text"
        query={firstName}
        setQuery={setFirstName}
        onBlur={handleBlur}
        errorMessage={errors.firstName}
        setError={setErrors}
        errors={errors}
      />

      <FormInput
        title="Surname"
        name="lastName"
        placeholder="Enter your surname"
        type="text"
        query={lastName}
        setQuery={setLastName}
        onBlur={handleBlur}
        errorMessage={errors.lastName}
        setError={setErrors}
        errors={errors}
      />

      <FormInput
        title="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
        query={email}
        setQuery={setEmail}
        onBlur={handleBlur}
        errorMessage={errors.email}
        setError={setErrors}
        errors={errors}
      />
    </Form>
  );
};

export default SignUpPage;
