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
        // `max-w-78 lg:max-w-97.5 h-11 w-full rounded-[100px] focus:border md:max-w-86`,
        `h-11 w-full rounded-[100px] focus:border md:max-w-86`,
        applyBackground && 'bg-primary/200',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
