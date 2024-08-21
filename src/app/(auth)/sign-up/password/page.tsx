'use client';

import { useState } from 'react';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { signupUser } from '@/redux/features/authSlice';

const SignUpPasswordPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { firstName: first_name, lastName: last_name, email,  } = useAppSelector(state => state.register);
  const dispatch = useAppDispatch();


  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const resultAction = await dispatch(signupUser({ email, password, first_name, last_name })).unwrap();
      console.log('Sign-up successful:', resultAction);
      router.push('/');
    } catch (error) {
      console.error('Sign-up failed:', error);
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
        placeholder="Enter your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        query={password}
        setQuery={setPassword}
      />

      <FormInput
        title="Confirm password"
        placeholder="Confirm your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        query={confirmPassword}
        setQuery={setConfirmPassword}
      />
    </Form>
  );
};

export default SignUpPasswordPage;
