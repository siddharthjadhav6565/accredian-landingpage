import { cn } from '@/lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}