"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { clients } from "@/app/lib/data";

function AutomotiveBackdrop() {
  return (
    <svg
      viewBox="0 0 980 420"
      fill="none"
      className="absolute right-[-180px] bottom-[-32px] w-[860px] max-w-none opacity-[0.28] pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="clientsCarGlow" x1="274" y1="84" x2="770" y2="346">
          <stop offset="0%" stopColor="var(--accent-soft)" />
          <stop offset="100%" stopColor="var(--bg)" />
        </linearGradient>
        <linearGradient id="clientsCarStroke" x1="180" y1="260" x2="800" y2="260">
          <stop offset="0%" stopColor="var(--border2)" />
          <stop offset="40%" stopColor="var(--accent2)" />
          <stop offset="100%" stopColor="var(--border)" />
        </linearGradient>
        <radialGradient
          id="clientsWheelGlow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(338 310) rotate(90) scale(48)"
        >
          <stop offset="0%" stopColor="var(--accent-glow)" />
          <stop offset="100%" stopColor="var(--bg)" />
        </radialGradient>
      </defs>

      <ellipse cx="338" cy="310" rx="48" ry="48" fill="url(#clientsWheelGlow)" />
      <ellipse cx="674" cy="310" rx="48" ry="48" fill="url(#clientsWheelGlow)" />

      <path
        d="M152 288H238L284 210C320 150 394 114 506 108H648C734 108 794 126 834 168L878 214H930C946 214 958 226 958 242V272H898C890 222 852 190 796 190C740 190 700 222 690 272H318C310 222 270 190 214 190C158 190 118 222 108 272H72V252C72 232 88 216 108 214L132 212L152 288Z"
        fill="url(#clientsCarGlow)"
      />
      <path
        d="M138 282H246L294 210C330 158 396 128 502 122H650C726 122 782 138 820 174L868 220H928"
        stroke="url(#clientsCarStroke)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M294 210H742"
        stroke="var(--border)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M350 174C396 148 456 136 530 136H626C660 136 686 144 704 160"
        stroke="var(--border)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M746 154L786 188"
        stroke="var(--border2)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="214" cy="282" r="54" stroke="var(--border2)" strokeWidth="6" />
      <circle cx="796" cy="282" r="54" stroke="var(--border2)" strokeWidth="6" />
      <circle cx="214" cy="282" r="22" fill="var(--accent-soft)" />
      <circle cx="796" cy="282" r="22" fill="var(--accent-soft)" />

      <path
        d="M118 298H904"
        stroke="var(--border)"
        strokeWidth="2"
        strokeDasharray="10 14"
      />
    </svg>
  );
}

