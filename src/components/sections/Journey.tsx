import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const journey: Array<{ years: string; role: string; place: string; note?: string }> = [
  {
    years: "2026 - Present",
    role: "Lecturer, Department of Obstetrics & Gynaecology",
    place: "Patan Hospital, Kathmandu, Nepal",
  },
  {
    years: "Nov 2025 - Apr 2026",
    role: "OB-GYN Consultant",
    place: "Mantra Hospital, Kathmandu, Nepal",
    note: "Led high-risk pregnancy service; established simulation-based residency curriculum.",
  },
  {
    years: "May 2025 - Nov 2025",
    role: "OB-GYN Consultant",
    place: "Gokarna City Hospital, Kathmandu, Nepal",
  },
  {
    years: "2022 - 2025",
    role: "MD/MS, Obstetrics & Gynaecology",
    place: "Manipal College of Medical Sciences, Pokhara, Nepal",
  },
  {
    years: "2021 - 2022",
    role: "Medical Officer",
    place: "Mahendra Narayan Nidhi Hospital, Kathmandu, Nepal",
  },
  {
    years: "2019 - 2021",
    role: "Medical Officer",
    place: "Om Hospital, Kathmandu, Nepal",
  },
  {
    years: "2018 - 2019",
    role: "Medical Officer",
    place: "Manmohan Community Hospital, Kathmandu, Nepal"
  },
  {
    years: "2013 - 2018",
    role: "MBBS",
    place: "Guangzhou Medical University, Guangzhou, China",
    note: "(incl. rotary internship, 3rd Affiliated Hospital, 2017 - 2018)"
  }
];

export function Journey() {
  return (
    <Section id="journey" bg="surface">
      <SectionHead
        index="II."
        label="Chronicle"
        title="Eight years, in order."
        lede="A vertical timeline, seven anchor moments, and the institutions that shaped the practice so far."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-hairline" aria-hidden />
        <ol className="space-y-16 pl-[37.5px]">
          {journey.map((j, i) => (
            <li key={j.years} className="relative">
              <span
                className="absolute -left-[41px] top-2 size-2 rounded-full bg-sage ring-4 ring-surface"
                aria-hidden
              />
              <p className="eyebrow text-sage">{j.years}</p>
              <p className="font-display text-2xl md:text-3xl leading-snug mt-2">
                {j.role}
              </p>
              <p className="text-muted-ink mt-1">{j.place}</p>
              {j.note && (
                <p className="mt-3 text-graphite max-w-prose leading-relaxed">
                  {j.note}
                </p>
              )}
              <span className="eyebrow absolute -left-1 -top-6 text-muted-ink">
                {String(journey.length - i).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}