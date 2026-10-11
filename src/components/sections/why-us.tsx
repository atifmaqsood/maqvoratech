import { Counter } from "@/components/ui/counter";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/data/home";
import { differentiators, stats } from "@/data/stats";

export function WhyUs() {
  const copy = home.why;
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow-2),transparent)] opacity-60 blur-3xl"
      />
      <div className="container-x">
        <SectionHeading
          id="why-title"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <Stagger className="mt-16 grid grid-cols-2 border-t border-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={`flex flex-col gap-3 border-b border-border py-8 pr-6 lg:border-b-0 ${i % 2 === 0 ? "" : "pl-6 max-lg:border-l"} ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dl className="flex flex-col gap-3">
                <dt className="order-2 font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {s.label}
                </dt>
                <dd className="order-1 text-5xl font-semibold tracking-[-0.05em] tabular-nums md:text-7xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="order-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </dd>
              </dl>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-16 grid gap-4 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <StaggerItem
              key={d.title}
              className="rounded-3xl border border-border bg-surface/60 p-7 shadow-card backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-accent-text">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
