export const fictionalOpportunity = {
  account: {
    name: "NusantaraPay",
    industry: "Financial technology",
    market: "Indonesia",
  },
  customer: {
    name: "AwanData",
    description: "a fictional Indonesian data and cloud consultancy",
  },
  pattern: {
    name: "Data-platform modernization window",
    summary: "Expansion, data leadership, and related delivery roles appear close in time.",
    interpretation: "The combination supports a hypothesis that NusantaraPay may be strengthening its data platform for expansion. It does not establish an approved project, external-service need, or buying intent.",
  },
  commercialPotential: {
    level: "Promising",
    summary: "Relevant multi-team need and strong customer capability match, subject to verification.",
    limitation: "Small internal scope, an incumbent contract, or a procurement route inaccessible to AwanData could reduce the opportunity.",
  },
  evidenceConfidence: {
    level: "Moderate",
    summary: "Three recent source types support the pattern; ownership and partner status are unknown.",
    limitation: "The most commercially important facts remain internal and require direct verification.",
  },
  evidence: [
    {
      type: "Company announcement",
      observed: "NusantaraPay announced expansion of its merchant services into two additional Indonesian cities.",
      observedDate: "18 July 2026",
      observedDateIso: "2026-07-18",
      checkedDate: "2 August 2026",
    },
    {
      type: "Leadership announcement",
      observed: "A new Head of Data was appointed with a stated remit covering data foundations and analytics delivery.",
      observedDate: "29 July 2026",
      observedDateIso: "2026-07-29",
      checkedDate: "2 August 2026",
    },
    {
      type: "Official careers page",
      observed: "Four open roles referenced data platform, cloud infrastructure, governance, and analytics engineering work.",
      observedDate: "31 July 2026",
      observedDateIso: "2026-07-31",
      checkedDate: "2 August 2026",
    },
  ],
  stakeholders: [
    {
      order: "01",
      role: "Head of Data",
      reason: "Likely to understand the platform priorities, internal capability, and delivery constraints.",
      objective: "Clarify ownership, sequencing, and whether external delivery support is relevant.",
    },
    {
      order: "02",
      role: "Chief Technology Officer",
      reason: "May own technology investment, architecture risk, and partner decisions.",
      objective: "Understand the strategic importance of modernization and the partner-selection process.",
    },
    {
      order: "03",
      role: "VP Merchant Operations",
      reason: "Can connect expansion requirements to reporting, reliability, and operational-data needs.",
      objective: "Verify which operational outcomes matter and where current systems create friction.",
    },
  ],
  unknowns: [
    ["Internal capacity", "The new roles may be sufficient to deliver the work without external support."],
    ["Incumbent partner", "An existing consultancy or cloud partner may already own the modernization programme."],
    ["Priority and budget", "The public evidence does not confirm an approved project, timeline, or buying process."],
  ],
  nextStep: {
    status: "Verify before approach",
    verify: [
      "Who owns the data-platform roadmap?",
      "Which outcomes are currently prioritized?",
      "Is delivery planned internally, with an incumbent, or through a new partner?",
    ],
    humanReview: "A human must verify the sources, confirm the interpretation, and approve the recommendation before any customer-facing action.",
  },
} as const;
