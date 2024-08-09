'use client';

import { useState } from 'react';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';

const SignUpPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form
      title="Sign up"
      description="Fill in the details below to tell us more about you"
      titleButton="Next"
    >
      <FormInput
        title="Password"
        placeholder="Enter your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <FormInput
        title="Password"
        placeholder="Confirm your password"
        type="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </Form>
  );
};

export default SignUpPasswordPage;
