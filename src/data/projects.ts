export type ProjectCategory =
  "Web App" | "E-commerce" | "SaaS" | "Landing Page" | "Mobile" | "Dashboard" | "POS";

export type Project = {
  slug: string;
  title: string;
  description: string; // 1–2 lines
  category: ProjectCategory;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string; // /projects/<slug>.webp (screenshot in public/projects)
  year: number;
  featured?: boolean;
  accent?: string; // optional per-card glow color
};

/**
 * ⚠️ PLACEHOLDER PROJECTS — replace with your real sites.
 * To add a project: drop a screenshot (1600×1000 .webp recommended) in
 * `public/projects/<slug>.webp`, then add an object below.
 * If the image file is missing, a branded gradient placeholder is shown instead.
 */
export const projects: Project[] = [
  {
    slug: "ledgerly",
    title: "Ledgerly",
    description:
      "Subscription finance dashboard that turns Stripe data into MRR, churn and cohort insights.",
    category: "SaaS",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    image: "/projects/ledgerly.webp",
    year: 2025,
    featured: true,
    accent: "#FF6A2B",
  },
  {
    slug: "northwind-goods",
    title: "Northwind Goods",
    description: "Headless storefront for a homeware brand with sub-second product pages.",
    category: "E-commerce",
    tech: ["Next.js", "Shopify", "Tailwind CSS"],
    liveUrl: "https://example.com",
    image: "/projects/northwind-goods.webp",
    year: 2025,
    featured: true,
    accent: "#FFB547",
  },
  {
    slug: "tillpoint",
    title: "TillPoint POS",
    description: "Offline-first point-of-sale and inventory system for multi-branch retail.",
    category: "POS",
    tech: ["React", "Laravel", "MySQL", "Electron"],
    liveUrl: "https://example.com",
    image: "/projects/tillpoint.webp",
    year: 2024,
    featured: true,
    accent: "#6EE7D8",
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    description:
      "Cross-platform mobile app for field teams to log site visits, photos and signatures.",
    category: "Mobile",
    tech: ["Flutter", "Firebase", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    image: "/projects/fieldnote.webp",
    year: 2024,
  },
  {
    slug: "pulseops",
    title: "PulseOps",
    description: "Real-time operations dashboard aggregating orders, stock and logistics KPIs.",
    category: "Dashboard",
    tech: ["React", "Node.js", "MongoDB", "WebSockets"],
    liveUrl: "https://example.com",
    image: "/projects/pulseops.webp",
    year: 2024,
  },
  {
    slug: "aurora-studio",
    title: "Aurora Studio",
    description: "Launch site for an architecture studio with editorial layouts and smooth motion.",
    category: "Landing Page",
    tech: ["Next.js", "Motion", "Sanity"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    image: "/projects/aurora-studio.webp",
    year: 2023,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
