import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const expertise = [
  {
    n: "01",
    title: "General Obstetric Care",
    body:
      "Antenatal, intrapartum, and postpartum care across a full-service maternity practice."
  },
  {
    n: "02",
    title: "High-Risk Pregnancy Monitoring",
    body:
      "Close surveillance for metabolic and placental complications, including hypertriglyceridemia-associated pancreatitis in pregnancy."
  },
  {
    n: "03",
    title: "PROM Management",
    body:
      "Assessment and management of premature rupture of membranes at term, informed by original thesis research."
  },
  {
    n: "04",
    title: "General Gynecology",
    body:
      "Routine gynecological care, minor procedures, and outpatient management.",
  },
  {
    n: "05",
    title: "Preventive Women's Health",
    body:
      "Screening, vaccination, and wellness visits across the reproductive lifespan."
  },
  {
    n: "06",
    title: "Prenatal Counselling",
    body:
      "Antenatal education and family counselling through pregnancy."
  },
];

export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHead
        index="III."
        label="Areas of practice"
        title={<>Six chapters, one thread: <em className="text-sage">her</em> autonomy.</>}
        lede="Not a service list. A short essay on what I do most, and why each of these belongs together."
      />
      <div className="col-span-12 lg:col-span-8 lg:col-start-5">
        <ol className="divide-y divide-hairline">
          {expertise.map((e) => (
            <li key={e.n} className="py-10 first:pt-0 group">
              <div className="grid grid-cols-12 gap-6">
                <span className="col-span-2 md:col-span-1 eyebrow text-sage pt-2">
                  {e.n}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight group-hover:text-sage transition-colors">
                    {e.title}
                  </h3>
                  <p className="mt-4 text-graphite leading-relaxed max-w-[62ch]">
                    {e.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}