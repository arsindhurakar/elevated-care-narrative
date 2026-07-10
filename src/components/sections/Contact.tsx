export function Contact() {
  const links = [
    ["Email", "sony.sherpa55@hotmail.com", "mailto:sony.sherpa55@hotmail.com"],
    ["LinkedIn", "in/sony-sherpa-54733b295", "#"],
    ["Phone", "+977 981 3783132"],
  ];
  return (
    <section
      id="contact"
      className="py-32 md:py-48 border-t border-hairline bg-foreground text-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow text-sage">VIII. Contact</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] mt-8 text-balance text-background">
            For academic
            <br />
            collaboration,
            <br />
            <em className="text-sage">or a considered</em>
            <br />
            second opinion.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-between gap-16">
          <div>
            <p className="eyebrow text-background/60 mb-4">Office</p>
            <p className="font-display text-xl leading-snug text-background">
              Patan Hospital
              <br />
              Lagankhel, Lalitpur 44700
              <br />
              P.O. Box: 252, Kathmandu
              <br />
              Nepal
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