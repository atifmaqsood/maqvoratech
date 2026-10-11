import { Check } from "lucide-react";

import { CtaLink } from "@/components/ui/cta";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesPage } from "@/data/pages";
import { engagementModels } from "@/data/services";
import { cn } from "@/lib/utils";

export function EngagementModels() {
  const copy = servicesPage.engagement;
  return (
    <section aria-labelledby="engagement-title" className="container-x py-24 md:py-32">
      <SectionHeading
        id="engagement-title"
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        align="center"
      />
      <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
        {engagementModels.map((m) => (
          <StaggerItem
            key={m.title}
            className={cn(
              "relative flex flex-col gap-6 rounded-3xl border p-7 shadow-card md:p-8",
              m.highlighted
                ? "border-accent/40 bg-surface shadow-[0_30px_80px_-40px_var(--glow)]"
                : "border-border bg-surface/60",
            )}
          >
            {m.highlighted && (
              <span className="absolute -top-3 left-7 rounded-full bg-gradient-brand px-3 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-accent-foreground uppercase">
                Most popular
              </span>
            )}
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
            </div>
            <ul className="flex flex-col gap-2.5 border-t border-border pt-6">
              {m.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-cool" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-auto text-xs text-muted-foreground">
              <span className="font-mono tracking-[0.1em] uppercase">Best for · </span>
              {m.bestFor}
            </p>
            <CtaLink
              href="/contact"
              variant={m.highlighted ? "primary" : "secondary"}
              className="w-full"
            >
              Get a proposal
            </CtaLink>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
