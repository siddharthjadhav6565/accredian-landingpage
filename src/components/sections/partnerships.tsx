import Image from 'next/image';
import { SectionShell } from '@/components/layout/section-shell';
import { SectionHeading } from '@/components/ui/section-heading';
import { partnershipsData } from '@/data/partnerships';
import { cn } from '@/lib/cn';

export function Partnerships() {
  return (
    <SectionShell id="partnerships" className="bg-white pt-8 md:pt-10">
      <SectionHeading
        eyebrow="Our Proven Partnerships"
        title="Successful Collaborations With the Industry’s Best"
        description="Trusted by ambitious organizations building sharper teams, stronger capability pipelines, and enterprise-grade learning systems."
      />

      <div className="mt-8 flex justify-center">
        <ul className="grid w-full max-w-6xl grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
          {partnershipsData.map((partner) => (
            <li
              key={partner.id}
              className="flex min-h-[84px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 py-5"
            >
              <div
                className={cn(
                  'relative flex items-center justify-center',
                  partner.id === 'client-3'
                    ? 'h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-36'
                    : partner.id === 'client-2'
                    ? 'h-12 w-16 sm:h-16 sm:w-20 md:h-20 md:w-24'
                    : 'h-12 w-20 sm:h-16 sm:w-24 md:h-20 md:w-28',
                )}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}