"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { sendContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validations";

export type ContactState =
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(input: unknown): Promise<ContactState> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot filled → silently pretend everything worked.
  if (parsed.data.website) return { status: "success" };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`).allowed) {
    return {
      status: "error",
      message: "You've sent a few messages already — please try again in a little while.",
    };
  }

  const result = await sendContactEmail(parsed.data);
  if (!result.ok) {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email us directly.",
    };
  }
  return { status: "success" };
}
