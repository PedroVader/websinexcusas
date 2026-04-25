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
        subtitle="Diseñamos webs profesionales para negocios locales de la provincia de Barcelona. Webs que aparecen en Google y traen clientes. Desde 590€."
        bgImage="/images/hero-bg.jpg"
        badges={[
          { src: "/logos/google-partner.png", alt: "Google Partner", width: 80, height: 80 },
          { src: "/logos/hubspot-partner.png", alt: "HubSpot Solutions Partner", width: 80, height: 80 },
        ]}
      >
        <HeroLeadForm />
      </Hero>

      <SocialProof />

      <section className="py-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-heading mb-6">
                Diseño Web para Negocios Locales en Barcelona
              </h2>
              <div className="prose prose-lg text-dark-secondary space-y-4">
                <p>
                  En 2026, el 87% de los consumidores busca negocios locales en Google
                  antes de visitarlos. Si tu negocio no tiene web —o tiene una web
                  desactualizada que no aparece en los resultados—, estás regalando
                  clientes a tu competencia cada día. No es una opinión: es el dato
                  que vemos repetido en cada municipio de la provincia de Barcelona.
                </p>
                <p>
                  Web Sin Excusas nace para resolver un problema concreto: miles de
                  negocios locales en el Vallès Occidental, el Maresme, el Baix
                  Llobregat, el Barcelonès y el Vallès Oriental siguen sin
                  presencia digital efectiva. Peluquerías, talleres, clínicas,
                  restaurantes, reformas, asesorías... negocios que llevan años
                  funcionando pero que no existen en Google. Nosotros cambiamos eso.
                </p>
                <p>
                  ¿Qué nos hace diferentes? Somos una agencia web local de verdad.
                  Oficina en Sabadell, reuniones presenciales si las necesitas, y un
                  conocimiento profundo del tejido empresarial de Barcelona y
                  alrededores. No somos una agencia de Madrid que &quot;también cubre
                  Barcelona&quot;. Conocemos tu mercado porque es el nuestro. Y
                  trabajamos con precios cerrados y claros: sabes lo que pagas antes
                  de empezar, sin sorpresas ni letra pequeña.
                </p>
                <p>
                  Desde diseño web profesional desde 590€ hasta SEO local,
                  mantenimiento y campañas de Google Ads, cubrimos todo lo que un
                  negocio local necesita para captar clientes online. Webs rápidas,
                  optimizadas para móvil y para Google, con una obsesión: que tu
                  teléfono suene. Porque una web bonita que nadie ve no sirve de nada.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

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
