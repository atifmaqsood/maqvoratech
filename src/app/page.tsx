import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServicesBento } from "@/components/sections/services-bento";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/data/site";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: `${site.name} — ${site.tagline}`, description: site.description },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
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
