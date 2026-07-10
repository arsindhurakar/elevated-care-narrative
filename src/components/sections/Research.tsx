import Section from "@/components/common/Section";

const publications = [
  {
    year: "2025",
    title:
      "Identification of Risk Factors of PROM in Term Pregnancies, Manipal College of Medical Sciences",
    doi: "10.1016/S2214-109X(24)00218-4",
    type: "Thesis",
  },
  {
    year: "2024",
    title:
      "Acute Pancreatitis Secondary to Hypertriglyceridemia in Pregnancy",
    doi: "10.1016/j.ajog.2023.05.011",
    type: "Case Report",
  },
];

export function Research() {
  return (
    <Section id="research" bg="ink">
      <div className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-baseline gap-4">
            <span className="eyebrow text-sage">IV.</span>
            <span className="eyebrow text-background/60">
              Selected publications
            </span>

          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.02] mt-6 text-background">
            2 papers,
            <br />
            more to come.
          </h2>
          {/* <p className="mt-6 text-background/60 max-w-sm leading-relaxed">
            A full bibliography is available on ORCID and Google Scholar. Below,
            the work I most often return to.
          </p> */}
          <div className="mt-8 flex gap-4">
            <a href="#" className="eyebrow text-background hover:text-sage transition-colors">Full CV ↓</a>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <ol className="divide-y divide-background/10">
          {publications.map((p) => (
            <li key={p.doi} className="py-8 first:pt-0 group">
              <div className="grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-2 md:col-span-1 font-display text-2xl text-background/50">
                  {p.year}
                </span>
                <div className="col-span-10 md:col-span-8">
                  <p className="eyebrow text-sage mb-2">{p.type}</p>
                  <h3 className="font-display text-xl md:text-2xl leading-snug text-background group-hover:text-sage transition-colors">
                    {p.title}
                  </h3>
                </div>
                {/* <div className="col-span-12 md:col-span-3 md:text-right">
                  <a
                    href={`https://doi.org/${p.doi}`}
                    className="inline-block eyebrow border border-background/20 rounded-full px-3 py-1.5 text-background/70 hover:text-sage hover:border-sage transition-colors"
                  >
                    doi ↗
                  </a>
                </div> */}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}