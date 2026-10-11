"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { Logo } from "@/components/brand/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CtaLink } from "@/components/ui/cta";
import { Magnetic } from "@/components/ui/magnetic";
import { site } from "@/data/site";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    // Hide when scrolling down past the hero, reveal on any upward scroll.
    if (y > 160 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y < 160) setHidden(false);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-120%" : "0%" }}
      transition={{ duration: 0.45, ease: EASE }}
      onFocusCapture={() => setHidden(false)}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn("container-x transition-[padding] duration-500", scrolled ? "pt-3" : "pt-4")}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex h-14 items-center justify-between rounded-full border pr-2 pl-4 transition-[background-color,border-color,box-shadow] duration-500 ease-out-expo",
            scrolled
              ? "border-border bg-background/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" aria-label={`${site.name} home`} className="rounded-lg">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {site.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative z-10 block rounded-full px-3.5 py-2 text-sm transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ duration: 0.5, ease: EASE }}
                      className="absolute inset-0 rounded-full bg-foreground/[0.07]"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <Magnetic className="hidden sm:inline-flex">
              <CtaLink href={site.cta.href} size="sm">
                {site.cta.label}
              </CtaLink>
            </Magnetic>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
