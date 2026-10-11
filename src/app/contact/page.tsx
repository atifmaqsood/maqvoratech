import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";

import { SocialIcon } from "@/components/brand/social-icons";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { RichText } from "@/components/ui/gradient-text";
import { Eyebrow } from "@/components/ui/section-heading";
import { contactPage } from "@/data/pages";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: contactPage.description,
  path: "/contact",
});

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: site.whatsappDisplay, href: whatsappLink },
  {
    icon: MapPin,
    label: "Location",
    value: `${site.location} — ${site.locationNote.toLowerCase()}`,
  },
  { icon: Clock, label: "Response time", value: site.responseTime },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <section className="relative isolate overflow-hidden pt-36 pb-12 md:pt-44">
        <div
          aria-hidden
          className="absolute -top-40 left-0 -z-10 h-[34rem] w-[48rem] max-w-[140vw] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-80 blur-2xl"
        />
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Eyebrow className="animate-fade-in">{contactPage.eyebrow}</Eyebrow>
            <h1 className="animate-fade-in display-lg" style={{ animationDelay: "80ms" }}>
              <RichText text={contactPage.title} />
            </h1>
            <p
              className="max-w-md animate-fade-in text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              {contactPage.description}
            </p>

            <ul className="flex flex-col divide-y divide-border border-y border-border">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-accent-text">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-[0.95rem] transition-colors hover:text-accent-text"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[0.95rem]">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="flex gap-2" aria-label="Social links">
              {site.socials
                .filter((s) => s.key !== "email")
                .map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                    >
                      <SocialIcon name={s.key} />
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border bg-surface/80 p-6 shadow-card backdrop-blur-md md:p-10">
              <h2 className="mb-8 text-xl font-semibold tracking-[-0.03em]">
                Tell us about your project
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
