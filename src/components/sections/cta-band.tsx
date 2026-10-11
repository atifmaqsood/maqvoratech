import { ArrowRight, Mail } from "lucide-react";

import { CtaLink } from "@/components/ui/cta";
import { RichText } from "@/components/ui/gradient-text";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { home } from "@/data/home";
import { site } from "@/data/site";

export function CtaBand() {
  const copy = home.cta;
  return (
    <section aria-labelledby="cta-title" className="container-x py-12 md:py-20">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-20 text-center md:px-16 md:py-28">
        <div
          aria-hidden
          className="absolute -bottom-1/2 left-1/2 -z-10 h-[36rem] w-[60rem] max-w-[160%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl"
        />
        <div aria-hidden className="absolute inset-0 -z-10 dot-grid mask-fade-edges opacity-60" />

        <h2 id="cta-title" className="mx-auto max-w-4xl display-lg">
          <RichText text={copy.title} />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {copy.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <CtaLink href={copy.button.href} size="lg">
              {copy.button.label}
              <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </CtaLink>
          </Magnetic>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" aria-hidden /> {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
