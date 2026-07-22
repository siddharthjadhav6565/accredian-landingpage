import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/constants/site';

const HERO_IMAGE =
  'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <SectionShell
      id="hero"
      className="overflow-hidden bg-[#eaf1f8] px-0 pt-0 md:bg-white md:pt-14 lg:pt-16"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="order-2 mx-auto max-w-2xl px-5 pb-8 text-center lg:order-1 lg:mx-0 lg:px-0 lg:pb-0 lg:text-left">
          <h1 className="mx-auto max-w-[330px] text-[2.1rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#111827] sm:max-w-[440px] sm:text-5xl lg:mx-0 lg:max-w-3xl lg:text-[3.65rem] lg:leading-[1.08]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-4 max-w-[340px] text-[15px] leading-7 text-[#374151] sm:max-w-lg sm:text-lg lg:mx-0 lg:mt-5">
            {hero.description}
          </p>

          <div className="mx-auto mt-6 grid max-w-[340px] grid-cols-2 gap-x-5 gap-y-5 sm:max-w-[420px] lg:mx-0 lg:max-w-none lg:gap-3">
            {hero.benefits.map((item) => (
              <div key={item} className="flex items-center gap-2.5 lg:gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#22c55e]" />
                <span className="text-[15px] font-medium text-[#111827] sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-7 flex max-w-[340px] flex-col gap-3 sm:max-w-[420px] sm:flex-row lg:mx-0 lg:max-w-none">
            <Button
              href="#contact"
              className="h-[48px] w-full justify-center rounded-[10px] bg-[#2f73df] text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(47,115,223,0.24)] hover:bg-[#2567cf]"
            >
              {hero.primaryCta.label}
            </Button>

            <Button
              href="#domain-expertise"
              variant="secondary"
              className="hidden lg:inline-flex"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-[#eaf1f8] lg:rounded-[28px] lg:border lg:border-slate-200 lg:bg-slate-50 lg:shadow-sm">
            <Image
              src={HERO_IMAGE}
              alt="Enterprise team learning illustration"
              width={900}
              height={760}
              priority
              className="mx-auto h-auto w-full max-w-[430px] object-contain lg:max-w-none lg:rounded-[28px] lg:object-cover"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}