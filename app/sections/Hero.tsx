"use client";

/**
 * Hero.tsx
 *
 * Above-the-fold section. The copy stays left-aligned, while
 * large screens get a custom developer illustration on the right
 * to fill the visual space with something more intentional.
 */

import { motion } from "framer-motion";
import { stats } from "@/app/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function DeveloperFigure() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[500px]"
      aria-hidden="true"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-[8%] rounded-[56px] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, var(--accent-glow) 0%, transparent 68%)",
        }}
      />

      <svg viewBox="0 0 560 560" fill="none" className="relative w-full h-auto">
        <defs>
          <linearGradient id="heroOrbit" x1="86" y1="94" x2="448" y2="472">
            <stop offset="0%" stopColor="var(--border2)" />
            <stop offset="100%" stopColor="var(--border)" />
          </linearGradient>
          <radialGradient
            id="heroBloomPrimary"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(430 126) rotate(90) scale(134)"
          >
            <stop offset="0%" stopColor="rgba(124,106,247,0.28)" />
            <stop offset="100%" stopColor="rgba(124,106,247,0)" />
          </radialGradient>
          <radialGradient
            id="heroBloomSecondary"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(146 420) rotate(90) scale(110)"
          >
            <stop offset="0%" stopColor="rgba(61,214,140,0.16)" />
            <stop offset="100%" stopColor="rgba(61,214,140,0)" />
          </radialGradient>
          <linearGradient id="heroPanel" x1="134" y1="84" x2="432" y2="494">
            <stop offset="0%" stopColor="var(--card)" />
            <stop offset="100%" stopColor="var(--bg2)" />
          </linearGradient>
          <linearGradient id="heroScreen" x1="168" y1="132" x2="398" y2="292">
            <stop offset="0%" stopColor="rgba(168,157,245,0.18)" />
            <stop offset="100%" stopColor="rgba(124,106,247,0.04)" />
          </linearGradient>
          <linearGradient id="heroSkin" x1="250" y1="318" x2="322" y2="386">
            <stop offset="0%" stopColor="#f1d4c2" />
            <stop offset="100%" stopColor="#c18d78" />
          </linearGradient>
          <linearGradient id="heroHair" x1="254" y1="308" x2="326" y2="356">
            <stop offset="0%" stopColor="#111118" />
            <stop offset="100%" stopColor="#2b2238" />
          </linearGradient>
          <linearGradient id="heroHoodie" x1="210" y1="386" x2="370" y2="486">
            <stop offset="0%" stopColor="var(--bg2)" />
            <stop offset="100%" stopColor="var(--accent-soft)" />
          </linearGradient>
          <linearGradient id="heroChair" x1="322" y1="286" x2="388" y2="464">
            <stop offset="0%" stopColor="var(--border2)" />
            <stop offset="100%" stopColor="var(--border)" />
          </linearGradient>
          <linearGradient id="heroDevice" x1="190" y1="396" x2="380" y2="510">
            <stop offset="0%" stopColor="var(--bg2)" />
            <stop offset="100%" stopColor="var(--bg3)" />
          </linearGradient>
          <linearGradient id="heroChip" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--card)" />
            <stop offset="100%" stopColor="var(--bg2)" />
          </linearGradient>
          <linearGradient id="heroCode" x1="190" y1="162" x2="348" y2="162">
            <stop offset="0%" stopColor="var(--accent2)" />
            <stop offset="100%" stopColor="var(--border2)" />
          </linearGradient>
        </defs>

        <circle cx="430" cy="126" r="134" fill="url(#heroBloomPrimary)" />
        <circle cx="146" cy="420" r="110" fill="url(#heroBloomSecondary)" />
        <circle
          cx="284"
          cy="278"
          r="218"
          stroke="url(#heroOrbit)"
          strokeWidth="1.2"
          strokeDasharray="8 16"
        />
        <circle
          cx="284"
          cy="278"
          r="170"
          stroke="var(--border)"
          strokeWidth="1"
          opacity="0.75"
        />
        <path
          d="M436 116L484 164L436 212L388 164L436 116Z"
          fill="var(--card)"
          stroke="var(--border)"
        />
        <path
          d="M118 178C146 130 200 102 274 102C348 102 402 134 426 190"
          stroke="var(--border2)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <rect
          x="128"
          y="86"
          width="314"
          height="394"
          rx="40"
          fill="url(#heroPanel)"
          stroke="var(--border2)"
        />
        <rect x="156" y="110" width="92" height="10" rx="5" fill="var(--border2)" />
        <rect x="260" y="110" width="54" height="10" rx="5" fill="var(--border)" />

        <circle cx="160" cy="152" r="5" fill="var(--accent)" />
        <circle cx="178" cy="152" r="5" fill="var(--accent2)" />
        <circle cx="196" cy="152" r="5" fill="var(--green)" />

        <rect
          x="166"
          y="138"
          width="238"
          height="154"
          rx="24"
          fill="url(#heroScreen)"
          stroke="var(--border)"
        />
        <rect x="190" y="172" width="110" height="10" rx="5" fill="url(#heroCode)" />
        <rect x="310" y="172" width="56" height="10" rx="5" fill="var(--border2)" />
        <rect x="190" y="198" width="160" height="8" rx="4" fill="var(--border2)" />
        <rect x="190" y="220" width="120" height="8" rx="4" fill="var(--border)" />
        <rect x="190" y="242" width="148" height="8" rx="4" fill="var(--border)" />
        <path
          d="M324 236L346 214L364 232L386 202"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="258" y="298" width="54" height="18" rx="9" fill="var(--bg3)" />
        <path
          d="M230 326H340L354 344H216L230 326Z"
          fill="var(--bg2)"
          stroke="var(--border)"
        />

        <g transform="translate(72 166)">
          <rect width="122" height="48" rx="18" fill="url(#heroChip)" stroke="var(--border)" />
          <circle cx="22" cy="24" r="5" fill="var(--accent)" />
          <text
            x="72"
            y="30"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="15"
            fontFamily="var(--font-dm-mono, monospace)"
          >
            Frontend
          </text>
        </g>

        <g transform="translate(388 184) rotate(7)">
          <rect width="112" height="50" rx="18" fill="url(#heroChip)" stroke="var(--border)" />
          <circle cx="22" cy="25" r="5" fill="var(--green)" />
          <text
            x="68"
            y="31"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="14"
            fontFamily="var(--font-dm-mono, monospace)"
          >
            TypeScript
          </text>
        </g>

        <path
          d="M350 322C350 298 340 280 320 266V458H372V350C372 338 364 328 350 322Z"
          fill="url(#heroChair)"
          opacity="0.8"
        />
        <circle cx="286" cy="350" r="36" fill="url(#heroSkin)" />
        <circle cx="318" cy="352" r="6" fill="#d1a18b" />
        <path
          d="M252 350C252 322 270 308 296 308C318 308 332 322 332 344C323 338 314 336 304 336C284 336 270 342 252 350Z"
          fill="url(#heroHair)"
        />
        <path
          d="M274 380H298V396C290 402 282 402 274 396V380Z"
          fill="#d8ab95"
        />
        <path
          d="M220 472C228 416 252 388 286 388C320 388 344 416 352 472H220Z"
          fill="url(#heroHoodie)"
          stroke="var(--border)"
        />
        <path
          d="M248 398C258 388 270 384 286 384C302 384 314 388 324 398L312 422C304 414 295 410 286 410C277 410 268 414 260 422L248 398Z"
          fill="var(--border2)"
        />
        <path
          d="M244 420C222 428 206 442 198 462L222 468C229 449 239 437 254 430Z"
          fill="rgba(109,95,212,0.44)"
        />
        <path
          d="M328 420C350 428 366 442 374 462L350 468C343 449 333 437 318 430Z"
          fill="rgba(109,95,212,0.38)"
        />

        <rect
          x="188"
          y="406"
          width="196"
          height="106"
          rx="22"
          fill="url(#heroDevice)"
          stroke="var(--border2)"
        />
        <rect x="214" y="432" width="62" height="8" rx="4" fill="var(--border2)" />
        <rect x="214" y="452" width="92" height="8" rx="4" fill="var(--border)" />
        <rect x="214" y="472" width="54" height="8" rx="4" fill="var(--accent)" />
        <path
          d="M166 508H406L370 530H202L166 508Z"
          fill="var(--bg2)"
          stroke="var(--border)"
        />
        <circle cx="286" cy="458" r="12" fill="none" stroke="var(--accent2)" strokeWidth="2" />
        <path
          d="M281 458H291M286 453V463"
          stroke="var(--accent2)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <g transform="translate(84 430)">
          <rect width="118" height="52" rx="18" fill="url(#heroChip)" stroke="var(--border)" />
          <circle cx="22" cy="26" r="5" fill="var(--accent2)" />
          <text
            x="70"
            y="32"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="14"
            fontFamily="var(--font-dm-mono, monospace)"
          >
            A11y AA
          </text>
        </g>

        <g transform="translate(386 428)">
          <rect width="128" height="54" rx="18" fill="url(#heroChip)" stroke="var(--border)" />
          <circle cx="22" cy="27" r="5" fill="var(--green)" />
          <text
            x="76"
            y="33"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="14"
            fontFamily="var(--font-dm-mono, monospace)"
          >
            Playwright
          </text>
        </g>
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "40px" }}
    >
      <div className="max-w-[1200px] mx-auto px-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_480px] xl:grid-cols-[minmax(0,1fr)_500px]">
          <div className="max-w-[720px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 text-[12px] px-[14px] py-[6px] rounded-full border mb-6"
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                color: "var(--accent)",
                background: "var(--accent-soft)",
                borderColor: "var(--accent-glow)",
                letterSpacing: "0.5px",
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full animate-pulse"
                style={{ background: "var(--green)" }}
              />
              Open to new opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-head font-extrabold leading-none mb-6"
              style={{
                fontSize: "clamp(48px, 7vw, 88px)",
                letterSpacing: "-3px",
                color: "var(--text)",
              }}
            >
              Mohit
              <br />
              <span style={{ color: "var(--accent2)" }}>Yadav.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-[17px] leading-[1.85] mb-10 max-w-[580px]"
              style={{ color: "var(--text2)" }}
            >
              Frontend Engineer L2 at Publicis Sapient, Gurugram. I architect
              scalable microfrontend systems with Nx, build accessible React
              applications, and drive experimentation with Adobe Target -
              delivering enterprise-grade digital experiences for global clients.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-[2px]"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 0 0 rgba(124,106,247,0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(124,106,247,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(124,106,247,0)";
                }}
              >
                View Projects -&gt;
              </a>
              <a 
                href="mailto:studyera.gq@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[14px] font-medium border transition-all duration-200"
                style={{
                  color: "var(--text)",
                  borderColor: "var(--border2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.color = "var(--text)";
                }}
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex gap-10 mt-16 pt-10 flex-wrap"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {stats.map(({ num, label }) => (
                <div key={num}>
                  <div
                    className="font-head font-extrabold text-[36px] leading-none"
                    style={{ letterSpacing: "-1px", color: "var(--text)" }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-[13px] mt-[2px]"
                    style={{ color: "var(--text3)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="relative hidden lg:block lg:pl-4"
          >
            <DeveloperFigure />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
