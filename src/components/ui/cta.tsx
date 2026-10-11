import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "group/cta relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,box-shadow,color,border-color] duration-300 ease-out-expo select-none disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-accent-foreground shadow-[0_10px_30px_-10px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_14px_44px_-8px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.45)]",
        secondary:
          "border border-border-strong bg-foreground/[0.03] text-foreground backdrop-blur-md hover:border-foreground/25 hover:bg-foreground/[0.07]",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CtaLinkProps = React.ComponentProps<typeof Link> & VariantProps<typeof ctaVariants>;

/** Internal link styled as a call-to-action. */
export function CtaLink({ className, variant, size, ...props }: CtaLinkProps) {
  return <Link className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}

type CtaAnchorProps = React.ComponentProps<"a"> & VariantProps<typeof ctaVariants>;

/** External / mailto link styled as a call-to-action. */
export function CtaAnchor({ className, variant, size, ...props }: CtaAnchorProps) {
  return <a className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}
