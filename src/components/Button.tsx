import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  applyBackground?: boolean;
  children?: ReactNode;
}

export const Button: React.FC<Props> = ({
  className = '',
  applyBackground = true,
  children = null,
  ...rest
}) => {
  return (
    <button
      className={cn(
        `h-11 w-full rounded-[100px] focus:border`,
        applyBackground && 'bg-primary-200',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
