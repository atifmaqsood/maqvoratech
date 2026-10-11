import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/data/pages";
import { techStack } from "@/data/tech";

export function StackGrid() {
  const copy = about.stack;
  return (
    <section aria-labelledby="stack-title" className="container-x py-16 md:py-24">
      <SectionHeading
        id="stack-title"
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <Stagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5 [&>*]:bg-surface">
        {techStack.map((group) => (
          <StaggerItem key={group.group} className="flex flex-col gap-5 p-6">
            <h3 className="font-mono text-[0.7rem] tracking-[0.12em] text-accent-text uppercase">
              {group.group}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[0.95rem]">
                  <span aria-hidden className="size-1 rounded-full bg-foreground/30" />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
