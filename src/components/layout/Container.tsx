import { useTheme } from "@/components/providers/ThemeProvider";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#expertise", label: "Expertise" },
  { href: "#research", label: "Research" },
  { href: "#speaking", label: "Speaking" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 min-w-0">
          <span className="font-display text-xl md:text-2xl leading-none truncate">
            Dr. Sony Sherpa
          </span>
          <span className="hidden sm:inline eyebrow shrink-0">MD · FRCOG</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] tracking-[0.16em] uppercase text-muted-ink hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="relative size-9 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors"
        >
          <span
            className="block size-2.5 rounded-full bg-ink transition-all duration-500"
            style={{
              boxShadow:
                theme === "dark"
                  ? "inset -3px -1px 0 0 var(--color-background)"
                  : "none",
            }}
          />
        </button>
      </div>
    </nav>
  );
}
