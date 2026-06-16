export type Project = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  strategicMove: string;
  outcome: string;
  heroImage: string;
};

export const projects: Project[] = [
  {
    slug: "aria-milano",
    title: "Aria Milano",
    industry: "Luxury Fragrance",
    challenge: "A premium product trapped behind an ordinary perception.",
    strategicMove: "Repositioned the brand, refined its identity system, and aligned every customer touchpoint around a luxury narrative.",
    outcome: "A stronger premium presence capable of competing against established fragrance brands.",
    heroImage: "/projects/aria_milano_perfume.png",
  },
  {
    slug: "looks-matter",
    title: "Looks Matter",
    industry: "Premium Apparel",
    challenge: "A rapidly growing streetwear label struggling to command premium pricing due to a generic, amateur brand identity.",
    strategicMove: "Stripped away the noise to build a minimalist, highly disciplined visual architecture that signals exclusivity and high-end craftsmanship.",
    outcome: "Successfully elevated market positioning, allowing for a 30% price increase without customer drop-off.",
    heroImage: "/projects/looks-matter.jpg",
  },
  {
    slug: "naksha-bari",
    title: "Naksha Bari",
    industry: "Cultural Fashion",
    challenge: "Rich cultural heritage was being ignored by younger demographics who viewed the presentation as outdated and traditional.",
    strategicMove: "Bridged heritage with modern aspiration by pairing traditional geometric patterns with severe, contemporary editorial photography.",
    outcome: "Captured the modern youth market, transforming a traditional craft business into a highly desirable cultural fashion house.",
    heroImage: "/projects/naksha-bari-1.png",
  },
  {
    slug: "sumico",
    title: "SumiCo",
    industry: "Collectibles",
    challenge: "Lost in a saturated market of fun but forgettable retail products with zero distinctive brand character.",
    strategicMove: "Engineered a living, breathing mascot system and a playful visual universe instead of a standard corporate logo.",
    outcome: "Created rabid community engagement and an instantly recognizable IP that dominated retail shelf attention.",
    heroImage: "/projects/sumico-1.jpg",
  },
  {
    slug: "ghera",
    title: "Ghera",
    industry: "Contemporary Clothing",
    challenge: "Premium garments were being sold through inconsistent, low-quality visual presentation, heavily diluting the brand's perceived value.",
    strategicMove: "Enforced strict visual discipline through standardized editorial guidelines, sophisticated typography, and a muted color palette.",
    outcome: "Perceived value finally matched the garment quality, driving a significant increase in average order value.",
    heroImage: "/projects/ghera.jpg",
  },
  {
    slug: "mt-hut",
    title: "MT-Hut",
    industry: "E-Commerce",
    challenge: "A highly functional store bleeding margin by competing purely on price with zero long-term brand equity.",
    strategicMove: "Transformed them from a 'store' into a 'brand' by building a cohesive identity system that built trust before the click.",
    outcome: "Drastically reduced customer acquisition costs by establishing a memorable brand that customers returned to directly.",
    heroImage: "/projects/mt-hut.jpg",
  },
  {
    slug: "signature-style",
    title: "Signature Style",
    industry: "Lifestyle",
    challenge: "A minimalist vision that came across as generic and low-effort rather than intentional and premium.",
    strategicMove: "Injected intention into the minimalism via mathematically rigorous layouts, precise typography, and premium structural guidelines.",
    outcome: "A confident, high-end lifestyle brand that successfully appeals to high-income, design-conscious demographics.",
    heroImage: "/projects/signature-style.png",
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
