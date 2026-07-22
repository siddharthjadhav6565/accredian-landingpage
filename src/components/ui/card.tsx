import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200',
        className,
      )}
    >
      {children}
    </div>
  );
}