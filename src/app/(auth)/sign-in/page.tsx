'use client';

import { useState } from 'react';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form
      title="Sign in"
      description="Enter your details"
      type="signin"
      titleButton="Next"
    >
      <FormInput title="Email" placeholder="Enter your email" type="email" />

      <FormInput
        title="Password"
        placeholder="Enter your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </Form>
  );
};

export default SignInPage;
