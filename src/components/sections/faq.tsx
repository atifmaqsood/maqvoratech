import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/faqs";
import { home } from "@/data/home";
import { site } from "@/data/site";

export function Faq() {
  const copy = home.faq;
  return (
    <section
      aria-labelledby="faq-title"
      className="container-x grid gap-12 py-24 md:py-32 lg:grid-cols-12"
    >
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            id="faq-title"
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-sm font-medium text-accent-text underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
      <Reveal className="lg:col-span-7">
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="border-t border-border"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.question} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left text-base font-medium tracking-[-0.01em] hover:no-underline md:text-lg">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="pr-10 pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
