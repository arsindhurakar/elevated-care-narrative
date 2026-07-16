import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const awards = [
  { year: "2013", title: "Guangdong Outstanding International Student Scholarship", body: "Guangzhou Medical University" },
  { year: "2010", title: "National School of Sciences Merit Scholarship", body: "National School of Sciences" },
  { year: "2008", title: "HIMS Merit Scholarship", body: "" },
];

export function Awards() {
  return (
    <Section id="awards" bg="surface">
      <SectionHead
        index="V."
        label="Recognitions"
        title="Kept in a low drawer."
        lede="Recorded here for the record; the work itself was never about the recognition."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {awards.map((a, index) => (
            <li
              key={a.title}
              className={`bg-surface p-8 md:p-10 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <p className="font-display text-3xl text-sage">{a.year}</p>
              <h3 className="font-display text-xl leading-snug mt-3">
                {a.title}
              </h3>
              <p className="text-sm text-muted-ink mt-2 italic">
                {a.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}