"use client";

/**
 * BulbToggle.tsx — Client Component
 *
 * The interactive light-bulb theme switcher.
 * Marked 'use client' because it uses:
 * - useState (animation state)
 * - useTheme (localStorage + DOM manipulation)
 * - Framer Motion (animation)
 *
 * This is in a separate chunk from the server-rendered page,
 * so it doesn't block the initial render.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/hooks/useTheme";

export default function BulbToggle() {
  const { toggle, isLight, mounted } = useTheme();
  const [isPulling, setIsPulling] = useState(false);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  function handlePull() {
    if (isPulling) return;
    setIsPulling(true);
    // Delay theme change to middle of pull animation
    setTimeout(() => {
      toggle();
    }, 200);
    setTimeout(() => {
      setIsPulling(false);
    }, 500);
  }

  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] flex flex-col items-center cursor-pointer select-none"
      onClick={handlePull}
      role="button"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      aria-pressed={isLight}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handlePull()}
    >
      {/* ── Cord ── */}
      <motion.div
        className="w-[2px]"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--text3))",
        }}
        animate={{ height: isPulling ? 80 : 40 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* ── Bulb SVG ── */}
      <motion.div
        className="relative w-[40px] h-[52px]"
        animate={isPulling ? { y: [0, 8, -2, 0] } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        style={
          isLight
            ? { filter: "drop-shadow(0 0 8px rgba(255,220,50,0.55))" }
            : { filter: "drop-shadow(0 0 10px rgba(124,106,247,0.35))" }
        }
      >
        <motion.div
          className="absolute left-1/2 top-[19px] w-[34px] h-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          animate={{
            opacity: isLight ? 0.75 : 0.55,
            scale: 1,
            background: isLight
              ? "radial-gradient(circle, rgba(255,220,50,0.28) 0%, rgba(255,220,50,0.08) 34%, transparent 58%)"
              : "radial-gradient(circle, rgba(124,106,247,0.28) 0%, rgba(124,106,247,0.08) 48%, transparent 74%)",
          }}
          transition={{ duration: 0.3 }}
        />

        <svg
          width="40"
          height="52"
          viewBox="0 0 40 52"
          fill="none"
          className="absolute inset-0"
        >
          {/* Glass */}
          <motion.path
            d="M20 2C10.6 2 3 9.6 3 19c0 5.8 2.9 10.9 7.3 14l1.2 6H28.5l1.2-6C34.1 29.9 37 24.8 37 19c0-9.4-7.6-17-17-17z"
            animate={{
              fill: isLight ? "#ffe97a" : "rgba(124,106,247,0.24)",
            }}
            transition={{ duration: 0.3 }}
            stroke="rgba(124,106,247,0.42)"
            strokeWidth="1.5"
          />
          {/* Filament lines */}
          <path
            d="M13.5 39h13M14.5 43h11M16 47h8"
            stroke="rgba(124,106,247,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Inner glow core */}
          <motion.circle
            cx="20"
            cy="19"
            r="8"
            animate={{
              fill: isLight
                ? "rgba(255,220,50,0.24)"
                : "rgba(124,106,247,0.26)",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="20"
            cy="19"
            r="5"
            animate={{
              fill: isLight
                ? "rgba(255,200,0,0.6)"
                : "rgba(168,157,245,0.72)",
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Top nub */}
          <line
            x1="20" y1="2" x2="20" y2="0"
            stroke="rgba(124,106,247,0.3)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ── Hint label ── */}
      <span
        className="text-[10px] mt-1 opacity-60 tracking-wide"
        style={{ color: "var(--text3)", fontFamily: "var(--font-dm-mono, monospace)" }}
      >
        pull
      </span>

      {/* ── Light burst effect on switch ── */}
      <AnimatePresence>
        {isLight && (
          <motion.div
            className="absolute left-1/2 top-[19px] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(255,220,50,0.12)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.35, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
