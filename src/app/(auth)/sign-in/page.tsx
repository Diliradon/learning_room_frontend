'use client';

import { useState } from 'react';
import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { loginUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const resultAction = await dispatch(loginUser({ email, password })).unwrap();
      console.log('Login successful:', resultAction);
      router.push('/');
    } catch (error) {
      console.log('Login failed:', error);
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
        type="email"
        query={email}
        setQuery={setEmail}
      />

      <FormInput
        title="Password"
        placeholder="Enter your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        query={password}
        setQuery={setPassword}
      />
    </Form>
  );
};

export default SignInPage;
