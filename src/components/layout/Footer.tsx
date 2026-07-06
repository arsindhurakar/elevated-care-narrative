export function Footer() {
  return (
    <footer className="bg-foreground text-background/50 border-t border-background/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 eyebrow">
        <span>© {new Date().getFullYear()} Dr. Sony Sherpa</span>
        <span>Consultant Obstetrician & Gynecologist · Kathmandu</span>
      </div>
    </footer>
  );
}