import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServicesBento } from "@/components/sections/services-bento";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesBento />
      <FeaturedWork />
      <WhyUs />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
