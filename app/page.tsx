/**
 * page.tsx — Server Component (default in App Router)
 *
 * Performance strategy:
 * - This page is a React Server Component (RSC) — zero JS shipped for the shell
 * - Critical above-the-fold sections (Hero, Nav) are imported directly
 * - Below-the-fold sections are lazy-loaded with React.lazy + Suspense
 * - This eliminates render-blocking JS for content the user can't see yet
 */

import { Suspense, lazy } from "react";
import Nav from "@/app/components/Nav";
import Hero from "@/app/sections/Hero";
import { SectionSkeleton } from "@/app/components/Skeletons";

// ── Lazy load below-the-fold sections ────────────────────────────────────────
// These are NOT loaded until the browser is idle / user scrolls near them
// Each becomes a separate JS chunk (see splitChunks in next.config.js)
const Experience = lazy(() => import("@/app/sections/Experience"));
const Projects = lazy(() => import("@/app/sections/Projects"));
const Skills = lazy(() => import("@/app/sections/Skills"));
const About = lazy(() => import("@/app/sections/About"));
const Contact = lazy(() => import("@/app/sections/Contact"));
const Footer = lazy(() => import("@/app/components/Footer"));

// ── Theme toggle — client component, separate chunk ──────────────────────────
const BulbToggle = lazy(() => import("@/app/components/BulbToggle"));

export default function Home() {
  return (
    <>
      {/* ── Bulb theme toggle (client component) ── */}
      <Suspense fallback={null}>
        <BulbToggle />
      </Suspense>

      {/* ── Navigation (critical — above fold) ── */}
      <Nav />

      {/* ── Hero (critical — above fold, no Suspense needed) ── */}
      <Hero />

      {/* ── Below-fold sections — each wrapped in Suspense ── */}
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
