import Image from 'next/image';
import { SectionShell } from '@/components/layout/section-shell';
import { segmentationData } from '@/data/segmentation';

export function CourseSegmentation() {
  return (
    <SectionShell id="course-segmentation" className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Tailored <span className="text-[#3169e2]">Course Segmentation</span>
        </h2>

        <p className="mt-5 text-lg font-medium text-slate-800">
          Explore <span className="text-[#3169e2]">Custom-fit Courses</span>{' '}
          Designed to Address Every Professional Focus
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-[1450px]">
        <div className="grid gap-7 lg:grid-cols-4">
          {segmentationData.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[16px] border border-[#d9d9d9] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-[190px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-6 pb-7 pt-5 text-center">
                <h3 className="text-[22px] font-semibold leading-snug text-[#3169e2]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[280px] text-[15px] leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}