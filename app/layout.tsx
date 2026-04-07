import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mohit Yadav — Frontend Engineer L2",
    template: "%s | Mohit Yadav",
  },
  description:
    "Frontend Engineer L2 at Publicis Sapient, Gurugram. Specialising in React, Nx microfrontend architecture, Adobe Target experimentation, and WCAG accessibility.",
  keywords: [
    "Frontend Engineer","React Developer","Next.js","TypeScript",
    "Microfrontend","Nx","Publicis Sapient","Gurugram","Mohit Yadav",
  ],
  authors: [{ name: "Mohit Yadav" }],
  creator: "Mohit Yadav",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mohit Yadav Portfolio",
    title: "Mohit Yadav — Frontend Engineer L2",
    description: "Frontend Engineer L2 at Publicis Sapient. React · Nx · TypeScript · Adobe Target · WCAG AA.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f4ff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          Load fonts via standard <link> — works with both Babel and SWC.
          display=swap prevents FOIT (Flash of Invisible Text).
          Only loading weights we actually use = smaller download.
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* DNS prefetch for external links */}
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />

        {/*
          Inline script to set theme BEFORE first paint.
          Prevents flash of wrong theme on reload.
          This is a render-blocking script intentionally — it's tiny (< 200 bytes)
          and prevents a jarring theme flash which is worse for UX.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('portfolio-theme');
                if (t === 'light') document.documentElement.classList.add('light');
                else if (!t && window.matchMedia('(prefers-color-scheme: light)').matches)
                  document.documentElement.classList.add('light');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          style={{ background: "var(--accent)", color: "white" }}
        >
          Skip to main content
        </a>

        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
