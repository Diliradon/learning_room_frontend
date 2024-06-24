'use client';

import { Form } from '@/components/Form';
import { FormInput } from '@/components/FormInput';

const ResetPassword = () => {
  return (
    <Form
      title="Sign in"
      description="Forgot your password?"
      titleButton="Next"
    >
      <p
        className={`max-w-78 lg:max-w-97.5 text-center text-grey/80 md:max-w-86`}
      >
        Don&#39;t worry. Please provide us with your email and we will send you
        a recovery link
      </p>

      <FormInput title="Email" placeholder="Enter your email" type="email" />
    </Form>
  );
};

export default ResetPassword;
