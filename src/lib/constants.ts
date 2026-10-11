export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

/** Signature easing curve used across every animation. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = { fast: 0.5, base: 0.7, slow: 0.9 } as const;
