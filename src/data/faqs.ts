export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How do you price projects?",
    answer:
      "Most projects are fixed-price, based on a detailed scope we agree together up front, with payments tied to milestones. For ongoing or evolving work we offer a dedicated developer or a monthly retainer. You'll always get a clear, written estimate before any work starts.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A marketing site usually takes 2–4 weeks, an MVP 6–10 weeks and a larger platform 3–6 months. After discovery we give you a week-by-week timeline, and you'll see working software in your first or second week.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our core stack is TypeScript, React / Next.js, Node.js and Laravel on the backend, PostgreSQL or MongoDB for data, Flutter for mobile and AWS, Vercel or Docker for infrastructure. If you already have a stack, we're happy to work within it.",
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do — 100%. Once the project is paid for, all source code, designs and accounts are transferred to you. We work in your repositories where possible, so there's never any lock-in.",
  },
  {
    question: "How will we communicate during the project?",
    answer:
      "You'll get a shared project board, a dedicated Slack or WhatsApp channel, and a short demo call every week. We overlap working hours with clients in Europe, the Middle East and North America.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes 30 days of free post-launch support for bug fixes. After that, you can choose a maintenance plan with monitoring, updates and a monthly block of improvement hours — or simply call us when you need us.",
  },
  {
    question: "Can you work with our existing team or codebase?",
    answer:
      "Absolutely. We regularly join in-house teams to add capacity, rescue stalled projects or modernise legacy code. We start with a short code audit so we can give you an honest picture before committing.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign your NDA before you share any details, and we treat every client's data and ideas as confidential by default.",
  },
];
