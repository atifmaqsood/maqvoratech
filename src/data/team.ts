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

export type TeamIcon = "leadership" | "javascript" | "dotnet" | "python";

export type Team = {
  slug: string;
  name: string;
  icon: TeamIcon;
  description: string;
  stack: string[];
  members: TeamMember[];
};

const founder = about.founder;

/**
 * Entries with a `name` are real profiles. Entries with only a `role` are open
 * placeholders — add each person's `name`, `photo` and `bio` when ready.
 */
export const teams: Team[] = [
  {
    slug: "leadership",
    name: "Leadership",
    icon: "leadership",
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
    slug: "mern-mean",
    name: "MERN & MEAN team",
    icon: "javascript",
    description:
      "Full-stack JavaScript and TypeScript — React or Angular on the front, Node.js and MongoDB behind it.",
    stack: ["MongoDB", "Express", "React", "Angular", "Node.js", "TypeScript"],
    members: [
      {
        name: "Mutahir Waheed",
        role: "Senior MERN & MEAN Stack Developer",
        bio: "Builds full-stack products with React, Angular, Node.js and MongoDB — from data model to deployment.",
        photo: "/team/mutahir.jpeg",
        skills: ["React", "Angular", "Node.js", "Express", "MongoDB"],
      },
      {
        role: "MEAN Stack Developer",
        bio: "Builds Angular front-ends backed by Express APIs and MongoDB.",
        skills: ["Angular", "Express", "RxJS"],
      },
      {
        role: "Full-stack JavaScript Developer",
        bio: "Ships features across Next.js, NestJS and TypeScript codebases.",
        skills: ["Next.js", "NestJS", "TypeScript"],
      },
    ],
  },
  {
    slug: "dotnet",
    name: ".NET team",
    icon: "dotnet",
    description:
      "Enterprise applications, APIs and Azure infrastructure built on the modern Microsoft stack.",
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "Blazor"],
    members: [
      {
        name: "Sufiyan Shakeel",
        role: "Senior .NET Developer",
        bio: "Designs ASP.NET Core platforms, APIs and the Azure infrastructure they run on.",
        photo: "/team/sufiyan.jpeg",
        skills: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Azure"],
      },
      {
        role: ".NET Backend Developer",
        bio: "Builds secure Web APIs and data layers with EF Core and SQL Server.",
        skills: ["Web APIs", "EF Core", "SQL Server"],
      },
      {
        role: "Full-stack .NET Developer",
        bio: "Delivers Blazor and MVC interfaces on top of robust .NET services.",
        skills: ["Blazor", "MVC", "TypeScript"],
      },
    ],
  },
  {
    slug: "python",
    name: "Python team",
    icon: "python",
    description: "Django and FastAPI backends, automation, data pipelines and AI integrations.",
    stack: ["Python", "Django", "FastAPI", "Celery", "PostgreSQL", "Pandas"],
    members: [
      {
        role: "Senior Python Engineer",
        bio: "Leads Django and FastAPI backends built for scale and easy maintenance.",
        skills: ["Django", "FastAPI", "PostgreSQL"],
      },
      {
        role: "Python Backend Developer",
        bio: "Builds REST APIs, background workers and third-party integrations.",
        skills: ["REST APIs", "Celery", "Redis"],
      },
      {
        role: "Data & AI Engineer",
        bio: "Turns data into pipelines, reports and practical AI features.",
        skills: ["Pandas", "LLM APIs", "Automation"],
      },
    ],
  },
];
