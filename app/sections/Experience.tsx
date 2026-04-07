"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { experiences } from "@/app/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="experience" className="cv-auto">
      <div className="section-wrap">
        {/* Section header */}
        <div ref={headerRef} className="section-header">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-num"
          >
            01
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Experience
          </motion.h2>
          <div className="divider" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[18px] top-0 bottom-0 w-[1px]"
            style={{ background: "var(--border2)" }}
          />

          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      custom={index}
      className="flex gap-8 mb-12 relative"
    >
      {/* Dot */}
      <div
        className="w-9 h-9 min-w-[36px] rounded-full flex items-center justify-center text-[10px] font-bold mt-1 z-10"
        style={{
          background: "var(--bg3)",
          border: "2px solid var(--accent)",
          color: "var(--accent)",
          fontFamily: "var(--font-dm-mono, monospace)",
          letterSpacing: "-0.5px",
        }}
      >
        {exp.dot}
      </div>

      {/* Card */}
      <div
        className="card-base flex-1 p-7 transition-transform duration-300 hover:translate-x-1"
        style={{ padding: "28px 32px" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start flex-wrap gap-3 mb-1">
          <div
            className="font-head text-[20px] font-bold"
            style={{ letterSpacing: "-0.5px", color: "var(--text)" }}
          >
            {exp.role}
          </div>
          <div
            className="text-[12px] px-3 py-1 rounded-[6px]"
            style={{
              fontFamily: "var(--font-dm-mono, monospace)",
              color: "var(--text3)",
              background: "var(--bg3)",
            }}
          >
            {exp.duration}
          </div>
        </div>

        <div
          className="text-[14px] font-medium mb-4"
          style={{ color: "var(--accent2)" }}
        >
          {exp.company} · {exp.location}
        </div>

        {/* Bullets */}
        <ul className="mb-5 space-y-1">
          {exp.bullets.map((bullet, bi) => (
            <li
              key={bi}
              className="text-[14px] leading-[1.8] pl-5 relative"
              style={{ color: "var(--text2)" }}
            >
              <span
                className="absolute left-0 top-[6px] text-[12px]"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
