import { RichText } from "@/components/ui/gradient-text";
import { Eyebrow } from "@/components/ui/section-heading";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

/** Inner-page hero: eyebrow, h1 with serif accent, intro and a soft ember glow. */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[56rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-80 blur-2xl"
      />
      <div aria-hidden className="absolute inset-0 -z-10 dot-grid mask-fade-edges opacity-60" />
      <div className="container-x flex flex-col gap-6">
        <Eyebrow className="animate-fade-in">{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl animate-fade-in display-lg" style={{ animationDelay: "80ms" }}>
          <RichText text={title} />
        </h1>
        {description && (
          <p
            className="max-w-2xl animate-fade-in text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
