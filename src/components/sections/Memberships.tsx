import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

const certs = [
  ["NMC Registration No. 23505", "Nepal Medical Council"],
  ["MD/MS, Obstetrics & Gynaecology", "Manipal College of Medical Sciences, 2025"],
  ["MBBS", "Guangzhou Medical University, 2018"]
];

export function Memberships() {
  return (
    <Section id="memberships" bg="surface">
      <SectionHead
        index="VII."
        label="Affiliations & credentials"
        title="Bodies, boards, and certificates."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-16">
        <div>
          <p className="eyebrow mb-6">Certifications & licensure</p>
          <ol className="divide-y divide-hairline">
            {certs.map(([t, d]) => (
              <li key={t} className="py-4 grid grid-cols-12 gap-4">
                <span className="col-span-12 md:col-span-5 font-display text-lg">
                  {t}
                </span>
                <span className="col-span-12 md:col-span-7 text-muted-ink text-sm md:text-base">
                  {d}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}