export default function Clients() {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const marketCount = new Set(clients.map((client) => client.market)).size;

  return (
    <section
      id="clients"
      className="cv-auto relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top right, var(--accent-glow) 0%, transparent 30%), var(--bg)",
      }}
    >
      <div className="section-wrap relative">
        <div ref={headerRef} className="section-header">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-num"
          >
            02
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Clients
          </motion.h2>
          <div className="divider" />
        </div>

        <div
          ref={contentRef}
          className="relative overflow-hidden rounded-[30px] border px-6 py-8 md:px-8 md:py-10"
          style={{
            background:
              "linear-gradient(180deg, var(--card), color-mix(in srgb, var(--card) 84%, var(--accent-soft) 16%))",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, var(--accent-soft) 58%, var(--accent-glow) 100%)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent-glow), transparent)",
            }}
          />
          <AutomotiveBackdrop />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] mx-auto text-center"
            >
              <p
                className="text-[12px] uppercase tracking-[1.5px] mb-3"
                style={{
                  color: "var(--accent2)",
                  fontFamily: "var(--font-dm-mono, monospace)",
                }}
              >
                // selected client footprint
              </p>
              <h3
                className="font-head text-[30px] md:text-[34px] font-extrabold leading-[1.02] mb-4"
                style={{ letterSpacing: "-1px", color: "var(--text)" }}
              >
                Brands I have worked with across live automotive platforms.
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ color: "var(--text2)" }}>
                Public-facing brand sites I have supported across enterprise
                frontend programs, spanning global `.com` properties and Italian
                market experiences.
              </p>

              <div className="flex gap-3 flex-wrap mt-6 justify-center">
                <StatPill value={clients.length} label="brands" />
                <StatPill value={marketCount} label="markets" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-12 max-w-[980px] mx-auto"
            >
              <div className="client-marquee-mask">
                <div className="client-marquee-track">
                  <div className="client-marquee-group">
                    {clients.map((client) => (
                      <ClientCard key={client.id} client={client} />
                    ))}
                  </div>

                  <div className="client-marquee-group" aria-hidden="true">
                    {clients.map((client) => (
                      <ClientCard key={`${client.id}-duplicate`} client={client} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPill({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="px-4 py-3 rounded-[14px] border"
      style={{
        background: "color-mix(in srgb, var(--card) 86%, var(--accent-soft) 14%)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="font-head text-[28px] font-extrabold leading-none"
        style={{ color: "var(--text)" }}
      >
        {value}
      </div>
      <div className="text-[12px]" style={{ color: "var(--text3)" }}>
        {label}
      </div>
    </div>
  );
}

function ClientCard({ client }: { client: (typeof clients)[number] }) {
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <a
      href={`https://${client.site}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-[240px] sm:w-[260px] min-h-[188px] rounded-[24px] border px-5 py-5 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-[4px]"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in srgb, var(--card) 74%, var(--accent-soft) 26%), var(--card))",
        borderColor: "var(--border)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />

      <div
        className="text-[10px] uppercase tracking-[1.4px]"
        style={{
          color: "var(--text3)",
          fontFamily: "var(--font-dm-mono, monospace)",
        }}
      >
        {client.market}
      </div>

      <div className="flex-1 flex items-center justify-center py-4">
        {!hasLogoError ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="max-w-[168px] max-h-[72px] w-auto h-auto object-contain"
            loading="lazy"
            onError={() => setHasLogoError(true)}
          />
        ) : (
          <BrandLogo id={client.id} />
        )}
      </div>

      <div className="flex items-center justify-between gap-3 pt-2">
        <span
          className="text-[11px]"
          style={{
            color: "var(--text2)",
            fontFamily: "var(--font-dm-mono, monospace)",
          }}
        >
          {client.site}
        </span>
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border text-[12px]"
          style={{
            color: "var(--accent2)",
            borderColor: "var(--accent-glow)",
            background: "var(--accent-soft)",
          }}
          aria-hidden="true"
        >
          -&gt;
        </span>
      </div>
    </a>
  );
}

function BrandLogo({ id }: { id: (typeof clients)[number]["id"] }) {
  switch (id) {
    case "jeep":
      return (
        <svg viewBox="0 0 220 82" className="w-[168px] h-auto" fill="none" aria-hidden="true">
          <text
            x="110"
            y="34"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="34"
            fontWeight="800"
            letterSpacing="3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            JEEP
          </text>
          {Array.from({ length: 7 }).map((_, index) => (
            <rect
              key={index}
              x={52 + index * 16}
              y="48"
              width="8"
              height="18"
              rx="4"
              fill="var(--accent2)"
              opacity={0.45 + index * 0.05}
            />
          ))}
        </svg>
      );

    case "ram":
      return (
        <svg viewBox="0 0 220 82" className="w-[170px] h-auto" fill="none" aria-hidden="true">
          <path
            d="M110 6L132 28L110 50L88 28L110 6Z"
            stroke="var(--accent2)"
            strokeWidth="3"
          />
          <text
            x="110"
            y="70"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="32"
            fontWeight="800"
            letterSpacing="4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            RAM
          </text>
        </svg>
      );

    case "chrysler":
      return (
        <svg viewBox="0 0 220 82" className="w-[176px] h-auto" fill="none" aria-hidden="true">
          <path d="M20 42H82" stroke="var(--accent2)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M138 42H200" stroke="var(--accent2)" strokeWidth="2.5" strokeLinecap="round" />
          <rect
            x="82"
            y="28"
            width="56"
            height="28"
            rx="14"
            fill="rgba(255,255,255,0.04)"
            stroke="var(--border2)"
          />
          <text
            x="110"
            y="47"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="12"
            fontWeight="700"
            letterSpacing="2"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            CHRYSLER
          </text>
        </svg>
      );

    case "abarth":
      return (
        <svg viewBox="0 0 220 82" className="w-[144px] h-auto" fill="none" aria-hidden="true">
          <path
            d="M110 8L138 18V42C138 56 126 66 110 74C94 66 82 56 82 42V18L110 8Z"
            fill="rgba(255,255,255,0.04)"
            stroke="var(--accent2)"
            strokeWidth="2.5"
          />
          <path d="M110 18V60" stroke="var(--accent2)" strokeWidth="2" />
          <path d="M94 30H126" stroke="var(--accent2)" strokeWidth="2" />
          <text
            x="110"
            y="32"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="11"
            fontWeight="700"
            letterSpacing="1.5"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            ABARTH
          </text>
        </svg>
      );

    case "alfaromeo":
      return (
        <svg viewBox="0 0 220 82" className="w-[162px] h-auto" fill="none" aria-hidden="true">
          <circle cx="110" cy="41" r="27" stroke="var(--accent2)" strokeWidth="3" />
          <circle cx="110" cy="41" r="18" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
          <text
            x="110"
            y="46"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="12"
            fontWeight="800"
            letterSpacing="2"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            A R
          </text>
        </svg>
      );

    case "lancia":
      return (
        <svg viewBox="0 0 220 82" className="w-[168px] h-auto" fill="none" aria-hidden="true">
          <path
            d="M110 8L146 22V50L110 74L74 50V22L110 8Z"
            fill="rgba(255,255,255,0.04)"
            stroke="var(--accent2)"
            strokeWidth="2.5"
          />
          <text
            x="110"
            y="46"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="18"
            fontWeight="800"
            letterSpacing="2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            LANCIA
          </text>
        </svg>
      );

    case "fiat":
      return (
        <svg viewBox="0 0 220 82" className="w-[150px] h-auto" fill="none" aria-hidden="true">
          <rect
            x="58"
            y="14"
            width="104"
            height="54"
            rx="27"
            fill="rgba(255,255,255,0.04)"
            stroke="var(--accent2)"
            strokeWidth="2.5"
          />
          <text
            x="110"
            y="48"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="24"
            fontWeight="800"
            letterSpacing="3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            FIAT
          </text>
        </svg>
      );
  }

  return null;
}
