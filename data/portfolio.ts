export interface PortfolioPage {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  commonlySupplied: string[]
  formatsPackaging: string[]
  processSteps: { title: string; description: string }[]
  cooperationFormats: string[]
  geography: string[]
  logisticsPoints: string[]
  ctaHeadline: string
  ctaDescription: string
}

export interface PortfolioFeatureItem {
  title: string
  href: string
  imageSrc: string
  imageAlt: string
}

export const portfolioFeatureItems: PortfolioFeatureItem[] = [
  {
    title: "Food commodities",
    href: "/portfolio/food-commodities",
    imageSrc: "/wheat-grain-food-commodities-warehouse.jpg",
    imageAlt: "Wheat grain food commodities warehouse",
  },
  {
    title: "Dairy",
    href: "/portfolio/dairy",
    imageSrc: "/dairy-products-milk-cheese-butter-industrial.jpg",
    imageAlt: "Dairy products including milk, cheese, and butter",
  },
  {
    title: "Fresh & frozen produce",
    href: "/portfolio/fresh-frozen-produce",
    imageSrc: "/fresh-frozen-vegetables-fruits-cold-storage.jpg",
    imageAlt: "Fresh and frozen vegetables and fruits in cold storage",
  },
  {
    title: "Fertilizers",
    href: "/portfolio/fertilizers",
    imageSrc: "/fertilizer-agriculture-farm-field-granules.jpg",
    imageAlt: "Fertilizer granules on agricultural farm field",
  },
  {
    title: "Agricultural supplies",
    href: "/portfolio/agricultural-supplies",
    imageSrc: "/agricultural-supplies-seeds-farm-equipment.jpg",
    imageAlt: "Agricultural supplies including seeds and farm equipment",
  },
]

