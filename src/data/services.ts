export type ServiceIconKey =
  | "web"
  | "saas"
  | "mobile"
  | "cart"
  | "pos"
  | "api"
  | "dotnet"
  | "python"
  | "design"
  | "ai"
  | "support";

export type BentoVisual = "code" | "chart" | "phone" | "cart" | "ai" | "design";

export type Service = {
  slug: string;
  title: string;
  /** One-liner used on cards. */
  summary: string;
  /** Longer paragraph used on /services and the detail page. */
  description: string;
  icon: ServiceIconKey;
  included: string[];
  deliverables: string[];
  stack: string[];
  timeline: string;
  /** Show on the home page bento grid (exactly six recommended). */
  bento?: { size: "lg" | "md" | "sm"; visual: BentoVisual };
};

export const services: Service[] = [
  {
    slug: "web-apps",
    title: "Custom web apps",
    summary: "Fast, accessible web applications built on a modern, maintainable stack.",
    description:
      "From internal tools to customer-facing platforms, we design and build web applications that load instantly, scale cleanly and stay easy to change long after launch.",
    icon: "web",
    included: [
      "Product discovery & technical scoping",
      "Responsive, accessible front-end",
      "Authentication, roles & permissions",
      "Admin dashboards and reporting",
      "Automated testing & CI/CD",
    ],
    deliverables: ["Production web app", "Source code & docs", "Staging + production environments"],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    timeline: "6–12 weeks",
    bento: { size: "lg", visual: "code" },
  },
  {
    slug: "saas",
    title: "SaaS products",
    summary: "Multi-tenant SaaS with billing, onboarding and analytics baked in.",
    description:
      "We take SaaS ideas from zero to paying customers — multi-tenant architecture, subscription billing, onboarding flows and the analytics you need to grow.",
    icon: "saas",
    included: [
      "Multi-tenant architecture",
      "Stripe / Paddle subscription billing",
      "Onboarding & in-app guidance",
      "Usage analytics & admin console",
      "Transactional email & notifications",
    ],
    deliverables: ["MVP or full SaaS platform", "Billing integration", "Analytics dashboard"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    timeline: "8–16 weeks",
    bento: { size: "md", visual: "chart" },
  },
  {
    slug: "mobile-apps",
    title: "Mobile apps",
    summary: "Cross-platform iOS & Android apps that feel genuinely native.",
    description:
      "One codebase, two app stores. We build polished cross-platform mobile apps with offline support, push notifications and smooth 60fps interactions.",
    icon: "mobile",
    included: [
      "iOS & Android from one codebase",
      "Offline-first data sync",
      "Push notifications & deep links",
      "App Store / Play Store submission",
      "Crash reporting & analytics",
    ],
    deliverables: ["Store-ready apps", "Backend API", "Release pipeline"],
    stack: ["Flutter", "React Native", "Firebase", "Node.js"],
    timeline: "8–14 weeks",
    bento: { size: "sm", visual: "phone" },
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    summary: "Storefronts that convert — headless or Shopify, built for speed.",
    description:
      "Conversion-focused storefronts with lightning-fast product pages, frictionless checkout and back-office integrations that keep operations simple.",
    icon: "cart",
    included: [
      "Headless or Shopify storefront",
      "Payments, shipping & tax",
      "Inventory & order management",
      "SEO & Core Web Vitals tuning",
      "Analytics & conversion tracking",
    ],
    deliverables: ["Live storefront", "Admin & integrations", "Performance report"],
    stack: ["Next.js", "Shopify", "Stripe", "Laravel", "MySQL"],
    timeline: "5–10 weeks",
    bento: { size: "sm", visual: "cart" },
  },
  {
    slug: "pos-systems",
    title: "POS & business systems",
    summary: "Point-of-sale, inventory and ERP-style tools tailored to how you work.",
    description:
      "Off-the-shelf software rarely fits. We build POS, inventory, invoicing and operations systems shaped around your actual workflow — online and offline.",
    icon: "pos",
    included: [
      "Point-of-sale with offline mode",
      "Inventory, purchasing & suppliers",
      "Invoicing, receipts & reports",
      "Multi-branch & role-based access",
      "Hardware integration (printers, scanners)",
    ],
    deliverables: ["Business system", "Training & handover", "Data migration"],
    stack: ["React", "Laravel", "Node.js", "PostgreSQL", "Electron"],
    timeline: "6–12 weeks",
  },
  {
    slug: "api-backend",
    title: "APIs & backend",
    summary: "Robust APIs, integrations and infrastructure that just keep running.",
    description:
      "Well-documented REST and GraphQL APIs, third-party integrations and cloud infrastructure designed for reliability, observability and scale.",
    icon: "api",
    included: [
      "REST & GraphQL API design",
      "Third-party integrations",
      "Background jobs & queues",
      "Monitoring, logging & alerts",
      "Infrastructure as code",
    ],
    deliverables: ["Documented API", "Cloud infrastructure", "Runbooks"],
    stack: ["Node.js", "Laravel", "PostgreSQL", "Redis", "Docker", "AWS"],
    timeline: "4–10 weeks",
  },
  {
    slug: "dotnet",
    title: ".NET development",
    summary: "Enterprise-grade apps and APIs on ASP.NET Core, C# and Azure.",
    description:
      "From greenfield ASP.NET Core platforms to modernising legacy .NET Framework systems, our .NET team builds secure, high-performance software that fits right into Microsoft-centric organisations.",
    icon: "dotnet",
    included: [
      "ASP.NET Core web apps & REST APIs",
      "Blazor and MVC front-ends",
      "Entity Framework Core & SQL Server",
      "Azure hosting, DevOps & CI/CD",
      "Legacy .NET Framework → .NET 8+ migration",
    ],
    deliverables: ["Production .NET application", "API documentation", "Azure infrastructure"],
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "Blazor"],
    timeline: "6–14 weeks",
  },
  {
    slug: "python",
    title: "Python development",
    summary: "Django and FastAPI backends, automation and data pipelines.",
    description:
      "Our Python team builds fast, well-tested backends, internal tools, automations and data pipelines — and connects them to the AI and analytics capabilities Python does best.",
    icon: "python",
    included: [
      "Django & FastAPI backends and APIs",
      "Admin panels and internal tools",
      "Automation, scraping & scheduled jobs",
      "Data pipelines and reporting",
      "ML / AI model integration",
    ],
    deliverables: ["Python backend or service", "Test suite & docs", "Deployment pipeline"],
    stack: ["Python", "Django", "FastAPI", "Celery", "PostgreSQL", "Pandas"],
    timeline: "4–12 weeks",
  },
  {
    slug: "ui-ux",
    title: "UI/UX design",
    summary: "Interfaces that are clear, considered and a pleasure to use.",
    description:
      "Research-led product design — from user flows and wireframes to high-fidelity prototypes and a design system your developers will love.",
    icon: "design",
    included: [
      "User research & flows",
      "Wireframes & prototypes",
      "High-fidelity UI design",
      "Design systems & component libraries",
      "Usability testing",
    ],
    deliverables: ["Figma files", "Interactive prototype", "Design system"],
    stack: ["Figma", "Framer", "Storybook"],
    timeline: "2–6 weeks",
    bento: { size: "md", visual: "design" },
  },
  {
    slug: "ai-integrations",
    title: "AI integrations",
    summary: "Practical AI features — assistants, search and automation that earn their keep.",
    description:
      "We add AI where it genuinely helps: support assistants, semantic search, document processing and workflow automation, built with guardrails and measurable outcomes.",
    icon: "ai",
    included: [
      "AI assistants & chat interfaces",
      "Retrieval-augmented search (RAG)",
      "Document extraction & classification",
      "Workflow automation",
      "Evaluation & safety guardrails",
    ],
    deliverables: ["AI feature in production", "Evaluation suite", "Cost & usage dashboard"],
    stack: ["Claude API", "OpenAI", "pgvector", "Python", "Node.js"],
    timeline: "3–8 weeks",
    bento: { size: "lg", visual: "ai" },
  },
  {
    slug: "maintenance",
    title: "Maintenance & support",
    summary: "Updates, monitoring and improvements so your product never goes stale.",
    description:
      "Software is never finished. We keep your product secure, fast and evolving with proactive monitoring, dependency updates and a steady stream of improvements.",
    icon: "support",
    included: [
      "Uptime & error monitoring",
      "Security patches & dependency updates",
      "Performance audits",
      "Bug fixes with response SLAs",
      "Monthly improvement hours",
    ],
    deliverables: ["Monthly report", "SLA-backed support", "Roadmap reviews"],
    stack: ["Sentry", "Vercel", "AWS", "GitHub Actions"],
    timeline: "Ongoing",
  },
];

