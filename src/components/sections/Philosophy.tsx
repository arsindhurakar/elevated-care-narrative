import Section from "@/components/common/Section";

export function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="col-span-12 lg:col-span-10 lg:col-start-2">
        <p className="eyebrow text-sage">VI. On patient care</p>
        <blockquote className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.12] mt-8 text-balance">
          &ldquo;A good consultation is one where a woman leaves feeling more informed than when she arrived,
          and where I leave having learned something new about her, not just her chart.&rdquo;
        </blockquote>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            {
              t: "Shared decision-making",
              b: "Every plan is drafted twice - once in clinical language, once in hers. We proceed when both read the same.",
            },
            {
              t: "Updated, not entrenched",
              b: "Guidelines change. I would rather be recently right than famously consistent.",
            },
            {
              t: "The long relationship",
              b: "A woman who trusts her doctor at nineteen is a woman with better outcomes at forty-nine.",
            },
          ].map((p) => (
            <div key={p.t} className="border-t border-hairline pt-6">
              <h3 className="font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-graphite leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}