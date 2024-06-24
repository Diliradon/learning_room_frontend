'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
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
  onNext?: () => void;
  onSubmit?: () => void;
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
    <form
      className={cn(
        `pt-18 pb-31.5 md:pb-18.75 flex flex-1 flex-col justify-between bg-grey/0 px-6 shadow-[20px_0px_32px_0px_#0000000D] md:mt-auto md:min-h-[672px] md:rounded-t-3xl md:px-[212px] lg:m-0 lg:max-w-[608px] lg:justify-center lg:gap-8 lg:rounded-l-none lg:rounded-r-3xl lg:px-32`,
        className,
      )}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col items-center">
        <div className="max-w-78 lg:max-w-97.5 w-full md:max-w-86">
          <div className="flex items-end justify-between">
            {type !== 'signin' && (
              <ArrowLeft
                className="cursor-pointer"
                onClick={() => router.back()}
              />
            )}

            <h2 className="mx-auto text-grey/100">{title}</h2>
          </div>

          <h5 className="mx-auto mt-6 text-center text-grey/80">
            {description}
          </h5>
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-2 md:mt-8">
          {children}
        </div>

        {type === 'signin' && (
          <Link
            href="/resetpassword"
            className="underline-after relative mx-auto mt-6 lg:mt-8"
          >
            Forgot your password?
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button type={type === 'signup' ? 'button' : 'submit'} onClick={onNext}>
          {titleButton}
        </Button>

        <p
          className={cn(
            'text-grey/60 opacity-0',
            type === 'signin' && 'opacity-100',
          )}
        >
          Don&#8217;t have an account?{' '}
          <Link
            href="/signup"
            className="underline-after relative text-grey/100"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};