/** Bento order — each row's sizes should add up to 6 (lg=4, md=3, sm=2). */
const bentoOrder = ["web-apps", "mobile-apps", "saas", "ui-ux", "ecommerce", "ai-integrations"];

export const bentoServices = bentoOrder
  .map((slug) => services.find((s) => s.slug === slug && s.bento))
  .filter((s): s is Service => Boolean(s));

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type EngagementModel = {
  title: string;
  description: string;
  bestFor: string;
  points: string[];
  highlighted?: boolean;
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Fixed-price project",
    description: "A clearly scoped project with a fixed budget, timeline and milestones.",
    bestFor: "Well-defined MVPs, websites and feature builds",
    points: [
      "Detailed scope & estimate up front",
      "Milestone-based payments",
      "No surprise invoices",
    ],
  },
  {
    title: "Dedicated developer",
    description: "A senior engineer embedded in your team, working your hours and your tools.",
    bestFor: "Teams that need to ship faster without hiring",
    points: ["Full-time or part-time", "Joins your standups & Slack", "Scale up or down monthly"],
    highlighted: true,
  },
  {
    title: "Monthly retainer",
    description: "A reserved block of hours each month for improvements, support and new features.",
    bestFor: "Live products that need steady evolution",
    points: ["Priority response times", "Rollover of unused hours", "Monthly roadmap review"],
  },
];
