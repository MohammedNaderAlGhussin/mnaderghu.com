// data/projects.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  category: "frontend" | "full-stack" | "ai-engineered";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  timeline: string;
  role: string;
  client?: string;
  stack: string;
  fullDescription: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  technicalDetails: string[];
  technicalQuote?: string;
  images: string[];
}

export const projects: Project[] = [
  // ─── FEATURED / PRIORITY ────────────────────────────────
  {
    id: "kaufra",
    title: "Kaufra",
    shortDescription:
      "A modern, production-ready full-stack e-commerce platform with admin dashboard, secure auth, and real payment integration.",
    thumbnail: "/images/projects/kaufra-thumbnail.png",
    category: "full-stack",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "https://e-commerce-kaufra.vercel.app/",
    githubUrl: "https://github.com/MohammedNaderAlGhussin/E-commerce",
    featured: true,
    date: "February 2026",
    timeline: "3 Months",
    role: "Full-Stack Developer",
    client: "Personal Project",
    stack: "Full-Stack",
    fullDescription:
      "Kaufra is a production-ready e-commerce platform built with the latest web technologies. It features a complete shopping experience from product browsing and filtering to secure checkout with real payment gateways. The platform includes role-based authentication, an admin dashboard with analytics, order management, image uploads, and email notifications — all built on a scalable Next.js App Router architecture with server components and server actions.",
    keyFeatures: [
      {
        title: "FULL SHOPPING EXPERIENCE",
        description:
          "Complete product browsing, filtering, dynamic product pages, cart management, and a full checkout flow with PayPal and Stripe integration.",
      },
      {
        title: "SECURE AUTHENTICATION",
        description:
          "NextAuth with credentials, JWT sessions stored in cookies, and role-based authorization separating Admin and User access levels.",
      },
      {
        title: "ADMIN DASHBOARD",
        description:
          "Full-featured admin panel with revenue metrics, charts via Recharts, order tracking, product CRUD with media uploads, and user management.",
      },
      {
        title: "MODERN BACKEND ARCHITECTURE",
        description:
          "Built entirely on Next.js server actions and server components, with PostgreSQL via Prisma ORM including migrations, seeding, and clean schema design.",
      },
      {
        title: "MEDIA & NOTIFICATIONS",
        description:
          "Image and file uploads handled via UploadThing. Transactional email notifications powered by Resend and React Email.",
      },
    ],
    technicalDetails: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "PayPal",
      "UploadThing",
      "Resend",
      "Zod",
      "Recharts",
    ],
    technicalQuote:
      "The biggest challenge was managing secure role-based access across server components and server actions simultaneously, while keeping the architecture clean and the performance sharp.",
    images: ["/images/projects/kaufra-hero.png"],
  },

  {
    id: "quran-tracker",
    title: "QuranTracker",
    shortDescription:
      "A full-stack spiritual platform helping users track their Quran reading progress, maintain streaks, and share reflections within a supportive community.",
    thumbnail: "/images/projects/quran-tracker-thumbnail.png",
    category: "ai-engineered",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://quran-tracker-liard.vercel.app/",
    githubUrl: "",
    featured: true,
    date: "March 2026",
    timeline: "2 Months",
    role: "Project Manager & Full-Stack Engineer",
    client: "Private Client",
    stack: "Full-Stack",
    fullDescription:
      "QuranTracker is a production-grade full-stack spiritual platform built for a real-world client. I set up the entire environment, defined the technology stack, and acted as Project Manager — leveraging AI to deliver a high-quality product with continuous enhancements and self-debugging cycles. The platform helps users track their Quran reading progress across Surahs and Juz, maintain daily streaks, visualize reading patterns, and connect with a community through a distraction-free, elegantly designed interface.",
    keyFeatures: [
      {
        title: "SPIRITUAL PROGRESS TRACKING",
        description:
          "Elevated progress visualization for both Surahs and Juz, daily reading streak monitoring with visual history, and deep statistics on reading velocity and consistency patterns.",
      },
      {
        title: "MULTILINGUAL SUPPORT",
        description:
          "Full internationalization across English, Arabic, and Turkish. Arabic triggers a complete RTL layout flip — mirroring navigation, cards, and text alignment — ensuring a native reading experience for Arabic-speaking users.",
      },
      {
        title: "KEEP IN PRAYERS",
        description:
          "A unique alternative to social media likes — a silent spiritual signal that privately notifies the author someone is praying for them, with no public counts. Genuine community support over vanity metrics.",
      },
      {
        title: "COMMUNITY REFLECTIONS",
        description:
          "A dedicated space for users to post spiritual insights and reflections in a bespoke, distraction-free UI designed for contemplation and meaningful connection.",
      },
      {
        title: "ADMIN PANEL",
        description:
          "Full admin dashboard tracking total users, pages read, streaks, and per-user progress history. Includes a complete audit log and user management tools.",
      },
      {
        title: "PROFILE & ACCOUNT MANAGEMENT",
        description:
          "Full profile customization including avatar upload, name and password changes, and a secure account deletion option — all protected via Supabase Auth and RLS policies.",
      },
    ],
    technicalDetails: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "i18next",
      "Framer Motion",
      "RTL Support",
    ],
    technicalQuote:
      "The 'Keep in Prayers' feature challenged me to rethink social interaction from first principles — stripping away vanity metrics and replacing them with something genuinely meaningful to the user.",
    images: ["/images/projects/quran-tracker-hero.png"],
  },

  // ─── REMAINING PROJECTS ─────────────────────────────────
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    shortDescription:
      "A fully responsive full-scale social media web app built from scratch with React, TypeScript, and Redux Toolkit — focused on clean architecture and real-world practices.",
    thumbnail: "/images/projects/social-media-thumbnail.png",
    category: "frontend",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://react-social-media-peach.vercel.app/",
    githubUrl: "https://github.com/MohammedNaderAlGhussin/SocialMedia",
    featured: true,
    date: "December 2025",
    timeline: "3 Months",
    role: "Front-End Developer",
    client: "Personal Project",
    stack: "Front-End",
    fullDescription:
      "A fully responsive social media platform built from scratch using the Tarmeez Academy public learning API. The focus was never just making it work — it was making it clean, readable, and scalable. The app is fully typed with strict TypeScript, features a well-structured Redux architecture with slices and thunks, and a centralized Axios API layer with interceptors. Every feature from authentication to post management was designed with real-world production standards in mind.",
    keyFeatures: [
      {
        title: "AUTHENTICATION & AUTHORIZATION",
        description:
          "Secure login and registration flow with protected routes — no localStorage hacks, fully API-driven session handling.",
      },
      {
        title: "POST MANAGEMENT",
        description:
          "Full create, edit, and delete functionality for posts with image upload support and dynamic rendering.",
      },
      {
        title: "DYNAMIC USER PROFILES",
        description:
          "User profiles fetched entirely from the API, with comments system, modal UI, and paginated feeds.",
      },
      {
        title: "CLEAN ARCHITECTURE",
        description:
          "Future-proof folder structure, strictly typed codebase with no 'any', well-organized Redux slices and thunks, and a centralized Axios layer with interceptors.",
      },
      {
        title: "POLISHED UX",
        description:
          "Framer Motion micro-animations, toast feedback for all user actions, loading states, and full responsiveness across all screen sizes.",
      },
    ],
    technicalDetails: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "Framer Motion",
    ],
    technicalQuote:
      "The most important part wasn't just making it work — it was making it clean, readable, and scalable. Strict TypeScript and a well-structured Redux architecture were non-negotiable from day one.",
    images: ["/images/projects/social-media-hero.png"],
  },

  {
    id: "marketing-dashboard",
    title: "Marketing Dashboard",
    shortDescription:
      "A comprehensive marketing analytics dashboard with real-time campaign insights, demographic analysis, regional data, and weekly performance trends.",
    thumbnail: "/images/projects/marketing-dashboard-thumbnail.png",
    category: "frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://marketing-dashboard-tenz.vercel.app/",
    githubUrl: "https://github.com/MohammedNaderAlGhussin/MarketingDashboard",
    featured: false,
    date: "October 2025",
    timeline: "1 Month",
    role: "Front-End Developer",
    client: "Amana Bootcamp",
    stack: "Front-End",
    fullDescription:
      "A comprehensive marketing analytics dashboard built with Next.js 15 and TypeScript, providing real-time insights into campaign performance, audience demographics, regional data, and weekly trends. The dashboard integrates with an external API from Amana Bootcamp and delivers a clean, data-rich interface for tracking KPIs including total campaigns, revenue, ROAS, and conversion rates — all in one unified view.",
    keyFeatures: [
      {
        title: "DASHBOARD OVERVIEW",
        description:
          "Real-time marketing metrics and KPIs including total campaigns, revenue, ROAS, conversion tracking, and peak performance analytics.",
      },
      {
        title: "CAMPAIGN ANALYTICS",
        description:
          "Detailed campaign performance tracking with advanced filtering by name and type, interactive revenue and ROAS charts, and performance breakdown by medium — Instagram, Facebook, and Google Ads.",
      },
      {
        title: "DEMOGRAPHIC INSIGHTS",
        description:
          "Audience analysis covering age groups, gender performance, device tracking, and target audience insights for data-driven decision making.",
      },
      {
        title: "WEEKLY PERFORMANCE",
        description:
          "Week-over-week performance tracking with time-based analytics, historical trends, and visual breakdowns of key metrics over time.",
      },
      {
        title: "REGIONAL ANALYTICS",
        description:
          "Geographic performance breakdown with country and region-specific metrics, regional ROAS tracking, and conversion data by location.",
      },
    ],
    technicalDetails: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "App Router",
      "External API Integration",
    ],
    technicalQuote:
      "The challenge was transforming complex, multi-dimensional marketing data into a clean and intuitive interface — making every metric immediately readable without overwhelming the user.",
    images: ["/images/projects/marketing-dashboard-hero.png"],
  },

  {
    id: "sprachly",
    title: "Sprachly",
    shortDescription:
      "A modern real-time chat application with instant messaging, live presence tracking, private DMs, and secure channel management.",
    thumbnail: "/images/projects/sprachly-thumbnail.png",
    category: "ai-engineered",
    tags: ["React", "TypeScript", "Supabase", "Ably", "shadcn/ui"],
    liveUrl: "https://sprachly-app.vercel.app/",
    githubUrl: "https://github.com/MohammedNaderAlGhussin/sprachly-app",
    featured: false,
    date: "February 2026",
    timeline: "1 Month",
    role: "Product Engineer",
    client: "Personal Project",
    stack: "Full-Stack",
    fullDescription:
      "Sprachly is a modern real-time communication platform built using a vibe-coding workflow. Rather than manual line-by-line coding, I acted as Product Engineer — focusing on system architecture, security logic, and orchestration of professional-grade external services. I directed AI agents for rapid prototyping while personally solving complex integration challenges, governing the technical stack, and ensuring production-level security through Supabase Row-Level Security policies.",
    keyFeatures: [
      {
        title: "REAL-TIME MESSAGING ENGINE",
        description:
          "Sub-millisecond message delivery and synchronization powered by Ably WebSockets, with live typing indicators and instant channel updates.",
      },
      {
        title: "LIVE PRESENCE SYSTEM",
        description:
          "Global state tracking for online, offline, and away user statuses — users always know who's available in real time.",
      },
      {
        title: "CHANNEL & DM MANAGEMENT",
        description:
          "Create and join public channels or start private Direct Message conversations with secure message isolation enforced at the database level.",
      },
      {
        title: "SECURE AUTHENTICATION",
        description:
          "User login, signup, and profile management via Supabase Auth, with Row-Level Security policies ensuring strict data privacy between users.",
      },
      {
        title: "PROFILE & AVATAR UPLOADS",
        description:
          "Users can customize their profiles and upload avatars, with a premium responsive UI built with Tailwind CSS and shadcn/ui atomic components.",
      },
    ],
    technicalDetails: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Ably",
      "PostgreSQL",
      "Row-Level Security",
      "Vercel",
      "GitHub CI/CD",
    ],
    technicalQuote:
      "The real challenge wasn't the real-time messaging — it was enforcing airtight Row-Level Security policies in Supabase to guarantee that private messages could never leak between users, even at the database query level.",
    images: ["/images/projects/sprachly-hero.png"],
  },
];
