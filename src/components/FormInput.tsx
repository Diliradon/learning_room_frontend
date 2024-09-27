'use client';

import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { Dispatch, forwardRef, SetStateAction, useMemo, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
  name?: string;
  errorMessage?: string;
  type?: string;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
  query?: string;
  setQuery?: Dispatch<SetStateAction<string>>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  setError?: Dispatch<SetStateAction<{ [key: string]: string }>>;
  errors: { [key: string]: string };
}

export const FormInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      title,
      errorMessage,
      type,
      name,
      showPassword = false,
      setShowPassword = () => {},
      query,
      setQuery,
      onBlur,
      setError,
      errors,
      ...rest
    },
    ref,
  ) => {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = event.target;
      if (setError) {
        setError(prevErrors => {
          const newErrors = { ...prevErrors };
          delete newErrors[name];
          return newErrors;
        });
      }

      if (setQuery) {
        setQuery(event.target.value);
      }
    };

    const isValidated = useMemo(() => !!name && !(name in errors), [errors, name]);

    return (
      <label
        key={type}
        className={cn('flex flex-col gap-2 text-start relative', className)}
      >
        <p className="main-text-medium text-gray-100">{title}</p>
        <input
          ref={ref}
          name={name}
          value={query}
          onChange={handleInput}
          onBlur={onBlur}
          type={showPassword ? 'text' : type}
          {...rest}
          className={cn(
            'main-text border-gray-10 border w-full rounded-[100px] px-[12px] py-2.5 focus:outline-primary-200 bg-gray-0',
            errorMessage && 'border-error border-2',
            isValidated && 'border-success border-2',
          )}
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
        {!!errorMessage && <small className="text-error">{errorMessage}</small>}
      </label>
    );
  },
);

FormInput.displayName = 'FormInput';
