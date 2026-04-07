export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="max-w-[1200px] mx-auto px-10 py-7 flex justify-between items-center flex-wrap gap-4"
      >
        <p className="text-[13px]" style={{ color: "var(--text3)" }}>
          © {new Date().getFullYear()} Mohit Yadav · Frontend Engineer L2 @ Publicis Sapient · Gurugram
        </p>
        <p
          className="text-[11px]"
          style={{
            fontFamily: "var(--font-dm-mono, monospace)",
            color: "var(--text3)",
          }}
        >
          Pull the bulb ↑ to switch themes
        </p>
      </div>
    </footer>
  );
}
