import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const expertise = [
  {
    n: "01",
    title: "High-Risk Pregnancy",
    body:
      "For the small fraction of pregnancies that carry disproportionate weight — early-onset preeclampsia, placenta accreta, twin-to-twin transfusion — I run a multidisciplinary service anchored in shared, unhurried decisions.",
  },
  {
    n: "02",
    title: "Minimally Invasive Surgery",
    body:
      "Laparoscopic and hysteroscopic technique, developed under fellowship at AIIMS, focused on organ preservation, faster recovery, and, above all, the option of a next pregnancy.",
  },
  {
    n: "03",
    title: "Fertility & Reproductive Medicine",
    body:
      "Evaluation and counselling for unexplained infertility, PCOS, endometriosis, and fertility preservation — always with the couple, never at them.",
  },
  {
    n: "04",
    title: "Adolescent & Menopausal Gynecology",
    body:
      "Bookends of a life. Two chapters that deserve as much attention, plain language, and time as the years in between.",
  },
  {
    n: "05",
    title: "Preventive Women's Health",
    body:
      "Cervical screening, vaccination, bone and cardiovascular health — the quiet, unglamorous work that prevents most of what I later treat.",
  },
  {
    n: "06",
    title: "Prenatal Counselling",
    body:
      "For families who arrive with a difficult diagnosis, an unhurried conversation, an honest map of what is known, and a plan that belongs to them.",
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