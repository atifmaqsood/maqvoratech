import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { about } from "@/data/pages";
import { initials } from "@/lib/utils";

export function Founder() {
  const f = about.founder;
  return (
    <section aria-labelledby="founder-title" className="container-x py-16 md:py-24">
      <Reveal className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-card md:grid-cols-12 md:p-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:col-span-5">
          {f.photo ? (
            <Image
              src={f.photo}
              alt={`Portrait of ${f.name}`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[50%_12%]"
            />
          ) : (
            <div
              role="img"
              aria-label={`${f.name} — photo coming soon`}
              className="absolute inset-0 flex items-center justify-center bg-surface-2"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_10%,var(--glow),transparent_60%)]"
              />
              <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />
              <span className="relative text-gradient font-serif text-[9rem] leading-none italic">
                {initials(f.name)}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5 md:col-span-7">
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <div>
            <h2 id="founder-title" className="display-md">
              {f.name}
            </h2>
            <p className="mt-2 font-mono text-sm text-accent-text">{f.role}</p>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{f.bio}</p>
          <ul className="flex gap-5">
            {f.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent-text"
                >
                  {l.label} <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
