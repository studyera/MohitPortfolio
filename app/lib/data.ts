/**
 * lib/data.ts
 * Single source of truth for all portfolio content.
 * Keeping data separate from components = easier updates,
 * and this module can be imported in RSCs with zero client JS cost.
 */

export const personalInfo = {
  name: "Mohit Yadav",
  title: "Frontend Engineer L2",
  company: "Publicis Sapient",
  location: "Gurugram, Haryana",
  email: "studyera.gq@gmail.com",
  phone: "+91 8504988936",
  linkedin: "www.linkedin.com/in/mohit-yadav-643023157",
  github: "https://github.com/mohityadav",
  bio: [
    "Frontend Engineer L2 at Publicis Sapient in Gurugram. I joined PS in early 2022 and have grown from Junior Developer to L2, building enterprise frontend systems for global clients across retail and e-commerce.",
    "My technical strengths are React-based microfrontend architecture with Nx, WCAG accessibility (A → AA), and E2E test automation with Playwright. I've worked on multi-brand monorepos, Adobe experimentation platforms, and multi-market mapping solutions.",
    "Outside work I build personal projects to sharpen fundamentals — Crown Clothing (React + Firebase + Stripe) and SabkaBazar (pure vanilla JS). I hold a B.Tech in Electronics & Communication from Rajasthan Technical University (2021).",
  ],
} as const;

export const experiences = [
  {
    id: "l2",
    dot: "L2",
    role: "Frontend Engineer L2",
    company: "Publicis Sapient",
    location: "Gurugram, Haryana",
    duration: "May 2024 — Present",
    bullets: [
      "Developing scalable frontend applications and reusable UI components from scratch using React.js, JavaScript (ES6+), HTML, and SCSS.",
      "Built a frontend application within an existing Nx-based microfrontend architecture, integrating with shared libraries and standards.",
      "Used React Context API for shared state management across complex component hierarchies.",
      "Set up end-to-end test automation using Playwright, reducing regression testing time from 1 day to 3 hours.",
      "Provided frontend support for Adobe Target A/B and experience testing.",
      "Used Adobe Launch for controlled deployment and triggering of frontend experiments.",
    ],
    tags: [
      "React.js","TypeScript","JavaScript ES6+","SCSS","Nx",
      "Microfrontend","React Context","Playwright","Adobe Target",
      "Adobe Launch","AEM",
    ],
  },
  {
    id: "l1",
    dot: "L1",
    role: "Frontend Engineer L1",
    company: "Publicis Sapient",
    location: "Gurugram, Haryana",
    duration: "June 2022 — May 2024",
    bullets: [
      "Developed and maintained a monorepo for managing frontend components across multiple brands.",
      "Led the migration from vanilla JavaScript to React.js, creating modular and reusable components.",
      "Improved web accessibility from WCAG A to AA, increasing usability and site engagement.",
      "Migrated map integrations from Here Maps to Google Maps and Woosmaps, building a unified solution for multiple markets.",
    ],
    tags: [
      "React.js","JavaScript","Lerna","Monorepo","WCAG AA",
      "Google Maps API","Woosmaps","Storybook","Jest","RTL",
    ],
  },
  {
    id: "junior",
    dot: "Jr",
    role: "Junior Frontend Developer",
    company: "Publicis Sapient",
    location: "Gurugram, Haryana",
    duration: "Jan 2022 — May 2022",
    bullets: [
      "Revamped the frontend of Sapient's internal Competency Framework using React.js.",
      "Built interactive flows using React Flow and modern styling techniques.",
    ],
    tags: ["React.js","React Flow","CSS3","JavaScript"],
  },
] as const;

export const projects = [
  {
    id: "crown",
    icon: "👑",
    title: "Crown Clothing",
    desc: "Full-stack e-commerce app built with React.js and Redux. Features Firebase authentication, Stripe payment integration, and a complete shopping flow. Deployed with CI/CD on Netlify.",
    tags: ["React.js","Redux","Firebase","Stripe","Netlify CI/CD"],
    liveUrl: "https://crownclothing12.netlify.app",
    githubUrl: null,
    isPrivate: false,
  },
  {
    id: "sabkabazar",
    icon: "🛒",
    title: "SabkaBazar",
    desc: "E-commerce platform built entirely with vanilla JavaScript — no frameworks. Custom-built UI components including carousels, product listings, and checkout. A demonstration of raw JS fundamentals.",
    tags: ["HTML5","CSS3","Vanilla JS","Custom Components"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: "nx-mfe",
    icon: "🏗️",
    title: "Nx Microfrontend Architecture (jeep.com)",
    desc: "Enterprise microfrontend setup using Nx workspace. Multiple independently deployable React apps sharing common libraries, design tokens, and utilities — enabling parallel team development at scale.",
    tags: ["Nx","React","TypeScript","Module Federation"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: "maps",
    icon: "🗺️",
    title: "Multi-Market Maps Migration",
    desc: "Migrated map integrations from Here Maps to Google Maps and Woosmaps across multiple international markets. Built a unified, abstracted mapping layer handling different APIs and localization needs.",
    tags: ["Google Maps API","Woosmaps","React","JavaScript"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: "adobe",
    icon: "🎭",
    title: "Adobe Target Experimentation",
    desc: "Managed frontend experimentation using Adobe Target and Adobe Launch. Enabled A/B and multivariate testing across key user journeys on a high-traffic client site for data-driven UI decisions.",
    tags: ["Adobe Target","Adobe Launch","A/B Testing","React"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: "playwright",
    icon: "⚡",
    title: "Playwright E2E Automation",
    desc: "Architected end-to-end test automation using Playwright for the QA team. Reduced regression testing cycle from 1 full day to 3 hours — a 6× improvement enabling much faster release cadence.",
    tags: ["Playwright","E2E Testing","TypeScript","CI/CD"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript ES6+","TypeScript","React.js","Redux","HTML5","CSS3 / SCSS","React Context API"],
  },
  {
    title: "Architecture",
    skills: ["Microfrontend","Nx","Lerna","Monorepo"],
  },
  {
    title: "Testing",
    skills: ["Jest","React Testing Library","Playwright (E2E)","Storybook"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git","Bitbucket","Webpack","CI/CD","Jira","Confluence"],
  },
  {
    title: "CMS & Experimentation",
    skills: ["AEM Integration","Adobe Target","Adobe Launch","A/B Testing"],
  },
  {
    title: "Standards & APIs",
    skills: ["WCAG 2.1 AA","Web Accessibility","Google Maps API","Firebase","Stripe"],
  },
] as const;

export const education = {
  degree: "B.Tech — Electronics & Communication Engineering",
  university: "Rajasthan Technical University",
  year: "2021",
  percentage: "75%",
} as const;

export const stats = [
  { num: "4+", label: "Years at PS" },
  { num: "L2", label: "Frontend Engineer" },
  { num: "Nx", label: "Microfrontend" },
  { num: "AA", label: "WCAG Accessibility" },
] as const;
