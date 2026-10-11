"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/data/home";
import { processSteps } from "@/data/process";
import { EASE } from "@/lib/constants";

/** Five-step timeline: horizontal on desktop, vertical on mobile, line fills on scroll. */
export function Process({ id = "process" }: { id?: string }) {
  const copy = home.process;
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const fill = reduce ? 1 : progress;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="container-x scroll-mt-24 py-24 md:py-32"
    >
      <SectionHeading
        id={`${id}-title`}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <ol
        ref={ref}
        className="relative mt-16 grid gap-10 pl-10 lg:grid-cols-5 lg:gap-6 lg:pt-12 lg:pl-0"
      >
        {/* Track + fill (horizontal on lg, vertical below) */}
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[0.6875rem] w-px bg-border lg:top-[0.6875rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
        >
          <motion.div
            style={{ scaleY: fill }}
            className="h-full w-full origin-top bg-gradient-to-b from-accent to-accent-2 lg:hidden"
          />
          <motion.div
            style={{ scaleX: fill }}
            className="hidden h-full w-full origin-left bg-gradient-to-r from-accent to-accent-2 lg:block"
          />
        </div>

        {processSteps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute top-1 -left-10 flex size-[1.375rem] items-center justify-center rounded-full border border-border-strong bg-background lg:-top-12 lg:left-0"
            >
              <span className="size-2 rounded-full bg-gradient-brand" />
            </span>
            <p className="font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
              <span className="text-accent-text">0{i + 1}</span> · {step.duration}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {step.outputs.map((o) => (
                <li
                  key={o}
                  className="rounded-full bg-foreground/[0.05] px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground"
                >
                  {o}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
