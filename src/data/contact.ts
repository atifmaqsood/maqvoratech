import { services } from "@/data/services";

/** Options for the contact form selects — edit freely. */
export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"] as const;

export const budgetOptions = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1 – 3 months",
  "3+ months",
  "Flexible",
] as const;
