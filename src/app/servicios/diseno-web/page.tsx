import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQ } from "@/components/ui/FAQ";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { preciosWeb } from "@/data/precios";
import { faqsGenerales } from "@/lib/faq-templates";

export const metadata: Metadata = generatePageMetadata({
  title: "Diseño Web Profesional · Webs desde 490€",
  description:
    "Diseño web profesional para negocios de Barcelona. Webs rápidas, responsive y optimizadas para Google. Desde 490€ con entrega en 10-21 días.",
  path: "/servicios/diseno-web",
});

export default function DisenoWebPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Diseño Web Profesional"
        description="Diseño y desarrollo de páginas web profesionales para negocios locales de la provincia de Barcelona."
        areaServed="Provincia de Barcelona"
        priceFrom="490"
        faqs={faqsGenerales}
      />

      <Hero
        badge="Servicio principal"
        title="Diseño Web Profesional"
        highlight="para tu negocio"
        subtitle="No hacemos webs bonitas que nadie ve. Hacemos webs que aparecen en Google y traen clientes. Desde 490€, en 2-3 semanas."
      />

      <Container className="py-4">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: "Diseño Web" },
          ]}
        />
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Una web que trabaja por ti, 24/7
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                Tu página web es tu mejor comercial. Trabaja las 24 horas del día,
                los 7 días de la semana, sin vacaciones y sin quejarse. Pero solo
                si está bien hecha.
              </p>
              <p>
                En Web Sin Excusas creamos webs profesionales que no son solo
                &quot;bonitas&quot;. Son rápidas, están optimizadas para Google, y están
                diseñadas para convertir visitantes en clientes. Cada página,
                cada botón, cada texto tiene un propósito: que tu teléfono suene.
              </p>
              <h3 className="text-2xl font-bold font-heading mt-8 mb-4 text-dark">
                ¿Qué incluye tu web?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} weight="bold" className="text-success mt-1" />
                  <span><strong>Diseño responsive</strong> — Se ve perfecta en móvil, tablet y escritorio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} weight="bold" className="text-success mt-1" />
                  <span><strong>Optimización SEO</strong> — Estructura, velocidad y contenido listos para Google</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} weight="bold" className="text-success mt-1" />
                  <span><strong>Formulario + WhatsApp</strong> — Tus clientes te contactan fácilmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} weight="bold" className="text-success mt-1" />
                  <span><strong>SSL incluido</strong> — Conexión segura, confianza para tus visitantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} weight="bold" className="text-success mt-1" />
                  <span><strong>Panel fácil</strong> — Edita textos y fotos sin conocimientos técnicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} weight="bold" className="text-success mt-1" />
                  <span><strong>Entrega rápida</strong> — 10-21 días según el plan</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ProcessTimeline />

      <section className="py-20 bg-white">
        <Container>
          <PricingTable
            plans={preciosWeb}
            title="Precios de Diseño Web"
            subtitle="Sin letra pequeña. Sin sorpresas. Sin excusas."
          />
        </Container>
      </section>

      <section className="py-20 bg-light">
        <Container>
          <FAQ
            faqs={faqsGenerales}
            title="Preguntas Frecuentes sobre Diseño Web"
          />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
