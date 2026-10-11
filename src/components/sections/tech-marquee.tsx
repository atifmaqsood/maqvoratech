import { Marquee } from "@/components/ui/marquee";
import { home } from "@/data/home";
import { marqueeTech } from "@/data/tech";

export function TechMarquee() {
  return (
    <section aria-labelledby="toolkit-label" className="border-y border-border py-10">
      <p
        id="toolkit-label"
        className="container-x mb-7 text-center font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase"
      >
        {home.marquee.label}
      </p>
      <Marquee duration={45}>
        {marqueeTech.map((t) => (
          <span
            key={t}
            className="mx-7 flex items-center gap-7 text-xl font-medium tracking-[-0.03em] whitespace-nowrap text-foreground/60 transition-colors hover:text-foreground md:mx-9 md:text-2xl"
          >
            {t}
            <span aria-hidden className="size-1.5 rotate-45 bg-foreground/20" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
