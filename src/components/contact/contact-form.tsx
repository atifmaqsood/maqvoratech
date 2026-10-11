"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { submitContact } from "@/app/contact/actions";
import { Field, fieldClass, SelectField } from "@/components/contact/form-fields";
import { SuccessState } from "@/components/contact/success-state";
import { ctaVariants } from "@/components/ui/cta";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { budgetOptions, serviceOptions, timelineOptions } from "@/data/contact";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactInput } from "@/lib/validations";

const defaults: ContactInput = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaults,
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState, setError, reset } = form;
  const errors = formState.errors;

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      const res = await submitContact(values);
      if (res.status === "success") {
        setSent(true);
        reset(defaults);
        return;
      }
      setServerError(res.message);
      for (const [key, msgs] of Object.entries(res.fieldErrors ?? {})) {
        if (msgs?.[0]) setError(key as keyof ContactInput, { message: msgs[0] });
      }
    });
  });

  if (sent) return <SuccessState onReset={() => setSent(false)} />;

  const a11y = (name: keyof ContactInput) => ({
    id: name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Name" error={errors.name?.message}>
        <Input
          {...a11y("name")}
          {...register("name")}
          autoComplete="name"
          placeholder="Jane Doe"
          className={fieldClass}
        />
      </Field>
      <Field id="email" label="Email" error={errors.email?.message}>
        <Input
          {...a11y("email")}
          {...register("email")}
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          className={fieldClass}
        />
      </Field>
      <Field
        id="company"
        label="Company"
        optional
        error={errors.company?.message}
        className="sm:col-span-2"
      >
        <Input
          {...a11y("company")}
          {...register("company")}
          autoComplete="organization"
          placeholder="Acme Inc."
          className={fieldClass}
        />
      </Field>

      {(
        [
          ["service", "Service", serviceOptions, "What do you need?", "sm:col-span-2"],
          ["budget", "Budget", budgetOptions, "Select a range", ""],
          ["timeline", "Timeline", timelineOptions, "When to start?", ""],
        ] as const
      ).map(([name, label, options, placeholder, span]) => (
        <Field key={name} id={name} label={label} error={errors[name]?.message} className={span}>
          <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
              <SelectField
                id={name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                options={options}
                placeholder={placeholder}
                invalid={!!fieldState.error}
              />
            )}
          />
        </Field>
      ))}

      <Field
        id="message"
        label="Project details"
        error={errors.message?.message}
        className="sm:col-span-2"
      >
        <Textarea
          {...a11y("message")}
          {...register("message")}
          rows={6}
          placeholder="What are you building, who is it for, and what does success look like?"
          className={cn(fieldClass, "h-auto min-h-40 resize-y py-3")}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We&apos;ll only use your details to reply. No newsletters, no spam.
        </p>
        <button
          type="submit"
          disabled={pending}
          className={cn(ctaVariants({ size: "lg" }), "min-w-44")}
        >
          {pending ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message{" "}
              <ArrowRight className="transition-transform group-hover/cta:translate-x-0.5" />
            </>
          )}
        </button>
      </div>

      {serverError && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive sm:col-span-2"
        >
          {serverError}
        </p>
      )}
    </form>
  );
}
