"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { DURATION, EASE } from "@/lib/constants";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Vertical offset in px the element rises from. */
  y?: number;
};

/** Fades + lifts its children into view once. */
export function Reveal({ children, delay = 0, y = 24, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: DURATION.base, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & { stagger?: number; delay?: number };

/** Parent that staggers `StaggerItem` children into view. */
export function Stagger({ children, stagger = 0.08, delay = 0, ...props }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
