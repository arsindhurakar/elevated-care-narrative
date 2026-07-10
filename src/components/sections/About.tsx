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
            began my medical training far from home, completing my MBBS at Guangzhou Medical University, 
            including a year-long rotary internship at its Third Affiliated Hospital. 
            Those years abroad taught me as much about adapting to unfamiliar systems of care as they did 
            about medicine itself.
          </p>
          <p>
            Returning to Nepal, I worked as a Medical Officer across several hospitals in and around 
            Kathmandu - Manmohan Community Hospital, Om Hospital, and Mahendra Narayan Nidhi Hospital - before 
            pursuing my MD/MS in Obstetrics and Gynaecology at Manipal College of Medical Sciences. 
            I now practice as a consultant obstetrician and gynecologist, most recently at Mantra Hospital, 
            following an earlier consultancy at Gokarna City Hospital.
          </p>
          <p>
            My clinical interests were shaped by real patients: a case of acute pancreatitis secondary to 
            hypertriglyceridemia in pregnancy taught me to look past the obvious diagnosis, and my thesis on risk 
            factors for premature rupture of membranes in term pregnancies grew out of questions I couldn't answer at the bedside. 
            Both still guide how closely I watch for the complication that doesn't announce itself.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6">
          {[
            ["Attentive care", "Listening first, treating second."],
            ["Evidence over habit", "Learning applied at the bedside, not just the textbook."],
            ["Continuous learning", "Every case is also a lesson."],
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