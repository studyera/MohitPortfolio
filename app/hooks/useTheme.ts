"use client";

/**
 * useTheme.ts
 *
 * Manages dark/light theme toggling.
 * - Reads user's OS preference on first load (prefers-color-scheme)
 * - Persists to localStorage
 * - Applies/removes 'light' class on <html> element
 * - Exposes toggle function for the bulb component
 */

import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // ── On mount: read saved preference or OS preference ─────────────────────
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      // Respect OS preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial: Theme = prefersDark ? "dark" : "light";
      setTheme(initial);
      applyTheme(initial);
    }
    setMounted(true);
  }, []);

  // ── Apply theme to DOM ────────────────────────────────────────────────────
  function applyTheme(t: Theme) {
    const html = document.documentElement;
    if (t === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }

  // ── Toggle theme ──────────────────────────────────────────────────────────
  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggle, mounted, isLight: theme === "light" };
}
