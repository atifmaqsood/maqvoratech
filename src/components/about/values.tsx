import { Compass, Eye, Gem, Sprout } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { about } from "@/data/pages";

const icons = [Gem, Eye, Compass, Sprout];

export function Values() {
  const { values } = about;
  return (
    <section aria-labelledby="values-title" className="container-x py-16 md:py-24">
      <SectionHeading id="values-title" eyebrow={values.eyebrow} title={values.title} />
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.items.map((v, i) => {
          const Icon = icons[i % icons.length];
          return (
            <StaggerItem key={v.title} className="flex">
              <SpotlightCard className="w-full" innerClassName="flex h-full flex-col gap-10 p-7">
                <Icon className="size-6 text-accent-text" aria-hidden />
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
