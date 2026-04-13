import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  highlight,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  function renderTitle() {
    if (!highlight) return title;

    const index = title.indexOf(highlight);
    if (index === -1) return title;

    const before = title.slice(0, index);
    const after = title.slice(index + highlight.length);

    return (
      <>
        {before}
        <span className="text-brand">
          {highlight.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block brand-letter"
              style={{ animationDelay: `${0.3 + i * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        {after}
      </>
    );
  }

  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl font-heading">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-dark-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
