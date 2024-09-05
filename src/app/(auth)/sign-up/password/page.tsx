'use client';

import { useState } from 'react';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { signupUser } from '@/redux/features/authSlice';
import { confirmPasswordValidationSchema } from '@/lib/validationSchemas';
import * as Yup from 'yup';

const SignUpPasswordPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { firstName: first_name, lastName: last_name, email,  } = useAppSelector(state => state.register);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const validationSchema = confirmPasswordValidationSchema;

  const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      }
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, [confirmPassword]: 'passwords do not match' }));
      alert('Passwords do not match');
      return;
    }

    router.push('/');
    try {
      const resultAction = await dispatch(signupUser({ email, password, first_name, last_name })).unwrap();
      console.log('Sign-up successful:', resultAction);
    } catch (error) {
      console.error('Sign-up failed:', error);
      router.push('/sign-up');
    }
  };


  return (
    <Form
      title="Sign up"
      description="Fill in the details below to tell us more about you"
      titleButton="Next"
      onSubmit={handleRegister}
    >
      <FormInput
        title="Password"
        name='password'
        placeholder="Enter your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        query={password}
        setQuery={setPassword}
        onBlur={handleBlur}
        errorMessage={errors.password}
        setError={setErrors}
      />

      <FormInput
        title="Confirm password"
        placeholder="Confirm your password"
        type="password"
        name='confirmPassword'
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        query={confirmPassword}
        setQuery={setConfirmPassword}
        onBlur={handleBlur}
        errorMessage={errors.confirmPassword}
        setError={setErrors}
      />
    </Form>
  );
};

export default SignUpPasswordPage;
