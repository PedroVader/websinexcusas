import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface HeroBadge {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badges?: HeroBadge[];
  bgImage?: string;
  children?: React.ReactNode;
}

export function Hero({
  badge,
  title,
  highlight,
  subtitle,
  ctaPrimary = { label: "Pide Presupuesto Gratis", href: "/presupuesto" },
  ctaSecondary,
  badges,
  bgImage,
  children,
}: HeroProps) {
  return (
    <section className="relative bg-dark text-light overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-dark/75" />
      {/* Dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,166,35,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
      {/* Warm glow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,166,35,0.08),transparent_50%)]" />
      <Container className="relative py-12 sm:py-16 lg:py-24">
        <div className={children ? "flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16" : ""}>
          <div className={children ? "flex-1" : "max-w-3xl"}>
            {badge && (
              <Badge variant="brand" className="mb-4 sm:mb-6">
                {badge}
              </Badge>
            )}
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-heading">
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="text-brand">
                    {highlight.split("").map((char, i) => (
                      <span
                        key={i}
                        className="inline-block animate-[hero-letter_0.4s_ease-out_both]"
                        style={{ animationDelay: `${0.6 + i * 0.05}s` }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </>
              )}
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            {badges && badges.length > 0 && (
              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                {badges.map((b) => (
                  <Image
                    key={b.alt}
                    src={b.src}
                    alt={b.alt}
                    width={b.width}
                    height={b.height}
                    className="h-12 sm:h-16 w-auto object-contain"
                  />
                ))}
              </div>
            )}
            {!children && (
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <Button href={ctaPrimary.href} variant="primary" size="lg">
                  {ctaPrimary.label}
                </Button>
                {ctaSecondary && (
                  <Button href={ctaSecondary.href} variant="outline" size="lg" className="border-gray-600 text-light hover:bg-light hover:text-dark">
                    {ctaSecondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {children && (
            <div className="w-full lg:w-[400px] shrink-0">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
