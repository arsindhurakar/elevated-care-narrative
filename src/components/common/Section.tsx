export default function Section({
  id,
  children,
  bg,
}: {
  id: string;
  children: React.ReactNode;
  bg?: "surface" | "ink";
}) {
  return (
    <section
      id={id}
      className={`py-28 md:py-40 border-t border-hairline ${
        bg === "surface" ? "bg-surface" : bg === "ink" ? "bg-foreground text-background" : ""
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        {children}
      </div>
    </section>
  );
}
