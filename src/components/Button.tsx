import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const Button: React.FC<Props> = ({
  className = '',
  children = null,
  ...rest
}) => {
  return (
    <button
      className={cn(
        `max-w-78 lg:max-w-97.5 h-11 w-full rounded-[100px] bg-primary/200 focus:border md:max-w-86`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
