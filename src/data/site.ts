export type NavItem = { label: string; href: string };
export type SocialKey = "github" | "linkedin" | "upwork" | "x" | "email";
export type SocialLink = { key: SocialKey; label: string; href: string };

export const site = {
  name: "Maqvoratech",
  shortName: "Maqvoratech",
  tagline: "Engineering-first, design-obsessed.",
  description:
    "Maqvoratech is a senior full-stack studio building production-grade web apps, SaaS products, mobile apps and business systems for startups, SMBs and international clients.",
  email: "hello@maqvoratech.com",
  /** Digits only, international format — used to build the wa.me link. */
  whatsapp: "923000000000",
  whatsappDisplay: "+92 300 000 0000",
  location: "Pakistan",
  locationNote: "Working with clients worldwide",
  responseTime: "We reply within 24 hours on business days.",
  availability: "Available for new projects",
  foundedYear: 2021,

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Team", href: "/team" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  cta: { label: "Start a project", href: "/contact" },

  socials: [
    { key: "github", label: "GitHub", href: "https://github.com/maqvoratech" },
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/maqvoratech" },
    { key: "upwork", label: "Upwork", href: "https://www.upwork.com/" },
    { key: "x", label: "X (Twitter)", href: "https://x.com/maqvoratech" },
    { key: "email", label: "Email", href: "mailto:hello@maqvoratech.com" },
  ] satisfies SocialLink[],

  footer: {
    blurb:
      "A small, senior team shipping software that's fast, accessible and built to last. From first sketch to production — and everything after.",
    columns: [
      {
        title: "Studio",
        links: [
          { label: "About", href: "/about" },
          { label: "Team", href: "/team" },
          { label: "Work", href: "/work" },
          { label: "Process", href: "/about#process" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Web apps", href: "/services/web-apps" },
          { label: "SaaS products", href: "/services/saas" },
          { label: "Mobile apps", href: "/services/mobile-apps" },
          { label: ".NET development", href: "/services/dotnet" },
          { label: "Python development", href: "/services/python" },
          { label: "WordPress", href: "/services/wordpress" },
          { label: "Graphic design", href: "/services/graphic-design" },
          { label: "Content writing", href: "/services/content-writing" },
          { label: "AI integrations", href: "/services/ai-integrations" },
        ],
      },
    ],
    newsletter: {
      title: "Field notes",
      description: "One short email a month on shipping better software. No spam, ever.",
    },
  },
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}`;
