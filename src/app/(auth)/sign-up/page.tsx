'use client';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();

  const handleNextSignUp = () => {
    router.push('/signup/password');
  };

  return (
    <Form
      title="Sign up"
      description="Fill in the details below to tell us more about you"
      type="signup"
      onNext={handleNextSignUp}
      titleButton="Next"
    >
      <FormInput title="Name" placeholder="Enter your name" type="text" />

      <FormInput title="Surname" placeholder="Enter your surname" type="text" />

      <FormInput title="Email" placeholder="Enter your email" type="email" />
    </Form>
  );
};

export default SignUpPage;
