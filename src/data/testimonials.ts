export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional avatar in /public, e.g. "/testimonials/jane.webp" */
  avatar?: string;
};

/**
 * Only add REAL client testimonials here.
 * While this array is empty, the Testimonials section is hidden automatically.
 *
 * Example:
 * {
 *   quote: "Maqvoratech rebuilt our booking platform in eight weeks. Load times dropped by 70% and support tickets halved.",
 *   name: "Jane Doe",
 *   role: "Head of Product",
 *   company: "Acme Inc.",
 *   avatar: "/testimonials/jane-doe.webp",
 * },
 */
export const testimonials: Testimonial[] = [];
