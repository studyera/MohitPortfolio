"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { personalInfo, education } from "@/app/lib/data";

const highlights = [
  { icon: "🎓", name: `${education.degree}`, sub: `${education.university} · ${education.year} · ${education.percentage}` },
  { icon: "🏢", name: "Frontend Engineer L2 · Publicis Sapient", sub: "May 2024 — Present · Gurugram, HR" },
  { icon: "📈", name: "Frontend Engineer L1 · Publicis Sapient", sub: "June 2022 — May 2024 · Gurugram, HR" },
  { icon: "♿", name: "WCAG A → AA Accessibility Upgrade", sub: "Multi-brand enterprise client platforms" },
  { icon: "⚡", name: "Playwright E2E — 6× Testing Speed Gain", sub: "1 day → 3 hours regression cycle" },
] as const;

export default function About() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" className="cv-auto" style={{ background: "var(--bg2)" }}>
      <div className="section-wrap">
        {/* Header */}
        <div ref={headerRef} className="section-header">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-num"
          >
            05
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            About
          </motion.h2>
          <div className="divider" />
        </div>

        {/* Two-column layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="font-head text-[28px] font-extrabold mb-4"
              style={{ letterSpacing: "-0.8px", color: "var(--text)" }}
            >
              Frontend Engineer who ships at scale.
            </h3>
            {personalInfo.bio.map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.9] mb-4"
                style={{ color: "var(--text2)" }}
              >
                {para}
              </p>
            ))}
            <div className="flex gap-4 flex-wrap mt-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-[2px]"
                style={{ background: "var(--accent)" }}
              >
                LinkedIn →
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[14px] font-medium border transition-all duration-200"
                style={{ color: "var(--text)", borderColor: "var(--border2)" }}
              >
                Email Me
              </a>
            </div>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="flex items-center gap-4 rounded-[12px] p-4 mb-3 border transition-all duration-200"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <span className="text-[22px]">{item.icon}</span>
                <div>
                  <div className="text-[14px] font-medium" style={{ color: "var(--text)" }}>
                    {item.name}
                  </div>
                  <div className="text-[12px] mt-[2px]" style={{ color: "var(--text3)" }}>
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
