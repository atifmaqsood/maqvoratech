import type { Metadata } from "next";

import { Founder } from "@/components/about/founder";
import { StackGrid } from "@/components/about/stack-grid";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/sections/page-header";
import { Process } from "@/components/sections/process";
import { JsonLd } from "@/components/seo/json-ld";
import { about } from "@/data/pages";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <PageHeader eyebrow={about.eyebrow} title={about.title} description={about.description} />
      <Story />
      <Values />
      <Process id="process" />
      <StackGrid />
      <Founder />
      <CtaBand />
    </>
  );
}
