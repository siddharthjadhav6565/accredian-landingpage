import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Partnerships } from '@/components/sections/partnerships';
import { Edge } from '@/components/sections/edge';
import { DomainExpertise } from '@/components/sections/domain-expertise';
import { CourseSegmentation } from '@/components/sections/course-segmentation';
import { SkillEnhancement } from '@/components/sections/skill-enhancement';
import { Framework } from '@/components/sections/framework';
import { FAQ } from '@/components/sections/faq';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactCTA } from '@/components/sections/contact-cta';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Partnerships />
      <Edge />
      <DomainExpertise />
      <CourseSegmentation />
      <SkillEnhancement />
      <Framework />
      <FAQ />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}