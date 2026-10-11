"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";

import { Logo } from "@/components/brand/logo";
import { SocialIcon } from "@/components/brand/social-icons";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ctaVariants } from "@/components/ui/cta";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-9 items-center justify-center rounded-full text-foreground hover:bg-foreground/[0.06] lg:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        data-lenis-prevent
        className="gap-0 border-0 bg-background/95 p-0 backdrop-blur-2xl data-[side=top]:h-dvh"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-40 h-96 bg-[radial-gradient(closest-side,var(--glow),transparent)]"
        />
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <SheetClose asChild>
            <Link href="/" aria-label={`${site.name} home`}>
              <Logo />
            </Link>
          </SheetClose>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <SheetClose
              aria-label="Close menu"
              className="inline-flex size-9 items-center justify-center rounded-full hover:bg-foreground/[0.06]"
            >
              <X className="size-5" />
            </SheetClose>
          </div>
        </div>

        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>

        <nav aria-label="Mobile" className="container-x mt-8 flex-1">
          <ul className="flex flex-col">
            {site.nav.map((link, i) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={open ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 + i * 0.06 }}
                  className="border-b border-border"
                >
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center justify-between py-4 text-4xl font-semibold tracking-[-0.04em]"
                    >
                      <span className={cn(active && "text-gradient")}>{link.label}</span>
                      <ArrowUpRight className="size-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </SheetClose>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={open ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
          className="container-x flex flex-col gap-6 pb-10"
        >
          <SheetClose asChild>
            <Link href={site.cta.href} className={cn(ctaVariants({ size: "lg" }), "w-full")}>
              {site.cta.label}
            </Link>
          </SheetClose>
          <div className="flex items-center justify-between">
            <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground">
              {site.email}
            </a>
            <ul className="flex gap-1">
              {site.socials
                .filter((s) => s.key !== "email")
                .map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                    >
                      <SocialIcon name={s.key} />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
