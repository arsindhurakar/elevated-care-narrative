import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const awards = [
  { year: "2024", title: "President's Medal for Excellence in Women's Health", body: "Federation of Obstetric & Gynaecological Societies of India" },
  { year: "2022", title: "Chatterjee Lifetime Contribution Award", body: "Indian Council of Medical Research" },
  { year: "2020", title: "RCOG International Fellowship", body: "Royal College of Obstetricians & Gynaecologists, London" },
  { year: "2018", title: "Best Teacher — Postgraduate Medicine", body: "Maharashtra University of Health Sciences" },
];

export function Awards() {
  return (
    <Section id="awards" bg="surface">
      <SectionHead
        index="VI."
        label="Recognitions"
        title="Kept in a low drawer."
        lede="Recorded here for the record; measured against the students, papers, and patients they represent."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {awards.map((a) => (
            <li key={a.title} className="bg-surface p-8 md:p-10">
              <p className="font-display text-3xl text-sage">{a.year}</p>
              <h3 className="font-display text-xl leading-snug mt-3">{a.title}</h3>
              <p className="text-sm text-muted-ink mt-2 italic">{a.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}