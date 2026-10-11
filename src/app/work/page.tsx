import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/sections/page-header";
import { ProjectCard } from "@/components/work/project-card";
import { ProjectGrid } from "@/components/work/project-grid";
import { work } from "@/data/pages";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: work.description,
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const sorted = [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured) || b.year - a.year,
  );
  const categories = [...new Set(sorted.map((p) => p.category))];

  return (
    <>
      <PageHeader eyebrow={work.eyebrow} title={work.title} description={work.description} />
      <section aria-label="Projects" className="container-x pb-12">
        <ProjectGrid
          categories={categories}
          items={sorted.map((p, i) => ({
            slug: p.slug,
            category: p.category,
            featured: p.featured,
            node: <ProjectCard project={p} wide={p.featured} priority={i < 2} />,
          }))}
        />
      </section>
      <CtaBand />
    </>
  );
}
