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

  const [errors, setErrors] = useState<{ [key: string]: string }>({ password: '', confirmPassword: ''});
  const validationSchema = confirmPasswordValidationSchema;

  const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'confirmPassword') {
      if (password !== confirmPassword) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Passwords do not match' }));
        return;
      }
    }

    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors(prevErrors => {
        const newErrors = prevErrors;
        delete newErrors[name];
        return newErrors;
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      }
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const resultAction = await dispatch(signupUser({ email, password, first_name, last_name })).unwrap();
      console.log('Sign-up successful:', resultAction);
      router.push('/');
    } catch (error) {
      console.error('Sign-up failed:', error);
      router.push('/sign-up');
    }
  };

  return (
    <Form
      title="Sign up"
      description="Fill in the details below to tell us more about you"
      titleButton="Get started"
      onSubmit={handleRegister}
      errors={errors}
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
        errors={errors}
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
        errors={errors}
      />
    </Form>
  );
};

export default SignUpPasswordPage;
