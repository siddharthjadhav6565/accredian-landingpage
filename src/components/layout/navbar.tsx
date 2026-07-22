import Image from 'next/image';
import Link from 'next/link';
import { navigationLinks } from '@/constants/navigation';
import { MobileMenu } from '@/components/layout/mobile-menu';

const LOGO_URL =
  'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp';
  
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center">
          <Image
            src={LOGO_URL}
            alt="Accredian logo"
            width={150}
            height={40}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}