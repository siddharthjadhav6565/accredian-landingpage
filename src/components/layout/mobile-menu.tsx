'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '@/constants/navigation';
import { Button } from '@/components/ui/button';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-14 w-72 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 border-t border-slate-100 pt-5">
            <Button href="#contact" className="w-full">
              Book Consultation
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}