import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { Process } from "@/components/sections/process";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { TechTags } from "@/components/work/tech-tags";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-16 md:pt-44">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[56rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-80 blur-2xl"
        />
        <div className="container-x flex flex-col gap-6">
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden /> All services
          </Link>
          <ServiceIcon name={service.icon} className="size-12 animate-fade-in" />
          <h1 className="max-w-4xl animate-fade-in display-lg">{service.title}</h1>
          <p className="max-w-2xl animate-fade-in text-lg leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <CtaLink href="/contact" size="lg">
              Start a project <ArrowRight />
            </CtaLink>
            <CtaLink href="/work" variant="secondary" size="lg">
              See our work <ArrowUpRight />
            </CtaLink>
          </div>
        </div>
      </section>

      <section aria-label="Service details" className="container-x grid gap-4 lg:grid-cols-3">
        <Reveal className="rounded-3xl border border-border bg-surface p-7 shadow-card md:p-9 lg:col-span-2">
          <h2 className="text-xl font-semibold tracking-[-0.03em]">What&apos;s included</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex gap-3 text-[0.95rem]">
                <Check className="mt-0.5 size-4 shrink-0 text-cool" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.08}
          className="flex flex-col gap-7 rounded-3xl border border-border bg-surface p-7 shadow-card md:p-9"
        >
          <div>
            <h2 className="font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
              Typical timeline
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{service.timeline}</p>
          </div>
          <div>
            <h2 className="font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
              Deliverables
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm">
              {service.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
              Typical stack
            </h2>
            <TechTags tech={service.stack} />
          </div>
        </Reveal>
      </section>

      <Process />

      <section aria-labelledby="related-title" className="container-x pb-12">
        <h2 id="related-title" className="text-2xl font-semibold tracking-[-0.03em]">
          Related services
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong"
              >
                <ServiceIcon name={s.icon} />
                <span className="text-lg font-semibold tracking-[-0.02em]">{s.title}</span>
                <span className="text-sm text-muted-foreground">{s.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
