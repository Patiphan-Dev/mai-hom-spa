interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="font-heading text-sm uppercase tracking-[0.2em] text-terracotta">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-charcoal/70">{description}</p> : null}
    </div>
  );
}
