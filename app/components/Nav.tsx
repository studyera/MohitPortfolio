"use client";

import Link from "next/link";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 h-16"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        transition: "background var(--tr)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-head text-[18px] font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
        MY
        <span
          className="inline-block w-2 h-2 rounded-full animate-pulse"
          style={{ background: "var(--accent)" }}
        />
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-[13px] font-medium tracking-wide transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--text2)" }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
