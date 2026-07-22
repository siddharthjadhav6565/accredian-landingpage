import { SectionShell } from '@/components/layout/section-shell';
import { SectionHeading } from '@/components/ui/section-heading';
import { StatCard } from '@/components/ui/stat-card';
import { statsData } from '@/data/stats';

export function Stats() {
  return (
    <SectionShell id="track-record" className="bg-white pt-8 md:pt-12">
      <SectionHeading
        eyebrow="Our Track Record"
        title="The Numbers Behind Our Success"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {statsData.map((stat) => (
          <StatCard key={stat.value + stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </SectionShell>
  );
}