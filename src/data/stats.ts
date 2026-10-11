export type Stat = {
  value: number;
  /** Appended after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
  description: string;
};

/** Edit these numbers to match reality — they animate on the home page. */
export const stats: Stat[] = [
  {
    value: 40,
    suffix: "+",
    label: "Projects delivered",
    description: "Web apps, SaaS, mobile and business systems shipped to production.",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of experience",
    description: "Senior engineers only — no hand-offs to juniors you've never met.",
  },
  {
    value: 25,
    suffix: "+",
    label: "Technologies mastered",
    description: "We pick the right tool for the job, not the one we happen to know.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client satisfaction",
    description: "Most of our work comes from repeat clients and referrals.",
  },
];

export const differentiators = [
  {
    title: "Senior by default",
    description:
      "You work directly with experienced engineers who own the outcome end to end — design, code and deployment.",
  },
  {
    title: "Weekly demos, zero black boxes",
    description:
      "Working software every week, a shared board you can see, and plain-English updates. You always know where things stand.",
  },
  {
    title: "Built to be handed over",
    description:
      "Clean, documented, tested code that you fully own. No lock-in — your next team will thank you.",
  },
];
