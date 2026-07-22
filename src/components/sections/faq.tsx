'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';
import { faqGroups } from '@/data/faq';

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('About the Course');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeGroup = useMemo(
    () => faqGroups.find((group) => group.category === activeCategory) ?? faqGroups[0],
    [activeCategory],
  );

  return (
    <SectionShell id="faq" className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Frequently Asked <span className="text-[#3169e2]">Questions</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="space-y-7">
            {faqGroups.map((group) => {
              const isActive = group.category === activeCategory;

              return (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(group.category);
                    setOpenIndex(0);
                  }}
                  className={`flex min-h-[72px] w-full items-center justify-center rounded-[10px] border px-6 text-center text-[18px] font-semibold transition-all ${
                    isActive
                      ? 'border-[#dddddd] bg-white text-[#3169e2] shadow-[0_8px_22px_rgba(0,0,0,0.08)]'
                      : 'border-[#cfcfcf] bg-transparent text-slate-500'
                  }`}
                >
                  {group.category}
                </button>
              );
            })}
          </div>

          <div>
            <div className="space-y-7">
              {activeGroup.items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question} className="border-b border-transparent pb-2">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-1 text-left"
                    >
                      <span className="text-[20px] font-semibold leading-snug text-slate-950">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-6 w-6 shrink-0 text-slate-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen ? (
                      <div className="mt-3 max-w-3xl pr-10 text-[16px] leading-8 text-slate-600">
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-14 flex justify-center">
              <button
                type="button"
                className="inline-flex h-[50px] items-center justify-center rounded-[10px] bg-[#2f73df] px-7 text-[16px] font-semibold text-white shadow-[0_10px_18px_rgba(47,115,223,0.26)] transition hover:bg-[#2567cf]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}