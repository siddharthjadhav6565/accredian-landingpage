import { Headset, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { SectionShell } from '@/components/layout/section-shell';

export function ContactCTA() {
  return (
    <SectionShell id="contact-cta" className="bg-[#f7f7f7] pt-4 md:pt-6">
      <div className="relative overflow-hidden rounded-[18px] bg-[#2f73df] px-10 py-10 text-white md:px-14">
        <div className="absolute inset-y-0 right-[16%] w-[420px] rounded-full bg-white/6 blur-[1px]" />
        <div className="absolute -bottom-40 right-[10%] h-[420px] w-[420px] rounded-full border-[56px] border-white/6" />
        <div className="absolute -bottom-36 right-[14%] h-[320px] w-[320px] rounded-full border-[44px] border-white/6" />
        <div className="absolute -bottom-28 right-[18%] h-[220px] w-[220px] rounded-full border-[34px] border-white/8" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-6">
            <div className="flex h-[92px] w-[92px] items-center justify-center rounded-[16px] bg-white/90 shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
              <Headset className="h-12 w-12 text-[#2f73df]" />
            </div>

            <div>
              <h3 className="text-3xl font-bold leading-tight md:text-[2.6rem]">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="mt-3 text-[18px] font-medium text-white/90">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-[58px] min-w-[220px] items-center justify-center gap-2 rounded-[10px] bg-white px-8 text-[20px] font-semibold text-[#2f73df]"
          >
            Contact Us
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}