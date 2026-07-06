import Section from "@/components/common/Section";

const publications = [
  {
    year: "2024",
    title:
      "Longitudinal placental perfusion indices and the prediction of late-onset preeclampsia: a multicentre cohort.",
    journal: "The Lancet Global Health",
    doi: "10.1016/S2214-109X(24)00218-4",
    type: "Original research",
  },
  {
    year: "2023",
    title:
      "Robotic-assisted transabdominal cerclage in recurrent second-trimester loss: five-year outcomes.",
    journal: "American Journal of Obstetrics & Gynecology",
    doi: "10.1016/j.ajog.2023.05.011",
    type: "Original research",
  },
  {
    year: "2022",
    title:
      "Respectful maternity care in urban India: a policy framework for tertiary centers.",
    journal: "BMJ Global Health",
    doi: "10.1136/bmjgh-2022-009132",
    type: "Policy",
  },
  {
    year: "2022",
    title:
      "Fertility preservation in adolescent oncology: consensus guidelines from the FIGO working group.",
    journal: "International Journal of Gynecology & Obstetrics",
    doi: "10.1002/ijgo.14210",
    type: "Guideline",
  },
  {
    year: "2021",
    title:
      "Shared decision-making at the threshold of viability: an ethical framework.",
    journal: "Journal of Medical Ethics",
    doi: "10.1136/medethics-2021-107455",
    type: "Editorial",
  },
  {
    year: "2020",
    title:
      "Laparoscopic management of deep infiltrating endometriosis: a decade of the Kathmandu cohort.",
    journal: "Human Reproduction",
    doi: "10.1093/humrep/deaa189",
    type: "Original research",
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
            140 papers.
            <br />
            Six worth reading first.
          </h2>
          <p className="mt-6 text-background/60 max-w-sm leading-relaxed">
            A full bibliography is available on ORCID and Google Scholar. Below,
            the work I most often return to.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="eyebrow text-background hover:text-sage transition-colors">ORCID ↗</a>
            <a href="#" className="eyebrow text-background hover:text-sage transition-colors">Scholar ↗</a>
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
                  <p className="mt-2 text-background/60 italic">{p.journal}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <a
                    href={`https://doi.org/${p.doi}`}
                    className="inline-block eyebrow border border-background/20 rounded-full px-3 py-1.5 text-background/70 hover:text-sage hover:border-sage transition-colors"
                  >
                    doi ↗
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}