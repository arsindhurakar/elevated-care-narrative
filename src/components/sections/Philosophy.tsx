import Section from "@/components/common/Section";

export function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="col-span-12 lg:col-span-10 lg:col-start-2">
        <p className="eyebrow text-sage">IX. On patient care</p>
        <blockquote className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.12] mt-8 text-balance">
          &ldquo;A good consultation is one in which the woman leaves knowing more
          about her body than when she came in — and one in which I leave knowing
          more about her than her chart could have told me.&rdquo;
        </blockquote>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            {
              t: "Shared decision-making",
              b: "Every plan is drafted twice — once in clinical language, once in hers. We proceed when both read the same.",
            },
            {
              t: "Evidence, not habit",
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