'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-semibold text-slate-900">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200',
                  isOpen && 'rotate-180',
                )}
              />
            </button>

            {isOpen ? (
              <div className="border-t border-slate-100 px-5 py-4 text-sm leading-6 text-slate-600">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}