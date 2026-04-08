"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { projects } from "@/app/lib/data";

export default function Projects() {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="projects" className="cv-auto" style={{ background: "var(--bg2)" }}>
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
            Projects
          </motion.h2>
          <div className="divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="card-base flex flex-col gap-3 p-7 group relative overflow-hidden"
    >
      {/* Top accent bar — appears on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />

      {/* Hover lift */}
      <motion.div
        className="flex flex-col gap-3 flex-1"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[20px]"
          style={{
            background: "var(--accent-soft)",
            border: "1px solid var(--accent-glow)",
          }}
        >
          {project.icon}
        </div>

        {/* Title */}
        <div
          className="font-head text-[18px] font-bold"
          style={{ letterSpacing: "-0.3px", color: "var(--text)" }}
        >
          {project.title}
        </div>

        {/* Description */}
        <p
          className="text-[14px] leading-[1.75] flex-1"
          style={{ color: "var(--text2)" }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex gap-2 mt-1">
          {project.isPrivate ? (
            <span
              className="text-[11px] px-3 py-[6px] rounded-[8px]"
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                color: "var(--text3)",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
              }}
            >
              🔒 Enterprise (Private)
            </span>
          ) : (
            <>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] px-3 py-[6px] rounded-[8px] transition-all duration-200 hover:text-white"
                  style={{
                    fontFamily: "var(--font-dm-mono, monospace)",
                    color: "var(--accent2)",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-glow)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--accent)";
                    el.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--accent-soft)";
                    el.style.borderColor = "var(--accent-glow)";
                  }}
                >
                  ↗ Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] px-3 py-[6px] rounded-[8px] transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-dm-mono, monospace)",
                    color: "var(--accent2)",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-glow)",
                  }}
                >
                  ↗ GitHub
                </a>
              )}
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
