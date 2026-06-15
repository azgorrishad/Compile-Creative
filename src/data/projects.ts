export type Project = {
  slug: string;
  title: string;
  industry: string;
  transformation: string;
  type: "featured" | "compact";
  heroImage: string;
  visuals: string[];

  // The Situation — short bullets
  before: string[];

  // What We Changed — deliverables
  deliverables: string[];

  // The Result — one powerful statement
  result: string;

  // Key Insight — strategic lesson
  insight: string;

  // Before vs After Thinking
  thinking: {
    before: string;
    after: string;
  };

  // Legacy fields for case study pages
  challenge: string;
  solution: {
    text: string;
    highlights: string[];
  };
  focus: string[];
  impact: string;
};

export const projects: Project[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━
  // FEATURED CASE STUDIES
  // ━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "aria-milano",
    title: "Aria Milano",
    industry: "Perfume Brand",
    transformation:
      "From product-first branding to luxury-first perception.",
    type: "featured",
    heroImage: "/projects/aria_milano_perfume.png",
    visuals: ["/projects/aria_milano_perfume.png"],

    before: [
      "Visual identity lacked the authority of an Italian luxury fragrance",
      "Inconsistent brand presentation across touchpoints",
      "Modern sophistication was missing — brand felt generic",
      "Premium price point was not backed by premium perception",
    ],

    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Packaging Direction",
      "Communication Framework",
    ],

    result:
      "The brand finally looked as premium as the scent itself — luxury perception aligned with pricing.",

    insight:
      "Luxury is not created by expensive packaging. Luxury is created by consistent perception across every touchpoint.",

    thinking: {
      before: "We need a better logo.",
      after:
        "We need a luxury identity that justifies our price and commands respect before a single bottle is opened.",
    },

    challenge:
      "Aria Milano is a luxury Italian fragrance brand blending modern sophistication with timeless scent profiles. The brand needed a visual identity that matched the prestige of its product.",
    solution: {
      text: "We built a brand system rooted in Italian luxury — editorial art direction, refined typography, and packaging that commands shelf authority.",
      highlights: [
        "Brand Strategy",
        "Visual Identity",
        "Packaging Direction",
        "Communication Framework",
      ],
    },
    focus: ["Brand Identity", "Packaging", "Art Direction"],
    impact: "Brand positioned as a premium Italian fragrance in a competitive luxury market.",
  },

  {
    slug: "looks-matter",
    title: "Looks Matter",
    industry: "Clothing Brand",
    transformation:
      "From local clothing label to a premium brand with a refined identity.",
    type: "featured",
    heroImage: "/projects/looks-matter.jpg",
    visuals: ["/projects/looks-matter.jpg"],

    before: [
      "No clear visual identity beyond a basic logo",
      "Brand presence felt unpolished for a premium clothing line",
      "Needle-and-thread story was not communicated visually",
      "Social media direction lacked consistency and editorial quality",
    ],

    deliverables: [
      "Brand Identity",
      "Logo Mark Design",
      "Visual System",
      "Social Media Direction",
    ],

    result:
      "A refined clothing brand with a needle-and-thread logo mark, minimalist visual identity, and a consistent social presence that elevated brand perception.",

    insight:
      "A clothing brand's identity is the first garment a customer tries on. If it doesn't fit, they walk away before ever touching the product.",

    thinking: {
      before: "We need a better logo.",
      after:
        "We need a brand identity that communicates craftsmanship before a customer even sees the clothes.",
    },

    challenge:
      "Looks Matter is a premium clothing brand with a refined aesthetic. They needed a visual identity — a needle-and-thread logo mark, minimalist direction, and a social media system — that matched the quality of their product.",
    solution: {
      text: "We designed a refined brand identity anchored by a custom needle-and-thread logo mark, built a minimalist visual system, and established a social media direction that communicates premium craftsmanship.",
      highlights: [
        "Brand Identity",
        "Logo Mark Design",
        "Visual System",
        "Social Media Direction",
      ],
    },
    focus: ["Brand Identity", "Visual System", "Social Direction"],
    impact: "Established a premium clothing brand identity that elevated the brand's market positioning.",
  },

  {
    slug: "naksha-bari",
    title: "Naksha Bari",
    industry: "Cultural Fashion Brand",
    transformation:
      "From traditional craft to a modern Bangladeshi cultural fashion brand.",
    type: "featured",
    heroImage: "/projects/naksha-bari-1.png",
    visuals: ["/projects/naksha-bari-1.png", "/projects/naksha-bari-2.jpg"],

    before: [
      "Heritage and craft were invisible in the brand presentation",
      "Traditional patterns had no modern visual language to carry them",
      "Brand failed to connect with younger, culturally-proud audiences",
      "No cohesive system linking the brand's roots to its ambitions",
    ],

    deliverables: [
      "Brand Strategy",
      "Logo System",
      "Brand Guidelines",
      "Visual Identity",
    ],

    result:
      "A culturally rooted brand system that celebrates Bangladeshi craft and pattern through modern branding — heritage made contemporary.",

    insight:
      "Culture is not a constraint. When positioned correctly, it becomes the brand's most powerful differentiator.",

    thinking: {
      before: "We need to look more modern.",
      after:
        "We need to honour our Bangladeshi heritage and make it aspirational for a new generation.",
    },

    challenge:
      "Naksha Bari is a heritage-rooted Bangladeshi fashion brand celebrating traditional craft and pattern through modern branding. The challenge was building a visual identity that honoured tradition while feeling relevant and contemporary.",
    solution: {
      text: "We built a brand system that celebrates Bangladeshi craft — geometric patterns rooted in tradition, a modern logo system, and brand guidelines that allow the cultural story to lead.",
      highlights: [
        "Brand Strategy",
        "Logo System",
        "Brand Guidelines",
        "Visual Identity",
      ],
    },
    focus: ["Brand Identity", "Cultural Branding", "Visual System"],
    impact: "Created a culturally grounded fashion brand identity that bridges heritage with modern appeal.",
  },

  {
    slug: "sumico",
    title: "SumiCo",
    industry: "Collectibles & Toys",
    transformation:
      "From unnamed startup to a character-driven collectibles brand with a playful identity.",
    type: "featured",
    heroImage: "/projects/sumico-1.jpg",
    visuals: ["/projects/sumico-1.jpg", "/projects/sumico-2.jpg"],

    before: [
      "No brand identity or visual character to anchor the collectibles line",
      "Nothing to differentiate from established toy and collectibles brands",
      "No social media system or campaign direction for launch",
      "Brand lacked personality — it could have been any generic toy brand",
    ],

    deliverables: [
      "Brand Identity",
      "Character Design",
      "Social Media System",
      "Campaign Visuals",
    ],

    result:
      "A fun, character-driven lifestyle brand with a distinct playful identity, a full social media system, and creative campaign visuals that stood out in a crowded market.",

    insight:
      "In lifestyle brands, personality is the product. If your brand doesn't make people feel something, the product never gets a chance to.",

    thinking: {
      before: "We need a logo and some social posts.",
      after:
        "We need a brand character that people form an emotional connection with before they ever buy.",
    },

    challenge:
      "SumiCo is a lifestyle brand that needed to stand out through character and personality. The brand required a full identity built around a playful, character-driven concept with a social media system and creative campaign visuals.",
    solution: {
      text: "We built SumiCo's identity around a central character — playful, distinctive, and memorable. The visual system, social media direction, and campaign visuals all flow from that character, creating a brand that people want to follow.",
      highlights: [
        "Brand Identity",
        "Character Design",
        "Social Media System",
        "Campaign Visuals",
      ],
    },
    focus: ["Brand Identity", "Character Branding", "Social Media"],
    impact: "Established a distinctive character-driven brand identity with a full social media and campaign system.",
  },

  {
    slug: "flex-city",
    title: "Flex City",
    industry: "Lifestyle Brand",
    transformation:
      "From generic streetwear to a community-driven urban lifestyle brand.",
    type: "compact",
    heroImage: "/projects/flex-city-presentation.png",
    visuals: [
      "/projects/flex-city-presentation.png",
      "/projects/flex-city-logo-uploaded.png",
    ],

    before: [
      "Brand identity felt interchangeable with dozens of urban competitors",
      "No clear community angle or authentic urban positioning",
      "Visual language didn't reflect the energy of modern urban culture",
      "Lacked the brand architecture to build community around",
    ],

    deliverables: [
      "Brand Positioning",
      "Visual Identity",
      "Brand System",
      "Campaign Direction",
    ],

    result:
      "A bold lifestyle brand built for modern urban culture — with a visual identity and positioning that authentically speaks to community and self-expression.",

    insight:
      "Urban lifestyle brands don't sell products — they sell belonging. The brand that owns the community, owns the market.",

    thinking: {
      before: "We need a cooler logo.",
      after:
        "We need to build a brand that the urban community claims as their own.",
    },

    challenge:
      "Flex City is a lifestyle brand designed for modern urban culture with a focus on community and authenticity. The brand needed positioning and a visual identity that went beyond streetwear aesthetics.",
    solution: {
      text: "We positioned Flex City as a community-first lifestyle brand — building an identity around urban energy, self-expression, and belonging rather than just product.",
      highlights: [
        "Brand Positioning",
        "Visual Identity",
        "Brand System",
        "Campaign Direction",
      ],
    },
    focus: ["Brand Positioning", "Visual Identity", "Community Strategy"],
    impact: "Positioned Flex City as an authentic urban lifestyle brand built around community and culture.",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━
  // COMPACT TRANSFORMATION CARDS
  // ━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "ghera",
    title: "Ghera",
    industry: "Cultural Clothing",
    transformation:
      "From scattered product line to a culturally inspired clothing brand.",
    type: "compact",
    heroImage: "/projects/ghera.jpg",
    visuals: ["/projects/ghera.jpg"],

    before: [
      "Cultural inspiration was diluted by inconsistent branding",
      "Traditional aesthetics clashed with modern marketing approach",
    ],

    deliverables: ["Brand Strategy", "Visual Identity", "Marketing Direction"],

    result:
      "A culturally grounded clothing brand that blends traditional aesthetics with modern marketing — cohesive, intentional, and distinctive.",

    insight:
      "The most powerful brands don't borrow from culture. They are born from it.",

    thinking: {
      before: "We need to modernise our look.",
      after:
        "We need a brand that celebrates our cultural roots while speaking to a modern audience.",
    },

    challenge:
      "Ghera is a culturally inspired clothing brand blending traditional aesthetics with modern marketing. The brand needed cohesion between its cultural roots and its contemporary ambitions.",
    solution: {
      text: "We built a brand system that honours cultural heritage while creating a modern, marketable identity that appeals to a broader audience.",
      highlights: [
        "Brand Strategy",
        "Visual Identity",
        "Marketing Direction",
      ],
    },
    focus: ["Brand Strategy", "Cultural Identity", "Marketing"],
    impact: "Created a culturally coherent clothing brand with a modern visual identity.",
  },

  {
    slug: "mt-hut",
    title: "MT-Hut",
    industry: "E-commerce Brand",
    transformation:
      "From an invisible e-commerce operation to a fully branded market presence.",
    type: "compact",
    heroImage: "/projects/mt-hut.jpg",
    visuals: ["/projects/mt-hut.jpg"],

    before: [
      "No brand presence to support the e-commerce operation",
      "Product branding and marketing were disconnected",
    ],

    deliverables: [
      "Brand Identity",
      "Web Presence",
      "Product Branding",
      "Performance Marketing",
    ],

    result:
      "A complete e-commerce brand — full web presence, product branding, and performance marketing systems built to scale.",

    insight:
      "E-commerce without brand is just a marketplace listing. Brand is the reason customers return.",

    thinking: {
      before: "We need more traffic to our store.",
      after:
        "We need a brand that makes customers trust us before they ever reach the checkout.",
    },

    challenge:
      "MT-Hut is an e-commerce brand that needed a full web presence, product branding, and performance marketing systems to compete effectively.",
    solution: {
      text: "We built MT-Hut's complete brand infrastructure — identity, web presence, product branding, and performance marketing systems aligned to drive growth.",
      highlights: [
        "Brand Identity",
        "Web Presence",
        "Product Branding",
        "Performance Marketing",
      ],
    },
    focus: ["E-commerce", "Brand Identity", "Performance Marketing"],
    impact: "Built a complete e-commerce brand with web presence and performance marketing infrastructure.",
  },

  {
    slug: "signature-style",
    title: "Signature Style",
    industry: "Clothing & Lifestyle",
    transformation:
      "From basic clothing label to a premium minimalist lifestyle brand.",
    type: "compact",
    heroImage: "/projects/signature-style.png",
    visuals: ["/projects/signature-style.png"],

    before: [
      "Minimalist vision had no brand system to express it",
      "Premium positioning was undercut by generic presentation",
    ],

    deliverables: [
      "Brand Identity",
      "Logo Design",
      "Visual System",
      "Brand Guidelines",
    ],

    result:
      "A clothing and lifestyle brand with a confident minimalist identity — combining clean design with premium brand positioning.",

    insight:
      "Minimalism is not the absence of design. It is the presence of intention in every detail.",

    thinking: {
      before: "We need to look cleaner.",
      after:
        "We need a brand system where every element earns its place and communicates premium quality.",
    },

    challenge:
      "Signature Style is a clothing and lifestyle brand combining minimalist design with premium brand positioning. The brand needed a visual identity system that expressed this philosophy consistently.",
    solution: {
      text: "We designed a minimalist brand system — a clean logo mark, precise visual language, and brand guidelines that ensure every touchpoint communicates premium positioning.",
      highlights: [
        "Brand Identity",
        "Logo Design",
        "Visual System",
        "Brand Guidelines",
      ],
    },
    focus: ["Brand Identity", "Minimalist Design", "Premium Positioning"],
    impact: "Established a premium minimalist brand identity for the clothing and lifestyle market.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
