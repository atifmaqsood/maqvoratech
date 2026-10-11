"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const fieldClass =
  "h-12 rounded-xl border-border-strong bg-background/60 px-4 text-[0.95rem] shadow-none transition-colors placeholder:text-muted-foreground/70 hover:border-foreground/25 focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/20 aria-invalid:border-destructive aria-invalid:ring-destructive/15";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Field({ id, label, error, optional, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  value?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  options: readonly string[];
  placeholder: string;
  invalid: boolean;
};

export function SelectField({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  invalid,
}: SelectFieldProps) {
  return (
    <Select value={value || undefined} onValueChange={onChange}>
      <SelectTrigger
        id={id}
        onBlur={onBlur}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `${id}-error` : undefined}
        className={cn(
          fieldClass,
          "w-full data-placeholder:text-muted-foreground/70 data-[size=default]:h-12",
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position="popper" className="rounded-xl border-border bg-popover">
        {options.map((o) => (
          <SelectItem key={o} value={o} className="rounded-lg py-2">
            {o}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
