export function SectionSkeleton() {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-20" aria-hidden="true">
      <div className="flex items-center gap-4 mb-14">
        <div className="w-12 h-6 rounded skeleton-pulse" />
        <div
          className="w-48 h-10 rounded-lg skeleton-pulse"
          style={{ animationDelay: "0.1s" }}
        />
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-[20px] skeleton-pulse"
            style={{ height: "200px", animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function CardSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-[20px] skeleton-pulse"
          style={{ height: "180px", animationDelay: `${i * 0.1}s` }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}