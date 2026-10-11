"use client";

import { MotionConfig } from "motion/react";

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* "user" = Motion skips transform/layout animations under prefers-reduced-motion. */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider delayDuration={200}>
          <SmoothScroll />
          {children}
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
