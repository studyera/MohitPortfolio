"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { skillGroups } from "@/app/lib/data";

export default function Skills() {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="skills" className="cv-auto">
      <div className="section-wrap">
        {/* Header */}
        <div ref={headerRef} className="section-header">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-num"
          >
            03
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Skills
          </motion.h2>
          <div className="divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="card-base p-6 hover:border-[var(--border2)]"
    >
      <div
        className="text-[11px] font-bold uppercase tracking-[1px] mb-4"
        style={{
          fontFamily: "var(--font-dm-mono, monospace)",
          color: "var(--accent2)",
        }}
      >
        {group.title}
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.07 + si * 0.03, duration: 0.3 }}
            className="text-[13px] px-[14px] py-[6px] rounded-[8px] border font-medium cursor-default transition-all duration-200"
            style={{
              background: "var(--bg3)",
              color: "var(--text2)",
              borderColor: "var(--border)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text2)";
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
