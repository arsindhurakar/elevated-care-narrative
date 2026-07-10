import Image from "next/image";

import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";
import speaking from "@/assets/speaking.jpg";


const talks = [
  { year: "2024", title: "Keynote - Rethinking the third trimester", venue: "FIGO World Congress, Paris" },
  { year: "2024", title: "Panel - Ethics of prenatal genomics", venue: "RCOG World Congress, London" },
  { year: "2023", title: "Guest lecture - Placental biology as public health", venue: "Karolinska Institutet, Stockholm" },
  { year: "2023", title: "CME series - Respectful maternity care", venue: "AIIMS, New Delhi (six sessions)" },
  { year: "2022", title: "Keynote - Twenty years of MIS in India", venue: "AICOG National Congress, Hyderabad" },
  { year: "2021", title: "Workshop - Simulation-based obstetric training", venue: "WHO SEARO, Bangkok" },
];

export function Speaking() {
  return (
    <Section
     id="speaking">
      <SectionHead
        index="V."
        label="Conferences & lectures"
        title="In rooms of colleagues, and of ministries."
        lede="A partial record of keynotes, panels, and workshops. Most of the year is spent teaching; a few weeks are spent thinking out loud."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="aspect-[16/11] overflow-hidden bg-surface">
                         <Image
                src={speaking}
                alt="Delivering a keynote"
                width={1600}
                height={1067}
                className="size-full object-cover"
                />
            </div>
            <p className="eyebrow mt-3">FIGO World Congress, Paris - 2024</p>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-16">
            <p className="font-display italic text-2xl leading-snug text-graphite">
              &ldquo;A lecture is only a good one if the resident in the fourth row
              feels safe enough to ask the obvious question.&rdquo;
            </p>
          </div>
        </div>
        <ol className="divide-y divide-hairline">
          {talks.map((t, i) => (
            <li key={i} className="py-6 grid grid-cols-12 gap-4 items-baseline group">
              <span className="col-span-2 md:col-span-1 font-display text-xl text-muted-ink">
                {t.year}
              </span>
              <div className="col-span-10 md:col-span-8">
                <p className="font-display text-xl leading-snug group-hover:text-sage transition-colors">
                  {t.title}
                </p>
              </div>
              <p className="col-span-12 md:col-span-3 md:text-right text-sm text-muted-ink italic">
                {t.venue}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
