"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { personalInfo } from "@/app/lib/data";

const contactLinks = [
  { icon: "📞", label: "Phone", value: "+91 8504988936", href: "tel:+918504988936" },
  { icon: "✉", label: "Email", value: "studyera.gq@gmail.com", href: "mailto:studyera.gq@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "LinkedIn — Mohit Yadav", href: personalInfo.linkedin },
] as const;

export default function Contact() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="contact" className="cv-auto">
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
            Contact
          </motion.h2>
          <div className="divider" />
        </div>

        {/* Two columns */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="font-head text-[34px] font-extrabold mb-4"
              style={{ letterSpacing: "-1px", color: "var(--text)" }}
            >
              Let's build something great together.
            </h3>
            <p className="text-[15px] mb-8" style={{ color: "var(--text2)" }}>
              Open to exciting frontend opportunities, freelance projects, and consulting.
              Whether you need a React specialist, a microfrontend architect, or just want to talk shop — reach out!
            </p>
          </motion.div>

          {/* Right — Quick message form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card-base p-8"
          >
            <p
              className="text-[13px] mb-5"
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                color: "var(--text3)",
              }}
            >
              // quick message
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-[10px] text-[14px] border outline-none transition-colors duration-200"
                style={{
                  background: "var(--bg3)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-[10px] text-[14px] border outline-none transition-colors duration-200"
                style={{
                  background: "var(--bg3)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full px-4 py-3 rounded-[10px] text-[14px] border outline-none transition-colors duration-200 resize-y"
                style={{
                  background: "var(--bg3)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              />
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full flex items-center justify-center gap-2 px-7 py-[14px] rounded-full text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-[2px] mt-1"
                style={{ background: "var(--accent)" }}
              >
                Send Message →
              </a>
            </div>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
}
