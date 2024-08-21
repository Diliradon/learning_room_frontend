'use client';

import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { Dispatch, forwardRef, SetStateAction, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
  errorMessage?: string;
  type?: string;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
  query?: string;
  setQuery?: Dispatch<SetStateAction<string>>;
}

export const FormInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      title,
      errorMessage,
      type,
      showPassword = false,
      setShowPassword = () => {},
      query,
      setQuery,
      ...rest
    },
    ref,
  ) => {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setQuery) {
        setQuery(event.target.value);
      }
    };

    return (
      <label
        key={type}
        className={cn('flex flex-col gap-2 text-start relative', className)}
      >
        <p className="main-text-medium text-gray-100">{title}</p>
        <input
          ref={ref}
          value={query}
          onChange={handleInput}
          type={showPassword ? 'text' : type}
          {...rest}
          className={`main-text border-gray-10 w-full rounded-[100px] border px-[12px] py-2.5 focus:outline-primary/200`}
          autoComplete={type}
        />

        {type === 'password' && (
          <button
            type="button"
            className="absolute end-2 top-8 rounded-e-md p-2.5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="text-gray-100" />
            ) : (
              <Eye className="text-gray-100" />
            )}
          </button>
        )}

        {!!errorMessage && <small className="">{errorMessage}</small>}
      </label>
    );
  },
);

FormInput.displayName = 'FormInput';
