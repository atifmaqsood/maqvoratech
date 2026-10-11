import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BentoVisualFor } from "@/components/sections/bento-visuals";
import { CtaLink } from "@/components/ui/cta";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { home } from "@/data/home";
import { bentoServices } from "@/data/services";
import { cn } from "@/lib/utils";

const span = {
  lg: "md:col-span-4",
  md: "md:col-span-3",
  sm: "md:col-span-2",
} as const;

export function ServicesBento() {
  const copy = home.services;
  return (
    <section aria-labelledby="services-title" className="container-x py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          id="services-title"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <CtaLink href={copy.cta.href} variant="secondary" className="shrink-0">
          {copy.cta.label} <ArrowUpRight />
        </CtaLink>
      </div>

      <Stagger className="mt-14 grid gap-4 md:grid-cols-6 lg:auto-rows-[minmax(20rem,auto)]">
        {bentoServices.map((s) => (
          <StaggerItem key={s.slug} className={cn("flex", span[s.bento!.size])}>
            <SpotlightCard className="w-full" innerClassName="flex h-full flex-col">
              <Link
                href={`/services/${s.slug}`}
                className="group/link flex h-full flex-col gap-8 p-6 outline-none md:p-7"
              >
                <div className="flex items-start justify-between">
                  <ServiceIcon name={s.icon} />
                  <ArrowUpRight
                    aria-hidden
                    className="size-5 text-muted-foreground transition-all duration-500 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-foreground"
                  />
                </div>
                <div className="mt-auto flex flex-col gap-6">
                  <BentoVisualFor visual={s.bento!.visual} />
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
