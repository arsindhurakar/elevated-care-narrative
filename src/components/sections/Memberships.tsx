import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

 const orgs = [
    "FIGO — Intl. Federation of Gynecology & Obstetrics",
    "RCOG — Royal College of Obstetricians & Gynaecologists",
    "ACOG — American College of Obstetricians & Gynecologists",
    "FOGSI — India (Governing Council)",
    "Indian Society for Assisted Reproduction",
    "Indian Association of Gynecological Endoscopists",
  ];
  const certs = [
    ["Board Certification", "Indian Medical Council · MCI 45392"],
    ["FRCOG", "Royal College of Obstetricians & Gynaecologists, 2020"],
    ["Fellowship — MFM", "King's College Hospital, London, 2014"],
    ["Fellowship — MIGS", "AIIMS, New Delhi, 2012"],
    ["MS Obstetrics & Gynaecology", "Seth G.S. Medical College, 2008"],
    ["DGO", "College of Physicians & Surgeons, 2007"],
  ];

export function Memberships() {
  return (
    <Section id="memberships" bg="surface">
      <SectionHead
        index="X."
        label="Affiliations & credentials"
        title="Bodies, boards, and certificates."
      />
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-16">
        <div>
          <p className="eyebrow mb-6">Professional memberships</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {orgs.map((o) => (
              <li key={o} className="font-display text-lg border-b border-hairline pb-3">
                {o}
              </li>
            ))}
          </ul>
        </div>
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