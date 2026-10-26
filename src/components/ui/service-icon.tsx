import {
  AppWindow,
  Blocks,
  Braces,
  Cpu,
  FileText,
  Globe,
  LifeBuoy,
  Palette,
  PenTool,
  Receipt,
  ServerCog,
  ShoppingBag,
  Smartphone,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconKey } from "@/data/services";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIconKey, LucideIcon> = {
  web: AppWindow,
  saas: Blocks,
  mobile: Smartphone,
  cart: ShoppingBag,
  pos: Receipt,
  api: ServerCog,
  dotnet: Braces,
  python: SquareTerminal,
  design: Palette,
  graphic: PenTool,
  wordpress: Globe,
  content: FileText,
  ai: Cpu,
  support: LifeBuoy,
};

export function ServiceIcon({ name, className }: { name: ServiceIconKey; className?: string }) {
  const Icon = icons[name];
  return (
    <span
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-xl border border-border bg-foreground/[0.03] text-accent-text",
        className,
      )}
    >
      <Icon className="size-[1.15rem]" aria-hidden />
    </span>
  );
}
