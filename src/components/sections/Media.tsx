import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const media = [
  { outlet: "The Hindu", title: "The cost of a rushed delivery", kind: "Op-Ed", year: "2024" },
  { outlet: "BBC World Service", title: "Interview - maternal mortality in South Asia", kind: "Radio", year: "2023" },
  { outlet: "Vogue India", title: "In conversation with Dr. Sony Sherpa", kind: "Feature", year: "2023" },
  { outlet: "The Lancet Voice", title: "Podcast - respectful maternity care", kind: "Podcast", year: "2022" },
  { outlet: "NDTV 24x7", title: "Panel - India's cervical cancer program", kind: "Television", year: "2022" },
  { outlet: "Mint Lounge", title: "The long consultation", kind: "Essay", year: "2021" },
];

export function Media() {
  return (
    <Section id="media" bg="surface">
      <SectionHead
        index="VIII."
        label="Media & press"
        title="Public writing & appearances."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <ol className="divide-y divide-hairline">
          {media.map((m, i) => (
            <li key={i} className="py-6 grid grid-cols-12 gap-4 items-baseline group">
              <span className="col-span-2 md:col-span-1 font-display text-xl text-muted-ink">
                {m.year}
              </span>
              <div className="col-span-10 md:col-span-6">
                <p className="font-display text-xl leading-snug group-hover:text-sage transition-colors">
                  {m.title}
                </p>
                <p className="text-sm text-muted-ink italic mt-1">{m.outlet}</p>
              </div>
              <p className="col-span-12 md:col-span-5 md:text-right eyebrow">
                {m.kind}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}