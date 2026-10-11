import type { Metadata } from "next";

import { Founder } from "@/components/about/founder";
import { StackGrid } from "@/components/about/stack-grid";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/sections/page-header";
import { Process } from "@/components/sections/process";
import { about } from "@/data/pages";

export const metadata: Metadata = {
  title: "About",
  description: about.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
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
