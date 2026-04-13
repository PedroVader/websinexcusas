import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "brand" | "dark";
  bgImage?: string;
}

export function CTABanner({
  title = "¿Aún sin web? Sin excusas.",
  subtitle = "Pídenos un presupuesto gratis y respondemos en 24 horas. Sin compromiso.",
  ctaLabel = "Pide Presupuesto Gratis",
  ctaHref = "/presupuesto",
  variant = "brand",
  bgImage,
}: CTABannerProps) {
  if (bgImage) {
    return (
      <section
        className="relative py-20 text-light bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-dark/80" />
        <Container className="relative text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              {title}
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
              {subtitle}
            </p>
            <div className="mt-8">
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaLabel}
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    );
  }

  return (
    <section
      className={
        variant === "brand"
          ? "py-16 bg-brand text-dark"
          : "py-16 bg-dark text-light"
      }
    >
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            {title}
          </h2>
          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              variant === "brand" ? "text-dark/80" : "text-gray-300"
            }`}
          >
            {subtitle}
          </p>
          <div className="mt-8">
            <Button
              href={ctaHref}
              variant={variant === "brand" ? "secondary" : "primary"}
              size="lg"
            >
              {ctaLabel}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
