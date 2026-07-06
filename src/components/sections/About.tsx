import Section from "@/components/common/Section";
import SectionHead from "@/components/common/SectionHead";

export function About() {
  return (
    <Section id="about">
      <SectionHead
        index="I."
        label="A personal note"
        title={
          <>
            On <em className="text-sage">why</em> I chose this work.
          </>
        }
      />

      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <div className="space-y-8 text-lg leading-[1.7] text-graphite max-w-[62ch]">
          <p>
            <span className="float-left font-display text-6xl leading-[0.8] mr-3 mt-1 text-ink">
              I
            </span>
            came to obstetrics in my second year of medical school, in a district
            hospital in Pune, holding the hand of a woman I had never met while she
            delivered her first child. Nothing before or since has felt as ordinary
            or as sacred.
          </p>
          <p>
            My practice today rests on three quiet convictions: that women are the
            most reliable authors of their own care; that evidence is a form of
            respect; and that a good outcome is not only a healthy body, but a woman
            who feels she was heard.
          </p>
          <p>
            I split my time between clinical work at a tertiary referral center,
            translational research on placental biology, and teaching residents who
            will, in turn, teach the next generation. The rest — writing, speaking,
            advising ministries — is service to the same idea.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6">
          {[
            ["Shared decision-making", "Nothing about her without her."],
            ["Evidence over tradition", "Guidelines updated, not inherited."],
            ["Long relationships", "Care that outlasts a single visit."],
            ["Respectful maternity", "Dignity as a clinical outcome."],
          ].map(([t, d]) => (
            <li key={t} className="border-t border-hairline pt-4">
              <p className="font-display text-xl">{t}</p>
              <p className="text-sm text-muted-ink mt-1">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}