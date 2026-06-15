export type Project = {
  id: string;
  name: string;
  slug: string;
  category: string;
  tags: string[];
  coverColor: string;
  challenge: string;
  strategy: string;
  outcome: string;
  metrics: string;
};

export const flagshipProjects: Project[] = [
  {
    id: "p1",
    name: "Aura Botanica",
    slug: "aura-botanica",
    category: "Skincare Brands",
    tags: ["Brand Strategy", "Packaging Design", "E-commerce"],
    coverColor: "bg-[#E6DFD4]",
    challenge: "High cart abandonment due to a fragmented brand identity and confusing user journey.",
    strategy: "Unified visual language and engineered a frictionless checkout architecture.",
    outcome: "Recovered $1.2M in annualized revenue and established premium positioning.",
    metrics: "+42% Conversion Rate"
  },
  {
    id: "p2",
    name: "Nexus OS",
    slug: "nexus-os",
    category: "SaaS Brands",
    tags: ["Product Design", "Growth Systems", "UX/UI"],
    coverColor: "bg-[#1E232B]",
    challenge: "High churn rate caused by a steep learning curve and disjointed onboarding sequence.",
    strategy: "Deployed a centralized retention framework and intuitive dashboard UI.",
    outcome: "Increased Lifetime Value (LTV) and turned users into brand advocates.",
    metrics: "+314% LTV Increase"
  },
  {
    id: "p3",
    name: "The Ember Room",
    slug: "the-ember-room",
    category: "Fragrance Brands",
    tags: ["Visual Identity", "Content Creation", "Marketing Consulting"],
    coverColor: "bg-[#4A2E25]",
    challenge: "Struggling to differentiate in a saturated luxury fragrance market.",
    strategy: "Developed an evocative, story-driven identity focused on sensory exclusivity.",
    outcome: "Sold out initial production run within 48 hours of launch.",
    metrics: "$450K Launch Revenue"
  },
  {
    id: "p4",
    name: "Vault Financial",
    slug: "vault-financial",
    category: "Startups",
    tags: ["Brand Strategy", "Website Design", "Automation"],
    coverColor: "bg-[#E4EDE8]",
    challenge: "Lack of institutional trust preventing mid-market client acquisition.",
    strategy: "Rebranded with a hyper-professional, stark editorial aesthetic to signal immediate authority.",
    outcome: "Closed 3 enterprise contracts within the first quarter post-launch.",
    metrics: "$2.4M Pipeline Value"
  },
  {
    id: "p5",
    name: "Bloom & Basin",
    slug: "bloom-and-basin",
    category: "Local Businesses",
    tags: ["Social Media Strategy", "Logo Design", "Growth Systems"],
    coverColor: "bg-[#D6DDD1]",
    challenge: "Relying purely on foot traffic and word of mouth, resulting in unpredictable revenue.",
    strategy: "Built a localized omnipresent marketing engine and premium digital booking flow.",
    outcome: "Created a 3-month waitlist and predictable recurring subscription revenue.",
    metrics: "+180% Recurring Revenue"
  }
];