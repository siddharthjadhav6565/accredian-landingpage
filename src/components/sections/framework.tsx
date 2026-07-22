import Image from 'next/image';
import {
  ChartColumn,
  Monitor,
  Presentation,
} from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';
import { howItWorksData } from '@/data/how-it-works';

const CAT_IMAGE =
  'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg';

const iconMap = {
  chart: ChartColumn,
  monitor: Monitor,
  screen: Presentation,
};

export function Framework() {
  return (
    <SectionShell id="framework" className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="mx-auto max-w-6xl rounded-none bg-[#eef5ff] px-8 py-10 md:px-12 md:py-14">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            The <span className="text-[#3169e2]">CAT Framework</span>
          </h2>

          <p className="mt-5 text-lg font-medium text-slate-800">
            Our Proven Approach to{' '}
            <span className="text-[#3169e2]">Learning Excellence</span>
          </p>
        </div>

        <div className="mt-12">
          <Image
            src={CAT_IMAGE}
            alt="CAT framework diagram"
            width={1400}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          How We <span className="text-[#3169e2]">Deliver Results</span> That Matter?
        </h2>

        <p className="mt-4 text-[18px] font-medium text-slate-700">
          A Structured Three-Step Approach to{' '}
          <span className="text-[#3169e2]">Skill Development</span>
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {howItWorksData.map((item: any, index: any) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div key={item.step} className="relative">
                {index !== 2 ? (
                  <span className="absolute -right-[14px] top-[44px] z-20 hidden h-[155px] w-[8px] rounded-full bg-[#2f73df] lg:block" />
                ) : null}

                <article className="relative rounded-[16px] border border-[#9ec3f8] bg-[#edf4fb] px-8 pb-8 pt-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                  <div className="absolute left-3 top-3 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#9ec3f8] bg-white text-[18px] font-semibold text-slate-950">
                    {item.step}
                  </div>

                  <div className="mx-auto mt-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#2f73df] shadow-[0_10px_18px_rgba(47,115,223,0.28)]">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mt-6 text-[21px] font-semibold leading-snug text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[280px] text-[15px] leading-8 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}