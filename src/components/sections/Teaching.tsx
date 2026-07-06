import Image from "next/image";

import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";
import hands from "@/assets/hands.jpg";
import teaching from "@/assets/teaching.jpg";

export function Teaching() {
  return (
    <Section id="teaching">
      <SectionHead
        index="VII."
        label="Teaching & mentorship"
        title="The quiet half of the practice."
      />
      <div className="col-span-12 lg:col-span-4 lg:col-start-5">
        <div className="aspect-[4/5] overflow-hidden bg-surface">
          <Image
            src={hands}
            alt="Detail — hands and stethoscope"
            width={1200}
            height={1500}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="aspect-[4/5] overflow-hidden bg-surface">
          <Image
            src={teaching}
            alt="Teaching residents"
            width={1600}
            height={1067}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div className="mt-10 space-y-6 text-graphite leading-relaxed">
          <p>
            Twenty-eight residents mentored to consultancy. Nine doctoral
            supervisions. Visiting faculty appointments in Stockholm, Kuala
            Lumpur, and Cape Town.
          </p>
          <ul className="space-y-3">
            {[
              "Adjunct Professor — Grant Medical College",
              "Examiner — MRCOG Part 3, RCOG London",
              "Curriculum Chair — MUHS OB-GYN residency",
              "Founding faculty — South Asia MFM Fellowship",
            ].map((l) => (
              <li key={l} className="pl-4 border-l-2 border-sage/40 text-ink">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}