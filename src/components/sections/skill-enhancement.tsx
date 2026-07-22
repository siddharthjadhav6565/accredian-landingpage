import Image from 'next/image';
import {
  BriefcaseBusiness,
  GraduationCap,
  MonitorCheck,
  MonitorX,
} from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';
import { audienceData } from '@/data/audience';

const HUMAN_IMAGE =
  'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png';

const iconMap = {
  'monitor-check': MonitorCheck,
  'monitor-x': MonitorX,
  'graduation-cap': GraduationCap,
  briefcase: BriefcaseBusiness,
};

export function SkillEnhancement() {
  return (
    <SectionShell id="skill-enhancement" className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="rounded-[18px] bg-[#2f73df] px-8 py-10 text-white shadow-[0_10px_32px_rgba(0,0,0,0.08)] md:px-14 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.25fr]">
          <div className="relative flex min-h-[420px] flex-col justify-between">
            <div>
              <p className="text-[18px] font-medium text-white/95">
                Who Should Join?
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white md:text-[3.4rem]">
                Strategic Skill Enhancement
              </h2>
            </div>

            <div className="relative mt-8 h-[270px] w-full max-w-[360px]">
              <Image
                src={HUMAN_IMAGE}
                alt="Professionals illustration"
                fill
                className="object-contain object-left-bottom"
              />
            </div>
          </div>

          <div className="grid gap-10 pt-2 sm:grid-cols-2">
            {audienceData.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <article key={item.title} className="max-w-sm">
                  <Icon className="h-14 w-14 text-white stroke-[2.1]" />
                  <h3 className="mt-5 text-[22px] font-semibold leading-snug text-white md:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-8 text-white/85">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}