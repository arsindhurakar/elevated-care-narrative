import Image from "next/image";

import portrait from "@/assets/portrait.png";

export function Hero() {
  return (
    <header id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="absolute inset-0 grain-bg opacity-40 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Left / text - 7 cols */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow reveal">Obstetrician & Gynecologist · Est. 2018</p>
            <h1 className="font-display text-[3.25rem] sm:text-7xl lg:text-[7.5rem] leading-[0.92] mt-6 reveal-slow text-balance">
              A quiet practice
              <br />
              of <em className="text-sage font-medium">extraordinary</em> care.
            </h1>
            <div className="mt-10 grid grid-cols-12 gap-6">
              <p className="col-span-12 md:col-span-8 text-lg md:text-xl leading-relaxed text-graphite max-w-[54ch] reveal" style={{ animationDelay: "180ms" }}>
                Dr. Sony Sherpa is a consultant obstetrician and gynecologist based in Kathmandu, trained across Nepal and China, with a growing practice focused on high-risk pregnancy, PROM management, and attentive maternity care.
              </p>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-2 reveal" style={{ animationDelay: "240ms" }}>
                <span className="eyebrow">Credentials</span>
                <p className="font-display text-xl leading-snug">
                  MBBS, MD/MS (Obstetrics & Gynaecology)
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 reveal" style={{ animationDelay: "320ms" }}>
              <a
                href="#cv"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm tracking-wide hover:bg-sage transition-colors"
              >
                <span>Download Curriculum Vitae</span>
                <span className="grid place-items-center size-8 rounded-full bg-background/15 group-hover:bg-background/25 transition-colors">
                  ↓
                </span>
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-3 text-sm tracking-wide text-ink border-b border-hairline hover:border-ink pb-1 transition-colors"
              >
                Explore selected work →
              </a>
            </div>

            {/* Recognitions row */}
            <div className="mt-16 pt-8 hairline grid grid-cols-2 md:grid-cols-4 gap-6 reveal" style={{ animationDelay: "420ms" }}>
              {[
                ["8", "Years in practice"],
                ["2", "Research works"],
                ["1", "International clinical placement"],
                ["3", "Academic scholarships"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl md:text-4xl">{n}</p>
                  <p className="eyebrow mt-2">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right / portrait - 5 cols, offset */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 lg:-mt-16">
            <figure className="relative">
              <div className="mask-in overflow-hidden bg-surface aspect-[4/5]">
                <Image
                  src={portrait}
                  alt="Portrait of Dr. Sony Sherpa"
                  width={1280}
                  height={1600}
                  className="size-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="eyebrow">Portrait - Kathmandu, 2026</span>
                <span className="eyebrow text-sage">01 / 01</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
}
