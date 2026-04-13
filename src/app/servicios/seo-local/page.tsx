import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { preciosSEO } from "@/data/precios";
import { faqsGenerales } from "@/lib/faq-templates";

export const metadata: Metadata = generatePageMetadata({
  title: "SEO Local · Posicionamiento Web desde 150€/mes",
  description:
    "Posicionamiento SEO local para negocios de Barcelona. Google Maps, búsquedas locales, reseñas y contenido optimizado. Desde 150€/mes.",
  path: "/servicios/seo-local",
});

const beneficios: { titulo: string; descripcion: string; icono: IconName }[] = [
  {
    titulo: "Google Maps",
    descripcion: "Aparece en el mapa cuando buscan negocios como el tuyo en tu zona.",
    icono: "map-pin",
  },
  {
    titulo: "Primeras posiciones",
    descripcion: "Posicionamos tu web para las búsquedas que importan en tu ciudad.",
    icono: "trophy",
  },
  {
    titulo: "Más reseñas",
    descripcion: "Gestionamos y potenciamos tus reseñas en Google para generar confianza.",
    icono: "star",
  },
  {
    titulo: "Contenido que posiciona",
    descripcion: "Creamos artículos y contenido optimizado que atrae clientes desde Google.",
    icono: "article",
  },
];

export default function SEOLocalPage() {
  return (
    <>
      <ServiceSchema
        serviceName="SEO Local"
        description="Servicio de posicionamiento SEO local para negocios de la provincia de Barcelona."
        areaServed="Provincia de Barcelona"
        priceFrom="150"
      />

      <Hero
        badge="Servicio recurrente"
        title="SEO Local en Barcelona"
        highlight="— Que te Encuentren en Google"
        subtitle="Tus clientes buscan tus servicios en Google. Si no apareces, se van a tu competencia. Así de simple. Desde 150€/mes."
        bgImage="/images/servicio-ai.jpg"
      />

      <Container className="py-4">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: "SEO Local" },
          ]}
        />
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-6">
              ¿Por qué necesitas SEO local?
            </h2>
            <div className="text-dark-secondary space-y-4 text-lg">
              <p>
                El 46% de todas las búsquedas en Google tienen intención local.
                &quot;Restaurante cerca de mí&quot;, &quot;dentista en Sabadell&quot;,
                &quot;taller mecánico Terrassa&quot;... Tus clientes ya te están
                buscando. La pregunta es: ¿te encuentran a ti o a tu competencia?
              </p>
              <p>
                El SEO local no es un lujo, es una necesidad. Sin él, tu web es
                como una tienda sin letrero en una calle sin nombre. Existe, pero
                nadie la encuentra.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b) => (
              <Card key={b.titulo}>
                <Icon name={b.icono} size={40} weight="duotone" className="text-brand" />
                <h3 className="mt-3 text-lg font-bold font-heading">{b.titulo}</h3>
                <p className="mt-2 text-sm text-dark-secondary">{b.descripcion}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <PricingTable
            plans={preciosSEO}
            title="Planes de SEO Local"
            subtitle="Elige tu plan y empieza a posicionarte hoy."
          />
        </Container>
      </section>

      <section className="py-20 bg-light">
        <Container>
          <FAQ
            faqs={faqsGenerales}
            title="Preguntas Frecuentes sobre SEO Local"
          />
        </Container>
      </section>

      <CTABanner variant="dark" />
    </>
  );
}
