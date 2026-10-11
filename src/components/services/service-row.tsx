import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { ServiceIcon } from "@/components/ui/service-icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TechTags } from "@/components/work/tech-tags";
import type { Service } from "@/data/services";

/** Detailed service card used on /services. */
export function ServiceRow({ service: s, index }: { service: Service; index: number }) {
  return (
    <SpotlightCard innerClassName="grid gap-8 p-6 md:p-8 lg:grid-cols-12 lg:gap-10">
      <div className="flex flex-col gap-5 lg:col-span-5">
        <div className="flex items-center gap-4">
          <ServiceIcon name={s.icon} />
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h2
          id={s.slug}
          className="scroll-mt-28 text-2xl font-semibold tracking-[-0.035em] md:text-3xl"
        >
          {s.title}
        </h2>
        <p className="leading-relaxed text-muted-foreground">{s.description}</p>
        <Link
          href={`/services/${s.slug}`}
          className="group/more mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-text"
        >
          Explore {s.title.toLowerCase()}
          <ArrowUpRight className="size-4 transition-transform group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5" />
        </Link>
      </div>

      <div className="lg:col-span-4">
        <h3 className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
          What&apos;s included
        </h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          {s.included.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-cool" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <dl className="flex flex-col gap-5 border-border max-lg:border-t max-lg:pt-6 lg:col-span-3 lg:border-l lg:pl-8">
        <div>
          <dt className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
            Typical timeline
          </dt>
          <dd className="mt-1.5 text-lg font-semibold tracking-[-0.02em]">{s.timeline}</dd>
        </div>
        <div>
          <dt className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
            Deliverables
          </dt>
          <dd className="mt-1.5 text-sm text-foreground/85">{s.deliverables.join(" · ")}</dd>
        </div>
        <div>
          <dt className="mb-2 font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
            Typical stack
          </dt>
          <dd>
            <TechTags tech={s.stack} />
          </dd>
        </div>
      </dl>
    </SpotlightCard>
  );
}
