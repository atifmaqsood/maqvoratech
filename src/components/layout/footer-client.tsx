"use client";

import { useState } from "react";
import { ArrowRight, ArrowUp, Check } from "lucide-react";
import { useLenis } from "lenis/react";

export function BackToTop() {
  const lenis = useLenis();
  return (
    <button
      type="button"
      onClick={() => {
        if (lenis) lenis.scrollTo(0, { duration: 1.4 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground"
    >
      Back to top
      <span className="inline-flex size-8 items-center justify-center rounded-full border border-border transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
        <ArrowUp className="size-3.5" />
      </span>
    </button>
  );
}

/** UI-only newsletter field — wire up to your provider of choice later. */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex h-12 items-center rounded-full border border-border bg-surface p-1 pl-4 focus-within:border-accent/60"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        disabled={done}
        placeholder={done ? "Thanks — you're on the list" : "you@company.com"}
        className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        disabled={done}
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-accent-foreground"
      >
        {done ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
      </button>
    </form>
  );
}
