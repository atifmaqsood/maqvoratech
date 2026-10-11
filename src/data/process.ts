export type ProcessStep = {
  title: string;
  duration: string;
  description: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    duration: "Week 1",
    description:
      "We dig into your goals, users and constraints, then turn them into a clear scope, estimate and plan.",
    outputs: ["Scope document", "Technical plan"],
  },
  {
    title: "Design",
    duration: "Weeks 1–3",
    description:
      "Flows, wireframes and high-fidelity UI — validated with you before a single line of production code.",
    outputs: ["Clickable prototype", "Design system"],
  },
  {
    title: "Build",
    duration: "Weeks 3–10",
    description:
      "Short sprints with weekly demos. You see real, working software early and steer as we go.",
    outputs: ["Weekly releases", "Staging environment"],
  },
  {
    title: "Launch",
    duration: "Launch week",
    description:
      "Performance, security and accessibility checks, then a calm, rehearsed go-live with monitoring in place.",
    outputs: ["Production release", "Launch checklist"],
  },
  {
    title: "Support",
    duration: "Ongoing",
    description:
      "We stay on to monitor, maintain and keep improving — so your product gets better, not older.",
    outputs: ["SLA support", "Monthly improvements"],
  },
];
