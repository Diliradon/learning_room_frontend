'use client';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setNameEmail } from '@/redux/features/registrationSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUpPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  const handleNextSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setNameEmail({ firstName, lastName, email }))

    router.push('/sign-up/password');
  };

  return (
    <Form
      title="Sign up"
      description="Fill in the details below to tell us more about you"
      type="signup"
      titleButton="Next"
      onNext={handleNextSignUp}
    >
      <FormInput title="Name" placeholder="Enter your name" type="text" query={firstName} setQuery={setFirstName} />

      <FormInput title="Surname" placeholder="Enter your surname" type="text" query={lastName} setQuery={setLastName} />

      <FormInput title="Email" placeholder="Enter your email" type="email" query={email} setQuery={setEmail} />
    </Form>
  );
};

export default SignUpPage;
