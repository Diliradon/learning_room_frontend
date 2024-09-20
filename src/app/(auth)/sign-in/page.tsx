'use client';

import { useState } from 'react';
import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { loginUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useRouter } from 'next/navigation';
import { loginValidationSchema } from '@/lib/validationSchemas';
import * as Yup from 'yup';

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [userError, setUserError] = useState<string>('');
  const validationSchema = loginValidationSchema;

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false },
      );
      setErrors({});

      const resultAction = await dispatch(
        loginUser({ email: email.trim(), password }),
      ).unwrap();
      router.push('/');
      console.log('Login successful:', resultAction);
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

      console.log('Login failed:', error);
      setUserError(`${error}`);
      router.push('/sign-in');
    }
  };

  return (
    <Form
      title="Sign in"
      description="Enter your details"
      type="signin"
      titleButton="Get started"
      onSubmit={handleSubmit}
    >
      <FormInput
        title="Email"
        placeholder="Enter your email"
        query={email}
        type="email"
        name="email"
        setQuery={setEmail}
        onBlur={handleBlur}
        errorMessage={errors.email}
        setError={setErrors}
        errors={errors}
      />

      <FormInput
        title="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        query={password}
        setQuery={setPassword}
        onBlur={handleBlur}
        errorMessage={errors.password}
        setError={setErrors}
        errors={errors}
      />

      {userError && <p>Some error happened</p>}
    </Form>
  );
};

export default SignInPage;
