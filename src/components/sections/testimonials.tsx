import Image from 'next/image';
import { SectionShell } from '@/components/layout/section-shell';
import { testimonialsData } from '@/data/testimonials';

export function Testimonials() {
  return (
    <SectionShell id="testimonials" className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Testimonials from <span className="text-[#3169e2]">Our Partners</span>
        </h2>

        <p className="mt-4 text-[18px] font-medium text-slate-700">
          What <span className="text-[#3169e2]">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonialsData.map((item) => (
            <article
              key={item.company}
              className="min-h-[270px] rounded-[18px] border border-[#d5d5d5] bg-white px-12 py-10"
            >
              <div className="relative h-[52px] w-[90px]">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-10 max-w-[610px] text-[20px] leading-[2.1rem] text-slate-700">
                {item.quote}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-[10px] w-[10px] rounded-full bg-[#2f73df]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#c9c9c9]" />
        </div>
      </div>
    </SectionShell>
  );
}