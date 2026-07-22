import {
  Brain,
  Globe,
  Lightbulb,
  Settings,
  Users,
  WalletCards,
  ChartColumn,
} from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';
import { expertiseData } from '@/data/expertise';

const iconMap = {
  lightbulb: Lightbulb,
  brain: Brain,
  users: Users,
  chart: ChartColumn,
  settings: Settings,
  globe: Globe,
  wallet: WalletCards,
};

export function DomainExpertise() {
  const topRows = expertiseData.slice(0, 6);
  const lastCard = expertiseData[6];

  return (
    <SectionShell id="domain-expertise" className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Our <span className="text-[#3169e2]">Domain Expertise</span>
        </h2>

        <p className="mt-5 text-lg font-medium text-slate-800">
          <span className="text-[#3169e2]">Specialized Programs</span>{' '}
          Designed to Fuel Innovation
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topRows.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <article
                key={item.title}
                className="flex min-h-[130px] flex-col items-center justify-center rounded-[18px] border border-[#dddddd] bg-white px-6 py-7 text-center shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
              >
                <Icon className="h-14 w-14 text-[#3169e2] stroke-[2.2]" />
                <h3 className="mt-5 text-[22px] font-semibold leading-snug text-slate-950">
                  {item.title}
                </h3>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          {(() => {
            const Icon = iconMap[lastCard.icon as keyof typeof iconMap];

            return (
              <article className="flex min-h-[130px] w-full max-w-[405px] flex-col items-center justify-center rounded-[18px] border border-[#dddddd] bg-white px-6 py-7 text-center shadow-[0_8px_22px_rgba(0,0,0,0.08)]">
                <Icon className="h-14 w-14 text-[#3169e2] stroke-[2.2]" />
                <h3 className="mt-5 text-[22px] font-semibold leading-snug text-slate-950">
                  {lastCard.title}
                </h3>
              </article>
            );
          })()}
        </div>
      </div>
    </SectionShell>
  );
}