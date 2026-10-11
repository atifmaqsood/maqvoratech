import { Fragment } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { HeroBackground } from "@/components/sections/hero-background";
import { CtaLink } from "@/components/ui/cta";
import { GradientText } from "@/components/ui/gradient-text";
import { Magnetic } from "@/components/ui/magnetic";
import { home } from "@/data/home";
import { site } from "@/data/site";

/** Splits "We build *moves* things" into words, flagging the accent ones. */
function words(text: string) {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .flatMap((part) => {
      const accent = part.startsWith("*") && part.endsWith("*");
      return part
        .replace(/\*/g, "")
        .split(" ")
        .filter(Boolean)
        .map((w) => ({ w, accent }));
    });
}

export function Hero() {
  const { hero } = home;
  const tokens = words(hero.headline);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 md:pt-36">
      <HeroBackground />

      <div className="container-x flex flex-col items-center text-center">
        <div
          className="inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-border bg-surface/60 py-1.5 pr-4 pl-3 text-xs text-muted-foreground backdrop-blur-md"
          style={{ animationDelay: "60ms" }}
        >
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-cool" />
            <span className="relative size-2 rounded-full bg-cool" />
          </span>
          {site.availability}
        </div>

        <h1 className="mt-8 max-w-[14ch] display-xl" aria-label={hero.headline.replace(/\*/g, "")}>
          {tokens.map(({ w, accent }, i) => (
            <Fragment key={i}>
              <span
                aria-hidden
                className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom"
              >
                <span
                  className="inline-block animate-rise"
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                >
                  {accent ? <GradientText>{w}</GradientText> : w}
                </span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        <p
          className="mt-8 max-w-2xl animate-fade-in text-base leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "560ms" }}
        >
          {hero.subheadline}
        </p>

        <div
          className="mt-10 flex animate-fade-in flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "680ms" }}
        >
          <Magnetic>
            <CtaLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </CtaLink>
          </Magnetic>
          <CtaLink href={hero.secondaryCta.href} variant="secondary" size="lg">
            {hero.secondaryCta.label}
            <ArrowUpRight className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </CtaLink>
        </div>

        <ul
          className="mt-16 flex animate-fade-in flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase"
          style={{ animationDelay: "820ms" }}
          aria-label="Who we work with"
        >
          {hero.trust.map((t, i) => (
            <li key={t} className="flex items-center gap-6">
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden size-1 rounded-full bg-foreground/25 sm:block"
                />
              )}
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
