import type { Metadata } from "next";

import { plainText } from "@/components/ui/gradient-text";
import { site } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

type PageMeta = { title: string; description: string; path: string };

/** Consistent per-page metadata: title, description, canonical, OG + Twitter. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const clean = plainText(title);
  return {
    title: clean,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${clean} — ${site.name}`,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: `${clean} — ${site.name}`, description },
  };
}

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

export function organizationJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      email: site.email,
      foundingDate: String(site.foundedYear),
      sameAs: site.socials.filter((s) => s.key !== "email").map((s) => s.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: site.name,
      description: site.description,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: site.email,
      telephone: `+${site.whatsapp}`,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
  ];
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
