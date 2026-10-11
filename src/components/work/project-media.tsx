import Image from "next/image";

import type { Project } from "@/data/projects";
import { getProjectMedia } from "@/lib/project-media";
import { cn, initials } from "@/lib/utils";

type ProjectMediaProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Project screenshot, or a branded gradient placeholder when the file is missing. */
export async function ProjectMedia({ project, sizes, priority, className }: ProjectMediaProps) {
  const media = await getProjectMedia(project.image);

  if (media.exists) {
    return (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={media.blurDataURL ? "blur" : "empty"}
        blurDataURL={media.blurDataURL}
        className={cn("object-cover object-top", className)}
      />
    );
  }

  const glow = project.accent ?? "var(--accent)";
  return (
    <div
      role="img"
      aria-label={`${project.title} preview`}
      className={cn("absolute inset-0 overflow-hidden bg-surface", className)}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 0% 0%, color-mix(in oklab, ${glow} 38%, transparent), transparent 60%), radial-gradient(90% 80% at 100% 100%, color-mix(in oklab, var(--accent-2) 22%, transparent), transparent 60%)`,
        }}
      />
      <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />
      {/* Faux UI skeleton for a sense of product */}
      <div aria-hidden className="absolute inset-x-[8%] top-[12%] flex items-center gap-2">
        <span className="h-2 w-16 rounded-full bg-foreground/20" />
        <span className="ml-auto h-2 w-8 rounded-full bg-foreground/10" />
        <span className="h-2 w-8 rounded-full bg-foreground/10" />
        <span className="h-4 w-12 rounded-full bg-foreground/15" />
      </div>
      <div aria-hidden className="absolute bottom-[12%] left-[8%] flex flex-col gap-2">
        <span className="h-2 w-40 max-w-[50vw] rounded-full bg-foreground/15" />
        <span className="h-2 w-28 rounded-full bg-foreground/10" />
      </div>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center text-[clamp(3rem,9vw,6.5rem)] font-semibold tracking-[-0.06em] text-foreground/85"
      >
        {initials(project.title)}
      </span>
    </div>
  );
}
