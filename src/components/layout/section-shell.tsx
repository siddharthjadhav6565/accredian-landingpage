import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn('w-full py-16 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}