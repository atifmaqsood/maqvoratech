import { RichText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { about } from "@/data/pages";

export function Story() {
  const { story } = about;
  return (
    <section
      aria-labelledby="story-title"
      className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12"
    >
      <Reveal className="flex flex-col gap-5 lg:col-span-4">
        <Eyebrow>{story.eyebrow}</Eyebrow>
        <h2 id="story-title" className="display-md">
          <RichText text={story.title} />
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
        {story.paragraphs.map((p) => (
          <p key={p} className="text-lg leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <blockquote className="mt-4 border-l-2 border-accent pl-6 font-serif text-2xl leading-snug italic md:text-3xl">
          {story.mission}
        </blockquote>
      </Reveal>
    </section>
  );
}
