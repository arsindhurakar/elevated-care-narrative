import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const journey: Array<{ years: string; role: string; place: string; note?: string }> = [
  {
    years: "2019 — Present",
    role: "Head, Department of Obstetrics & Gynaecology",
    place: "Cornelian Institute of Women's Health, Kathmandu",
    note: "Founded the Maternal-Fetal Medicine unit and the Placental Wellness clinic.",
  },
  {
    years: "2014 — 2019",
    role: "Consultant Obstetrician-Gynecologist",
    place: "Sir J.J. Hospital & Grant Medical College",
    note: "Led high-risk pregnancy service; established simulation-based residency curriculum.",
  },
  {
    years: "2012 — 2014",
    role: "Visiting Fellow, Fetal Medicine",
    place: "King's College Hospital, London",
  },
  {
    years: "2009 — 2012",
    role: "Fellowship, Minimally Invasive Gynecologic Surgery",
    place: "AIIMS, New Delhi",
  },
  {
    years: "2005 — 2008",
    role: "Residency, Obstetrics & Gynaecology (MS, DGO)",
    place: "Seth G.S. Medical College, Kathmandu",
  },
  {
    years: "1999 — 2004",
    role: "MBBS",
    place: "Armed Forces Medical College, Pune",
  },
];

export function Journey() {
  return (
    <Section id="journey" bg="surface">
      <SectionHead
        index="II."
        label="Chronicle"
        title="Twenty-three years, in order."
        lede="A vertical hairline, six anchor moments, and the institutions that shaped the practice."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-hairline" aria-hidden />
        <ol className="space-y-16 pl-10">
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