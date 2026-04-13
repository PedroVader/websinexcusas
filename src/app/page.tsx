import { Hero } from "@/components/sections/Hero";
import { HeroLeadForm } from "@/components/forms/HeroLeadForm";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQ } from "@/components/ui/FAQ";
import { preciosWeb } from "@/data/precios";
import { faqsGenerales } from "@/lib/faq-templates";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <Hero
        badge="Agencia Web en Barcelona"
        title="Tu negocio merece estar online."
        highlight="Sin excusas."
        subtitle="Diseñamos webs profesionales para negocios locales de la provincia de Barcelona. Webs que aparecen en Google y traen clientes. Desde 490€."
        bgImage="/images/hero-bg.jpg"
        badges={[
          { src: "/logos/google-partner.png", alt: "Google Partner", width: 80, height: 80 },
          { src: "/logos/hubspot-partner.png", alt: "HubSpot Solutions Partner", width: 80, height: 80 },
        ]}
      >
        <HeroLeadForm />
      </Hero>

      <SocialProof />

      <ServicesGrid />

      <CTABanner
        title="Tu competencia ya tiene web. Tú decides."
        subtitle="Cada día que pasa sin web, son clientes que se van a tu competencia. Sin dramas, sin rodeos."
        bgImage="/images/cta-bg.jpg"
      />

      <PortfolioPreview />

      <ProcessTimeline />

      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <PricingTable
              plans={preciosWeb}
              title="Precios Claros. Sin Sorpresas. Sin Excusas."
              subtitle="Elige tu plan y hablamos hoy. Todos incluyen diseño responsive, SSL y soporte."
            />
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 bg-light">
        <Container>
          <ScrollReveal>
            <FAQ
              faqs={faqsGenerales}
              title="Preguntas Frecuentes"
              subtitle="Todo lo que necesitas saber antes de dar el paso."
            />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="¿Aún sin web? Hablemos."
        subtitle="Pídenos un presupuesto gratis y respondemos en 24 horas. Sin compromiso, sin letra pequeña."
        ctaLabel="Pide Presupuesto Gratis"
        variant="brand"
      />
    </>
  );
}
