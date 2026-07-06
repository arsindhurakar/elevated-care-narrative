import { ReactNode } from "react";

export default function SectionHead({
  index,
  label,
  title,
  lede,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
}) {

  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="lg:sticky lg:top-28">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow text-sage">{index}</span>
          <span className="eyebrow">{label}</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.02] mt-6 text-balance">
          {title}
        </h2>
        {lede && (
          <p className="mt-6 text-graphite max-w-sm leading-relaxed">{lede}</p>
        )}
      </div>
    </div>
  );
}