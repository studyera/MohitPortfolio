/**
 * SectionHeader.tsx — shared section header component
 * Server component — no JS shipped.
 */

interface Props {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: Props) {
  return (
    <div className="section-header">
      <span className="section-num">{num}</span>
      <h2>{title}</h2>
      <div className="divider" />
    </div>
  );
}
