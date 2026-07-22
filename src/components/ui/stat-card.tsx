type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <p className="text-4xl font-bold tracking-tight text-sky-600 sm:text-5xl">
        {value}
      </p>
      <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-600">
        {label}
      </p>
    </div>
  );
}