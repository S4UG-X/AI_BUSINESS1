import brandLogo from "@/public/logo.png";
import founderPortrait from "@/public/founder.png";
import jadanLogo from "@/public/clients/jadan-construction-group-logo.png";
import nebcoLogo from "@/public/clients/nebco-logo.png";
import ntcLogo from "@/public/clients/ntc-construction-logo.png";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

export const siteConfig = {
  name: "ANZO AI",
  wordmark: { name: "ANZO", suffix: "AI" },
  description:
    "Practical AI automation and marketing for HVAC businesses, built by a team of University of Southern Mississippi graduate students.",
  phone: {
    display: "(601) 658-1522",
    href: "tel:+ 16016581522",
    isPlaceholder: true,
  },
  serviceArea: "Serving HVAC businesses across the United States",
  siteUrl: configuredSiteUrl.replace(/\/+$/, ""),
  images: {
    logo: brandLogo,
    hero: "/local-business-pros.png",
    services: "/demo.png",
    demos: "/demo.png",
    founder: founderPortrait,
  },
  socials: [] as { label: string; href: string }[],
  email: undefined as string | undefined,
};

export type Service = {
  id: string;
  title: string;
  description: string;
  pricing: string[];
  icon: string;
  image: string;
};

export const automationServices: Service[] = [
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    description:
      "Answer inquiries, book appointments, and send your team the details.",
    pricing: ["$199 setup + $99/month"],
    icon: "phone",
    image: siteConfig.images.services,
  },
  {
    id: "custom-automation",
    title: "Custom Automation",
    description:
      "We research your business, find repetitive work, and quote a custom automation plan.",
    pricing: ["From $299 one-time", "Optional support: $49/month"],
    icon: "workflow",
    image: siteConfig.images.services,
  },
  {
    id: "customer-support",
    title: "Customer Support Chatbots",
    description:
      "Customer support chatbots for your website, WhatsApp, SMS, Instagram, and Facebook.",
    pricing: [
      "Website: $199 setup + $79/month",
      "Multi-channel: from $499 setup + $149/month",
    ],
    icon: "message",
    image: siteConfig.images.services,
  },
  {
    id: "reviews-follow-ups",
    title: "Reviews & Follow-ups",
    description:
      "Request honest reviews and send personalized service follow-ups by email at 24 hours, 7 days, or 30 days.",
    pricing: ["$99 setup + $29/month"],
    icon: "repeat",
    image: siteConfig.images.services,
  },
];

export const marketingServices: Service[] = [
  {
    id: "social-content",
    title: "Social Scripts & Content",
    description:
      "On-brand scripts and social posts that turn your HVAC expertise into useful content.",
    pricing: ["$199/month"],
    icon: "pen",
    image: siteConfig.images.services,
  },
  {
    id: "local-seo",
    title: "Local SEO",
    description:
      "AI-assisted local SEO to help nearby homeowners discover your business.",
    pricing: ["$149 setup + $299/month"],
    icon: "search",
    image: siteConfig.images.services,
  },
  {
    id: "educational-videos",
    title: "Educational Videos",
    description:
      "AI-assisted educational videos that explain maintenance, comfort, and common questions.",
    pricing: ["Not available now"],
    icon: "video",
    image: siteConfig.images.services,
  },
  {
    id: "customer-retention",
    title: "Customer Reactivation",
    description:
      "Personalized campaigns for customers already in your database, with appropriate consent.",
    pricing: ["$249 per email campaign"],
    icon: "users",
    image: siteConfig.images.services,
  },
];

export const trialPolicy = {
  days: 14,
  headline: "Try your system for 14 days. Pay only after you approve.",
  scope:
    "For automation systems. Marketing services are quoted separately. Third-party platform costs are discussed upfront.",
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  emphasized?: boolean;
  highlight?: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Tell us what takes time and where customers get stuck.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We map your workflow and agree on a clear scope and quote.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We build, connect, and test your solution with your team.",
  },
  {
    number: "04",
    title: "Trial & Approval",
    description:
      "Use the system with your team and decide if it works for you.",
    emphasized: true,
    highlight: trialPolicy.headline,
  },
  {
    number: "05",
    title: "Support",
    description: "Get help keeping things useful as your business changes.",
  },
];

export const trustedCompanies = [
  {
    id: "jadan-construction-group",
    companyName: "Jadan Construction Group",
    logo: jadanLogo,
  },
  {
    id: "nebco",
    companyName: "NEBCO",
    logo: nebcoLogo,
  },
  {
    id: "ntc-construction",
    companyName: "NTC Construction",
    logo: ntcLogo,
  },
];

export type Testimonial = {
  id: string;
  companyName: string;
  logo: string;
  quote: string;
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "client-01",
    companyName: "Company name",
    logo: siteConfig.images.services,
    quote: "Your client’s review will appear here.",
    isPlaceholder: true,
  },
  {
    id: "client-02",
    companyName: "Company name",
    logo: siteConfig.images.services,
    quote: "Your client’s review will appear here.",
    isPlaceholder: true,
  },
  {
    id: "client-03",
    companyName: "Company name",
    logo: siteConfig.images.services,
    quote: "Your client’s review will appear here.",
    isPlaceholder: true,
  },
  {
    id: "client-04",
    companyName: "Company name",
    logo: siteConfig.images.services,
    quote: "Your client’s review will appear here.",
    isPlaceholder: true,
  },
  {
    id: "client-05",
    companyName: "Company name",
    logo: siteConfig.images.services,
    quote: "Your client’s review will appear here.",
    isPlaceholder: true,
  },
];

export const faqs = [
  {
    question: "How much does it cost?",
    answer: `Starting prices are listed with each service above. We confirm the final scope and quote with you before building. For automation systems: ${trialPolicy.headline} Third-party platform costs and any extra usage or integrations are discussed upfront.`,
  },
  {
    question: "How long does implementation take?",
    answer:
      "Timing depends on the scope and your existing tools. After discovery, we agree on a timeline and the access we need before building.",
  },
  {
    question: "Can you work with the tools I already use?",
    answer:
      "We review your calendar, CRM, and messaging tools first. Available integrations depend on each platform’s access and capabilities, which we confirm in your proposal.",
  },
  {
    question: "How do you handle customer data?",
    answer:
      "We agree on data access, connected providers, retention, and consent requirements before implementation. Your project’s handling of customer information is assessed separately from this website.",
  },
  {
    question: "Is ongoing support available?",
    answer:
      "Yes. We define training, maintenance, and support options in your proposal so you know what is included and how to get help.",
  },
  {
    question: "Are you affiliated with USM?",
    answer:
      "Our team includes graduate students from the University of Southern Mississippi. ANZO AI is an independent business and is not a university-sponsored or endorsed service.",
  },
];
