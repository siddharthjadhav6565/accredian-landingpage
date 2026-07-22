import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function Button({
  href = '#contact',
  children,
  variant = 'primary',
  className,
}: ButtonProps) {
  const styles = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700 shadow-sm',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
  };

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200',
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}