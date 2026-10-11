import { z } from "zod";

import { budgetOptions, serviceOptions, timelineOptions } from "@/data/contact";

const choice = (options: readonly string[], message: string) =>
  z.string({ error: message }).refine((v) => options.includes(v), { message });

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "That name is a little long"),
  email: z.email("Please enter a valid email address").max(120),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  service: choice(serviceOptions, "Please choose a service"),
  budget: choice(budgetOptions, "Please choose a budget range"),
  timeline: choice(timelineOptions, "Please choose a timeline"),
  message: z
    .string()
    .trim()
    .min(20, "A couple of sentences helps us reply usefully (20+ characters)")
    .max(4000, "Please keep it under 4,000 characters"),
  /** Honeypot — real people never see or fill this field. */
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
