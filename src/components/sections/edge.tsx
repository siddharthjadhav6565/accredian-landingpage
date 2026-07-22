import Image from 'next/image';
import { SectionShell } from '@/components/layout/section-shell';
import { SectionHeading } from '@/components/ui/section-heading';

const EDGE_IMAGE =
  'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg';

export function Edge() {
  return (
    <SectionShell id="edge" className="bg-slate-50">
      <SectionHeading
        eyebrow="The Accredian Edge"
        title="Key Aspects of Our Strategic Training"
        description=""
      />

      <div className="mx-auto mt-10 max-w-6xl">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-5">
          <Image
            src={EDGE_IMAGE}
            alt="Accredian edge strategic training illustration"
            width={1400}
            height={900}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </SectionShell>
  );
}