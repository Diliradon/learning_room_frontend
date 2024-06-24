import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
  errorMessage?: string;
  type?: string;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
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
      ...rest
    },
    ref,
  ) => {
    return (
      <label
        className={cn('max-w-78 lg:max-w-97.5 w-full md:max-w-86', className)}
      >
        <p className="font-medium text-grey/100">{title}</p>

        <div className="relative">
          <input
            ref={ref}
            type={showPassword ? 'text' : type}
            {...rest}
            className={`h-11 w-full rounded-[100px] border border-grey/10 p-2.5 focus:outline-primary/200`}
          />

          {type === 'password' && (
            <button
              type="button"
              className="absolute end-0 top-0 rounded-e-md p-2.5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="text-grey/100" />
              ) : (
                <Eye className="text-grey/100" />
              )}
            </button>
          )}
        </div>

        {!!errorMessage && <small className="">{errorMessage}</small>}
      </label>
    );
  },
);

FormInput.displayName = 'FormInput';
