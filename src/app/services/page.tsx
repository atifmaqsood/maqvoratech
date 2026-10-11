import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/sections/page-header";
import { EngagementModels } from "@/components/services/engagement-models";
import { ServiceRow } from "@/components/services/service-row";
import { Reveal } from "@/components/ui/reveal";
import { servicesPage } from "@/data/pages";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.description,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        description={servicesPage.description}
      >
        <nav aria-label="Jump to a service" className="mt-4 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur-md transition-colors hover:border-border-strong hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <section aria-label="All services" className="container-x flex flex-col gap-4">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <ServiceRow service={s} index={i} />
          </Reveal>
        ))}
      </section>

      <EngagementModels />
      <CtaBand />
    </>
  );
}
