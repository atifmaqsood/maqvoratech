"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type GridItem = {
  slug: string;
  category: string;
  featured?: boolean;
  /** Server-rendered card. */
  node: React.ReactNode;
};

const ALL = "All";

function readCategory(categories: string[]) {
  const value = new URLSearchParams(window.location.search).get("category");
  return value && categories.includes(value) ? value : ALL;
}

/**
 * Animated category filter. State is synced to `?category=` using the native
 * History API (which Next.js integrates with), so the page stays static.
 */
export function ProjectGrid({ items, categories }: { items: GridItem[]; categories: string[] }) {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    const sync = () => setActive(readCategory(categories));
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [categories]);

  const select = useCallback((category: string) => {
    setActive(category);
    const url = new URL(window.location.href);
    if (category === ALL) url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.replaceState(null, "", url);
  }, []);

  const visible = active === ALL ? items : items.filter((i) => i.category === active);

  return (
    <LayoutGroup>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-1.5 rounded-full border border-border bg-surface/60 p-1.5 backdrop-blur-md sm:w-fit"
      >
        {[ALL, ...categories].map((c) => {
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={selected}
              onClick={() => select(c)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm transition-colors",
                selected ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="filter-pill"
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 rounded-full bg-gradient-brand"
                />
              )}
              <span className="relative">{c}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <motion.ul layout className="mt-10 grid grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => (
            <motion.li
              key={item.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={cn(item.featured && "lg:col-span-2")}
            >
              {item.node}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
