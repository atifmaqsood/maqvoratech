"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
        className,
      )}
    >
      {/* Both icons render on the server; CSS picks one, so there's no hydration flash. */}
      <Sun className="size-[1.05rem] scale-0 rotate-90 transition-transform duration-500 ease-out-expo dark:scale-100 dark:rotate-0" />
      <Moon className="absolute size-[1.05rem] scale-100 rotate-0 transition-transform duration-500 ease-out-expo dark:scale-0 dark:-rotate-90" />
    </button>
  );
}
