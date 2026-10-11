import { about } from "@/data/pages";

export type TeamMember = {
  /** Leave empty until the person's profile is ready — the card shows the role instead. */
  name?: string;
  role: string;
  bio?: string;
  /** Portrait in /public, e.g. "/team/jane.jpg" (4:5 works best). */
  photo?: string;
  skills?: string[];
  links?: { label: string; href: string }[];
};

export type Team = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  members: TeamMember[];
};

const founder = about.founder;

/**
 * ⚠️ Only the founder is a real profile. The .NET and Python team entries are
 * role placeholders — add each person's `name`, `photo` and `bio` when ready.
 */
export const teams: Team[] = [
  {
    slug: "leadership",
    name: "Leadership",
    description: "Sets the technical direction, owns client relationships and still ships code.",
    stack: ["Architecture", "Full-stack", "Delivery"],
    members: [
      {
        name: founder.name,
        role: founder.role,
        bio: founder.bio,
        photo: founder.photo,
        skills: ["Next.js", "Node.js", ".NET", "Python", "AWS"],
        links: founder.links,
      },
    ],
  },
  {
    slug: "dotnet",
    name: ".NET team",
    description:
      "Enterprise applications, APIs and Azure infrastructure built on the modern Microsoft stack.",
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "Blazor"],
    members: [
      { role: "Senior .NET Engineer", skills: ["C#", "ASP.NET Core", "Azure"] },
      { role: ".NET Backend Developer", skills: ["Web APIs", "EF Core", "SQL Server"] },
      { role: "Full-stack .NET Developer", skills: ["Blazor", "MVC", "TypeScript"] },
    ],
  },
  {
    slug: "python",
    name: "Python team",
    description: "Django and FastAPI backends, automation, data pipelines and AI integrations.",
    stack: ["Python", "Django", "FastAPI", "Celery", "PostgreSQL", "Pandas"],
    members: [
      { role: "Senior Python Engineer", skills: ["Django", "FastAPI", "PostgreSQL"] },
      { role: "Python Backend Developer", skills: ["REST APIs", "Celery", "Redis"] },
      { role: "Data & AI Engineer", skills: ["Pandas", "LLM APIs", "Automation"] },
    ],
  },
];