export const portfolioPages: PortfolioPage[] = [
  {
    slug: "food-commodities",
    title: "Food commodities",
    subtitle:
      "Bulk food ingredients and staples for industrial food processing and wholesale distribution across Europe.",
    heroImage: "/wheat-grain-food-commodities-warehouse.jpg",
    commonlySupplied: [
      "Grains & cereals (wheat, barley, oats, corn)",
      "Oilseeds (sunflower, rapeseed, soybean)",
      "Legumes & pulses (peas, lentils, beans)",
      "Sugar & sweeteners",
      "Vegetable oils",
      "Flour & milling products",
    ],
    formatsPackaging: [
      "Bulk shipments (road/rail/sea)",
      "Big bags (500–1000 kg)",
      "Palletized goods",
      "IBC containers",
      "Flexitank solutions",
    ],
    processSteps: [
      { title: "Requirements", description: "We discuss your volume, specifications, and delivery requirements." },
      { title: "Sourcing", description: "Our network identifies vetted suppliers meeting your quality standards." },
      { title: "Quality checks", description: "In-house laboratory verification ensures batch compliance." },
      { title: "Documentation", description: "Full documentation package prepared for customs and traceability." },
      { title: "In-house logistics", description: "Our logistics team coordinates multimodal transport." },
      { title: "Delivery", description: "Timely delivery to your specified destination in Europe." },
    ],
    cooperationFormats: [
      "Long-term wholesale contracts",
      "Framework supply agreements",
      "Tender participation",
      "Spot deals for urgent requirements",
    ],
    geography: [
      "Latvia",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Luxembourg",
      "Austria",
      "Switzerland",
      "Ireland",
      "United Kingdom",
      "Iceland",
    ],
    logisticsPoints: [
      "In-house logistics supporting all deliveries",
      "Multimodal operations (road, rail, sea)",
      "Temperature-controlled storage capabilities",
      "Air cargo solutions for urgent bulk consignments",
      "Risk mitigation through diversified routing",
    ],
    ctaHeadline: "Ready to source food commodities?",
    ctaDescription: "Contact our team to discuss your requirements and receive a tailored supply proposal.",
  },
  {
    slug: "dairy",
    title: "Dairy",
    subtitle: "Premium dairy products from vetted European producers for B2B wholesale and food manufacturing.",
    heroImage: "/dairy-products-milk-cheese-butter-industrial.jpg",
    commonlySupplied: [
      "Butter & butter oils",
      "Cheese (various types)",
      "Milk powders (skim, whole, whey)",
      "Cream & cream products",
      "Casein & milk proteins",
      "Lactose",
    ],
    formatsPackaging: [
      "Cartons & cases",
      "Drums (for butter oils, cream)",
      "Big bags (for powders)",
      "Palletized goods",
      "Temperature-controlled containers",
    ],
    processSteps: [
      {
        title: "Requirements",
        description: "Specification alignment including fat content, origin, and certifications.",
      },
      { title: "Sourcing", description: "Selection from our network of verified European dairy producers." },
      { title: "Quality checks", description: "Laboratory testing for composition and safety parameters." },
      { title: "Documentation", description: "Complete certificates of analysis and origin documentation." },
      { title: "In-house logistics", description: "Cold chain coordination from producer to your facility." },
      { title: "Delivery", description: "Temperature-controlled delivery across Western Europe." },
    ],
    cooperationFormats: [
      "Long-term wholesale contracts",
      "Seasonal supply agreements",
      "Tender participation",
      "Spot purchases for market opportunities",
    ],
    geography: [
      "Latvia",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Luxembourg",
      "Austria",
      "Switzerland",
      "Ireland",
      "United Kingdom",
      "Iceland",
    ],
    logisticsPoints: [
      "Cold storage and refrigerated transport",
      "Temperature monitoring throughout transit",
      "Expedited delivery for perishable goods",
      "Air cargo solutions for urgent consignments",
      "Cross-docking capabilities",
    ],
    ctaHeadline: "Looking for reliable dairy supply?",
    ctaDescription: "Reach out to explore partnership opportunities and discuss your dairy sourcing needs.",
  },
  {
    slug: "fresh-frozen-produce",
    title: "Fresh & frozen produce",
    subtitle: "Quality fruits, vegetables, and frozen produce with full cold chain integrity for European markets.",
    heroImage: "/fresh-frozen-vegetables-fruits-cold-storage.jpg",
    commonlySupplied: [
      "Fresh fruits (seasonal selection)",
      "Fresh vegetables (seasonal selection)",
      "Frozen fruits & berries",
      "Frozen vegetables",
      "Frozen fruit concentrates",
      "Pre-processed & cut produce",
    ],
    formatsPackaging: [
      "Refrigerated containers",
      "Palletized crates & boxes",
      "Bulk frozen packaging",
      "IQF (Individually Quick Frozen) formats",
      "Drum packaging for concentrates",
    ],
    processSteps: [
      { title: "Requirements", description: "Specification of varieties, volumes, and quality grades needed." },
      { title: "Sourcing", description: "Seasonal sourcing from certified agricultural producers." },
      { title: "Quality checks", description: "Pre-shipment inspection and laboratory verification." },
      { title: "Documentation", description: "Phytosanitary certificates and full traceability records." },
      { title: "In-house logistics", description: "Unbroken cold chain from origin to destination." },
      { title: "Delivery", description: "Timely delivery with temperature integrity maintained." },
    ],
    cooperationFormats: [
      "Seasonal contracts",
      "Annual framework agreements",
      "Project-based supply",
      "Spot market opportunities",
    ],
    geography: [
      "Latvia",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Luxembourg",
      "Austria",
      "Switzerland",
      "Ireland",
      "United Kingdom",
      "Iceland",
    ],
    logisticsPoints: [
      "Dedicated cold storage facilities",
      "Real-time temperature monitoring",
      "Fast transit times for fresh produce",
      "Air cargo for ultra-fresh deliveries",
      "Multimodal refrigerated transport",
    ],
    ctaHeadline: "Need fresh or frozen produce?",
    ctaDescription: "Contact us to discuss seasonal availability and supply arrangements.",
  },
  {
    slug: "fertilizers",
    title: "Fertilizers",
    subtitle: "Agricultural fertilizers and soil enhancement products for large-scale farming and distribution.",
    heroImage: "/fertilizer-agriculture-farm-field-granules.jpg",
    commonlySupplied: [
      "Nitrogen fertilizers (urea, AN, CAN)",
      "Phosphate fertilizers (DAP, MAP, TSP)",
      "Potassium fertilizers (MOP, SOP)",
      "NPK compound fertilizers",
      "Organic fertilizers",
      "Specialty & foliar fertilizers",
    ],
    formatsPackaging: [
      "Bulk shipments (rail, sea)",
      "Big bags (500–1000 kg)",
      "Palletized small bags",
      "IBC containers (for liquid fertilizers)",
      "Flexitank (for liquid products)",
    ],
    processSteps: [
      { title: "Requirements", description: "Assessment of nutrient specifications, volumes, and application timing." },
      { title: "Sourcing", description: "Procurement from established fertilizer producers and traders." },
      { title: "Quality checks", description: "Analysis of nutrient content and product consistency." },
      { title: "Documentation", description: "MSDS, certificates of analysis, and registration documents." },
      { title: "In-house logistics", description: "Specialized handling for hazardous and bulk goods." },
      { title: "Delivery", description: "Delivery coordinated with agricultural cycles." },
    ],
    cooperationFormats: [
      "Seasonal supply contracts",
      "Long-term framework agreements",
      "Tender participation",
      "Spot deals for market opportunities",
    ],
    geography: [
      "Latvia",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Luxembourg",
      "Austria",
      "Switzerland",
      "Ireland",
      "United Kingdom",
      "Iceland",
    ],
    logisticsPoints: [
      "Bulk handling capabilities",
      "Compliant transport for regulated goods",
      "Covered storage to prevent moisture damage",
      "Rail and sea freight for large volumes",
      "Last-mile delivery to farms and distributors",
    ],
    ctaHeadline: "Sourcing fertilizers for your operations?",
    ctaDescription: "Get in touch to discuss your fertilizer requirements and delivery schedules.",
  },
  {
    slug: "agricultural-supplies",
    title: "Agricultural supplies",
    subtitle: "Essential inputs and consumables for agricultural operations and farm management.",
    heroImage: "/agricultural-supplies-seeds-farm-equipment.jpg",
    commonlySupplied: [
      "Seeds (cereals, oilseeds, vegetables)",
      "Crop protection products",
      "Animal feed & feed additives",
      "Agricultural films & covers",
      "Irrigation supplies",
      "Farm consumables",
    ],
    formatsPackaging: [
      "Palletized goods",
      "Big bags",
      "Drums & IBC containers",
      "Sealed seed packaging",
      "Specialized protective packaging",
    ],
    processSteps: [
      { title: "Requirements", description: "Understanding your farm operations and input needs." },
      { title: "Sourcing", description: "Identification of suitable products from verified suppliers." },
      { title: "Quality checks", description: "Verification of product specifications and regulatory compliance." },
      { title: "Documentation", description: "Phytosanitary certificates, registration documents, and batch records." },
      { title: "In-house logistics", description: "Coordinated delivery aligned with planting and growing seasons." },
      { title: "Delivery", description: "Reliable delivery to support your agricultural calendar." },
    ],
    cooperationFormats: [
      "Annual supply agreements",
      "Seasonal contracts",
      "Project-based supply",
      "Ongoing partnership programs",
    ],
    geography: [
      "Latvia",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Luxembourg",
      "Austria",
      "Switzerland",
      "Ireland",
      "United Kingdom",
      "Iceland",
    ],
    logisticsPoints: [
      "Climate-controlled storage for sensitive products",
      "Timely delivery aligned with agricultural seasons",
      "Specialized handling for crop protection products",
      "Multimodal transport options",
      "Consolidation services for mixed orders",
    ],
    ctaHeadline: "Need agricultural supplies?",
    ctaDescription: "Contact our team to discuss your requirements and seasonal planning.",
  },
]

export function getPortfolioPageBySlug(slug: string): PortfolioPage | undefined {
  return portfolioPages.find((page) => page.slug === slug)
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioPages.map((page) => page.slug)
}
