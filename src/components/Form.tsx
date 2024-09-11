'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TypeForm } from '@/types/typeForm';

interface Props {
  title: string;
  description: string;
  type?: TypeForm;
  className?: string;
  children: ReactNode;
  titleButton: string;
  onNext?: any;
  onSubmit?: any;
}

export const Form: React.FC<Props> = ({
  className = '',
  title,
  description,
  type = '',
  children,
  titleButton,
  onNext = () => {},
  onSubmit = () => {},
}) => {
  const router = useRouter();

  return (
    <div className="box-border flex h-screen w-full max-w-[28rem] flex-col px-6 pt-20 text-center md:h-auto md:w-[344px] md:px-0 lg:w-full lg:pt-0">
      <div className="flex w-full flex-col gap-6 pb-10">
        <div className="flex items-end justify-between">
          {type !== 'signin' && (
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => router.back()}
            />
          )}

          <h2 className="text-gray-100 mx-auto">{title}</h2>
        </div>

        <h5 className="text-gray-80 mx-auto text-center">{description}</h5>
      </div>

      <form
        className="flex h-full flex-col justify-between font-ubuntuMedium lg:justify-start lg:gap-8"
        onSubmit={event => onSubmit(event)}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">{children}</div>
          {type === 'signin' && (
            <Link
              href="/resetpassword"
              className="main-text text-gray-700 block underline lg:hidden"
            >
              Forgot your password?
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-4 pb-32 md:pb-20 lg:pb-0">
          <Button
            type={type === 'signup' ? 'button' : 'submit'}
            onClick={event => onNext(event)}
          >
            {titleButton}
          </Button>

          {type === 'signin' && (
            <p
              className={cn(
                'text-gray-60 opacity-0',
                type === 'signin' && 'opacity-100',
              )}
            >
              Don&#8217;t have an account?{' '}
              <Link
                href="/sign-up"
                className="text-gray-100 relative underline"
              >
                Sign up
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
// 8sJFPo
