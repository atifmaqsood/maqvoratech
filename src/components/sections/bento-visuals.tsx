import type { BentoVisual } from "@/data/services";

/* Small decorative visuals for the services bento. Pure CSS — aria-hidden. */

function CodeVisual() {
  const lines: [string, string][] = [
    ["text-cool", "export async function"],
    ["text-foreground", "  ship(idea: Idea) {"],
    ["text-muted-foreground", "  const app = await build(idea);"],
    ["text-muted-foreground", "  await test(app);"],
    ["text-accent-text", "  return deploy(app, 'prod');"],
    ["text-foreground", "}"],
  ];
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4 font-mono text-[0.72rem] leading-6">
      {lines.map(([c, l], i) => (
        <div key={i} className="flex gap-4 whitespace-pre">
          <span className="w-3 text-right text-muted-foreground/50">{i + 1}</span>
          <span className={c}>{l}</span>
        </div>
      ))}
      <div className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-muted-foreground">
        <span className="size-1.5 rounded-full bg-cool" />✓ Deployed to production in 42s
      </div>
    </div>
  );
}

function ChartVisual() {
  const bars = [38, 52, 44, 66, 58, 78, 72, 92];
  return (
    <div className="flex h-28 items-end gap-2">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-accent/25 to-accent transition-transform duration-700 ease-out-expo group-hover/spot:scale-y-110"
          style={{ height: `${h}%`, opacity: 0.35 + i * 0.08, transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  );
}

function PhoneVisual() {
  return (
    <div className="mx-auto w-28 rounded-[1.4rem] border border-border-strong bg-background/70 p-2 transition-transform duration-700 ease-out-expo group-hover/spot:-translate-y-1.5">
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-foreground/15" />
      <div className="mb-2 h-14 rounded-xl bg-gradient-brand opacity-80" />
      <div className="space-y-1.5">
        <div className="h-1.5 w-4/5 rounded-full bg-foreground/15" />
        <div className="h-1.5 w-3/5 rounded-full bg-foreground/10" />
        <div className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
      </div>
    </div>
  );
}

function CartVisual() {
  return (
    <div className="space-y-2">
      {["Linen throw", "Stoneware mug"].map((item, i) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-2.5"
        >
          <span className={`size-8 rounded-lg ${i ? "bg-cool/30" : "bg-accent/30"}`} />
          <span className="flex-1 text-xs">{item}</span>
          <span className="font-mono text-xs text-muted-foreground">${i ? 24 : 89}</span>
        </div>
      ))}
      <div className="rounded-xl bg-gradient-brand py-2 text-center text-xs font-medium text-accent-foreground">
        Checkout · $113
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="space-y-2.5 text-xs">
      <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-foreground/[0.07] px-3.5 py-2">
        Summarise this week&apos;s support tickets
      </div>
      <div className="w-fit max-w-[88%] rounded-2xl rounded-bl-md border border-border bg-background/60 px-3.5 py-2.5 text-muted-foreground">
        <span className="text-foreground">142 tickets, 3 themes.</span> Login issues are down 38%
        since Tuesday&apos;s fix
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-accent" />
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="relative h-28">
      <div className="absolute top-2 left-2 h-20 w-28 rounded-xl border border-dashed border-accent/60" />
      <div className="absolute top-6 left-10 h-20 w-28 rounded-xl bg-gradient-brand opacity-70 transition-transform duration-700 ease-out-expo group-hover/spot:translate-x-2" />
      <div className="absolute top-0 right-3 flex gap-1.5">
        {["bg-accent", "bg-accent-2", "bg-cool", "bg-foreground"].map((c) => (
          <span key={c} className={`size-5 rounded-full border border-border ${c}`} />
        ))}
      </div>
      <span className="absolute right-3 bottom-1 font-mono text-[0.65rem] text-muted-foreground">
        Aa · 56/60
      </span>
    </div>
  );
}

const visuals: Record<BentoVisual, () => React.JSX.Element> = {
  code: CodeVisual,
  chart: ChartVisual,
  phone: PhoneVisual,
  cart: CartVisual,
  ai: AiVisual,
  design: DesignVisual,
};

export function BentoVisualFor({ visual }: { visual: BentoVisual }) {
  const V = visuals[visual];
  return (
    <div aria-hidden className="select-none">
      <V />
    </div>
  );
}
