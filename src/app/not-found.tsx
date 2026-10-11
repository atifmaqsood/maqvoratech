import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { CtaLink } from "@/components/ui/cta";
import { GradientText } from "@/components/ui/gradient-text";
import { Eyebrow } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const log = [
  { t: "GET", v: "/the-page-you-wanted", c: "text-foreground" },
  { t: "404", v: "route not found in any branch", c: "text-accent-text" },
  { t: "fix", v: "rerouting you somewhere useful…", c: "text-cool" },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-24 md:pt-48">
      <div aria-hidden className="absolute inset-0 -z-10 dot-grid mask-fade-edges opacity-70" />
      <div
        aria-hidden
        className="absolute top-10 left-1/2 -z-10 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl"
      />
      <div className="container-x flex flex-col items-center text-center">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 display-xl">
          Well, this is <GradientText>awkward</GradientText>.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          This page took a wrong turn somewhere between staging and production. Let&apos;s get you
          back on track.
        </p>

        <div className="mt-10 w-full max-w-md rounded-2xl border border-border bg-surface p-5 text-left font-mono text-[0.8rem] shadow-card">
          <div className="mb-4 flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
          </div>
          <ul className="flex flex-col gap-2">
            {log.map((l) => (
              <li key={l.t} className="flex gap-3">
                <span className={`w-8 shrink-0 ${l.c}`}>{l.t}</span>
                <span className="text-muted-foreground">{l.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <CtaLink href="/" size="lg" className="mt-10">
          <ArrowLeft /> Take me home
        </CtaLink>
      </div>
    </section>
  );
}
