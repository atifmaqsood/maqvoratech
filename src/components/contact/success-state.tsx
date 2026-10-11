"use client";

import { motion } from "motion/react";

import { contactPage } from "@/data/pages";
import { EASE } from "@/lib/constants";

export function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      role="status"
      className="flex min-h-[32rem] flex-col items-center justify-center gap-6 text-center"
    >
      <div className="relative flex size-20 items-center justify-center">
        <motion.span
          aria-hidden
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="absolute inset-0 rounded-full bg-gradient-brand shadow-[0_0_60px_-10px_var(--glow)]"
        />
        <svg viewBox="0 0 24 24" className="relative size-9" aria-hidden>
          <motion.path
            d="M5 12.5l4.5 4.5L19 7.5"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ stroke: "var(--accent-contrast)" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
          />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">{contactPage.success.title}</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">{contactPage.success.description}</p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        Send another message
      </button>
    </motion.div>
  );
}
