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
import { faqsSEOLocal } from "@/lib/faq-templates";

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
        faqs={faqsSEOLocal}
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
              <p>
                ¿Cómo aparecer en Google Maps? ¿Qué es el SEO local exactamente?
                ¿Cuánto tarda en posicionar una web? Son preguntas que nos hacen
                cada semana. La respuesta corta: el SEO local es el conjunto de
                técnicas que hacen que tu negocio aparezca cuando alguien busca
                tus servicios en tu zona. Y funciona. Llevamos años posicionando
                negocios locales en la provincia de Barcelona y los resultados
                hablan solos.
              </p>
              <p>
                A diferencia del SEO nacional (que compite con toda España), el
                SEO local se enfoca en tu zona geográfica. Esto significa menos
                competencia, resultados más rápidos y un ROI mucho mayor para
                negocios con clientes locales. Un fontanero en Sabadell no necesita
                aparecer en Madrid: necesita aparecer cuando alguien en Sabadell
                busca &quot;fontanero urgente&quot;.
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

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Cómo trabajamos tu SEO local paso a paso
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <ol className="space-y-4 list-none pl-0">
                <li>
                  <strong>1. Auditoría SEO inicial (Semana 1)</strong> — Analizamos
                  tu situación actual: posiciones en Google, estado de tu ficha de
                  Google Business Profile, perfil de reseñas, citas locales y la
                  competencia en tu sector y zona. Identificamos las keywords con
                  mayor potencial de tráfico y conversión.
                </li>
                <li>
                  <strong>2. Optimización on-page y Google Business (Semana 2-3)</strong> — Optimizamos
                  tu web (títulos, meta descriptions, contenido, estructura de
                  encabezados, datos estructurados) y tu ficha de Google Business
                  Profile (categorías, atributos, fotos, horarios, publicaciones).
                  Corregimos inconsistencias de NAP (nombre, dirección, teléfono)
                  en directorios.
                </li>
                <li>
                  <strong>3. Estrategia de contenido y enlaces (Mes 2+)</strong> — Creamos
                  contenido optimizado para las keywords objetivo: páginas de
                  servicio específicas, artículos de blog con enfoque local y
                  landing pages para las zonas que quieras cubrir. Construimos
                  citas locales en directorios relevantes.
                </li>
                <li>
                  <strong>4. Seguimiento y optimización continua</strong> — Cada mes
                  ajustamos la estrategia según los resultados: nuevas keywords,
                  contenido actualizado, respuesta a reseñas y optimización de la
                  ficha de Google Business. Te enviamos un informe claro con
                  posiciones, tráfico y leads generados.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Caso real: de invisible a top 3 en Google Maps
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                <strong>El problema:</strong> Un taller mecánico en Terrassa con
                20 años de experiencia no aparecía en Google. Su ficha de Google
                Business tenía 3 reseñas (una negativa sin responder), fotos
                desactualizadas y la categoría incorrecta. Su web era una página
                estática de 2018 sin optimizar.
              </p>
              <p>
                <strong>La solución:</strong> Optimizamos completamente su ficha
                de Google Business, creamos una web nueva con páginas de servicio
                individuales (mecánica general, ITV, neumáticos, electricidad del
                automóvil), implementamos una estrategia de reseñas y publicamos
                contenido mensual orientado a búsquedas locales.
              </p>
              <p>
                <strong>El resultado:</strong> En 4 meses pasó de no aparecer a
                estar en el top 3 de Google Maps para &quot;taller mecánico
                Terrassa&quot;, &quot;mecánico Terrassa&quot; y &quot;ITV Terrassa&quot;.
                Las llamadas desde Google se triplicaron y las reseñas pasaron de
                3 a 47 (con una media de 4.8 estrellas). El dueño estima que el
                60% de los clientes nuevos llegan ahora por Google.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              SEO local vs no hacer nada: los números
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                Muchos negocios locales creen que &quot;ya les llegan clientes
                por el boca a boca&quot; y no necesitan estar en Google. Estos
                son los datos reales:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>El 76% de las personas</strong> que buscan algo local
                  en el móvil visitan un negocio en las siguientes 24 horas.
                </li>
                <li>
                  <strong>El 28% de las búsquedas locales</strong> terminan en
                  una compra el mismo día.
                </li>
                <li>
                  <strong>El 70% de los consumidores</strong> visitan una tienda
                  basándose en información encontrada online.
                </li>
                <li>
                  <strong>Los 3 primeros resultados</strong> de Google Maps
                  capturan el 75% de los clics. Si no estás ahí, básicamente
                  no existes.
                </li>
              </ul>
              <p>
                ¿Cuántos clientes potenciales buscaron tus servicios en Google
                este mes y acabaron en tu competencia? Ese es el coste real de
                no invertir en SEO local.
              </p>
            </div>
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
            faqs={faqsSEOLocal}
            title="Preguntas Frecuentes sobre SEO Local"
          />
        </Container>
      </section>

      <CTABanner variant="dark" />
    </>
  );
}
