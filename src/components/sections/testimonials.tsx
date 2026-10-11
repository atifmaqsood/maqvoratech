import Image from "next/image";
import { Quote } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/data/home";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { initials } from "@/lib/utils";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-2.5 flex w-[22rem] shrink-0 flex-col justify-between gap-8 rounded-3xl border border-border bg-surface p-7 shadow-card md:w-[26rem]">
      <Quote className="size-6 text-accent-text" aria-hidden />
      <blockquote className="text-base leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
      <figcaption className="flex items-center gap-3">
        {t.avatar ? (
          <Image
            src={t.avatar}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-accent-foreground">
            {initials(t.name)}
          </span>
        )}
        <span className="flex flex-col">
          <span className="text-sm font-medium">{t.name}</span>
          <span className="text-xs text-muted-foreground">
            {t.role}, {t.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Hidden automatically while `testimonials` is empty. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  const copy = home.testimonials;
  const few = testimonials.length < 3;

  return (
    <section aria-labelledby="testimonials-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          id="testimonials-title"
          eyebrow={copy.eyebrow}
          title={copy.title}
          align="center"
        />
      </div>
      <div className="mt-14">
        {few ? (
          <div className="container-x flex flex-wrap justify-center gap-y-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        ) : (
          <Marquee duration={testimonials.length * 12}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
}
