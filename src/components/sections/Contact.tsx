export function Contact() {
  const links = [
    ["Email", "office@dr-sonysherpa.md", "mailto:office@dr-sonysherpa.md"],
    ["LinkedIn", "in/sony-sherpa-md", "#"],
    ["ORCID", "0000-0002-4519-8827", "#"],
    ["Google Scholar", "sony.sherpa.md", "#"],
    ["ResearchGate", "sony-sherpa-12", "#"],
  ];
  return (
    <section
      id="contact"
      className="py-32 md:py-48 border-t border-hairline bg-foreground text-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow text-sage">XI. Contact</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] mt-8 text-balance text-background">
            For academic
            <br />
            collaboration,
            <br />
            <em className="text-sage">or a considered</em>
            <br />
            second opinion.
          </h2>
          <a
            href="mailto:office@dr-sonysherpa.md"
            className="inline-block mt-12 font-display text-2xl md:text-3xl border-b border-background/30 hover:border-sage hover:text-sage pb-1 transition-colors"
          >
            office@dr-sonysherpa.md
          </a>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-between gap-16">
          <div>
            <p className="eyebrow text-background/60 mb-4">Office</p>
            <p className="font-display text-xl leading-snug text-background">
              Cornelian Institute of Women's Health
              <br />
              Boudha Road, Kathmandu 400 026
              <br />
              India
            </p>
          </div>
          <ul className="space-y-3">
            {links.map(([label, val, href]) => (
              <li
                key={label}
                className="grid grid-cols-12 gap-4 items-baseline border-t border-background/10 pt-3"
              >
                <span className="col-span-4 eyebrow text-background/60">{label}</span>
                <a
                  href={href}
                  className="col-span-8 text-background hover:text-sage transition-colors truncate"
                >
                  {val} ↗
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cv"
            className="inline-flex items-center justify-between w-full rounded-full border border-background/20 px-6 py-3 text-sm tracking-wide hover:border-sage hover:text-sage transition-colors"
          >
            Download curriculum vitae (PDF, 412 KB)
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}