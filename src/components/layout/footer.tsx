import { cacheLife } from "next/cache";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { SocialIcon } from "@/components/brand/social-icons";
import { BackToTop, NewsletterForm } from "@/components/layout/footer-client";
import { site } from "@/data/site";

/** Cached for a day so the year stays current without making the shell dynamic. */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border">
      <div className="container-x grid gap-14 py-16 md:grid-cols-12 md:py-20">
        <div className="flex flex-col gap-6 md:col-span-5">
          <Link href="/" aria-label={`${site.name} home`} className="w-fit">
            <Logo />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.footer.blurb}
          </p>
          <ul className="flex gap-1" aria-label="Social links">
            {site.socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  {...(s.key === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <SocialIcon name={s.key} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 md:col-span-3">
          {site.footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h2 className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/85 transition-colors hover:text-accent-text"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-4 md:col-span-4">
          <h2 className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {site.footer.newsletter.title}
          </h2>
          <p className="text-sm text-muted-foreground">{site.footer.newsletter.description}</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="container-x flex flex-col-reverse items-start justify-between gap-6 border-t border-border py-8 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          © <CurrentYear /> {site.name}. Built in-house, with care.
        </p>
        <BackToTop />
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-[0.22em] text-center text-[19.5vw] leading-none font-semibold tracking-[-0.07em] text-foreground/[0.035] select-none"
      >
        maqvoratech
      </p>
    </footer>
  );
}
