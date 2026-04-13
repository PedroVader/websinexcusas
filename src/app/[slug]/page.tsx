import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Monitor, ShoppingCart, Browser, ArrowsClockwise, CheckCircle, Star, Quotes, MapPin, TrendUp, Buildings } from "@phosphor-icons/react/dist/ssr";
import municipiosData from "@/data/municipios.json";
import { siteConfig } from "@/data/site";
import { preciosWeb } from "@/data/precios";
import { getFAQsMunicipio } from "@/lib/faq-templates";
import { Hero } from "@/components/sections/Hero";
import { HeroLeadForm } from "@/components/forms/HeroLeadForm";
import { SocialProof } from "@/components/sections/SocialProof";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQ } from "@/components/ui/FAQ";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { NearbyMunicipalities } from "@/components/sections/NearbyMunicipalities";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Municipio } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const MUNICIPIOS_PREFIX = "diseno-web-";

function getMunicipioFromSlug(slug: string): Municipio | undefined {
  if (!slug.startsWith(MUNICIPIOS_PREFIX)) return undefined;
  const municipioSlug = slug.slice(MUNICIPIOS_PREFIX.length);
  return (municipiosData as Municipio[]).find((m) => m.slug === municipioSlug);
}

export async function generateStaticParams() {
  return (municipiosData as Municipio[]).map((m) => ({
    slug: `${MUNICIPIOS_PREFIX}${m.slug}`,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const municipio = getMunicipioFromSlug(slug);
  if (!municipio) return {};

  return {
    title: `Diseño Web en ${municipio.nombre} · Webs Profesionales desde 490€`,
    description: `Diseño web profesional en ${municipio.nombre} (${municipio.comarca}). Creamos webs que aparecen en Google y traen clientes a tu negocio. Desde 490€. Entrega en 2-3 semanas.`,
    alternates: {
      canonical: `${siteConfig.url}/diseno-web-${municipio.slug}`,
    },
    openGraph: {
      title: `Diseño Web en ${municipio.nombre} — ${siteConfig.name}`,
      description: `Webs profesionales para negocios de ${municipio.nombre}. Desde 490€.`,
      url: `${siteConfig.url}/diseno-web-${municipio.slug}`,
      siteName: siteConfig.name,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function MunicipioPage({ params }: PageProps) {
  const { slug } = await params;
  const municipio = getMunicipioFromSlug(slug);

  if (!municipio) {
    notFound();
  }

  const faqs = getFAQsMunicipio(municipio);

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
      {
        "@type": "ListItem",
        position: 2,
        name: `Diseño Web en ${municipio.nombre}`,
        item: `${siteConfig.url}/diseno-web-${municipio.slug}`,
      },
    ],
  };

  return (
    <>
      <ServiceSchema
        serviceName={`Diseño Web en ${municipio.nombre}`}
        description={`Servicio de diseño web profesional para negocios de ${municipio.nombre}, ${municipio.comarca}.`}
        areaServed={municipio.nombre}
        priceFrom="490"
        faqs={faqs}
      />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero con formulario */}
      <Hero
        badge={`${municipio.comarca} · ${municipio.distanciaBcn}`}
        title={`Diseño Web en ${municipio.nombre}.`}
        highlight="Sin Excusas."
        subtitle={`Creamos webs profesionales para negocios de ${municipio.nombre} que quieren captar más clientes por internet. Desde 490€. Entrega en 2-3 semanas.`}
        bgImage="/images/hero-bg.jpg"
        badges={[
          { src: "/logos/google-partner.png", alt: "Google Partner", width: 80, height: 80 },
          { src: "/logos/hubspot-partner.png", alt: "HubSpot Solutions Partner", width: 80, height: 80 },
        ]}
      >
        <HeroLeadForm />
      </Hero>

      {/* 2. Trust signals */}
      <SocialProof />

      <Container className="py-4">
        <Breadcrumbs
          items={[
            { label: `Diseño Web en ${municipio.nombre}` },
          ]}
        />
      </Container>

      {/* 3. Por qué tu negocio necesita una web */}
      <section className="py-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-heading mb-6">
                ¿Por qué tu negocio en {municipio.nombre} necesita una web profesional?
              </h2>
              <div className="text-dark-secondary space-y-4 text-lg">
                <p>{municipio.historia}</p>
                <p>
                  Hoy, {municipio.nombre} tiene {municipio.poblacion} y su zona
                  comercial principal es {municipio.zonaComercial}.{" "}
                  {municipio.problemaDigital}
                </p>
                <p>
                  {municipio.estadisticas.busquedasMensuales}.{" "}
                  {municipio.estadisticas.comerciosOnline}.{" "}
                  {municipio.estadisticas.competidoresDigitales}.
                </p>
                <p className="font-bold text-dark bg-brand/10 p-4 rounded-lg">
                  {municipio.excusaLocal}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 4. Sectores destacados */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title={`Sectores que Más se Benefician en ${municipio.nombre}`}
              subtitle={`Conocemos el tejido comercial de ${municipio.nombre}. Estos son los sectores donde una web profesional marca más diferencia.`}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {municipio.sectoresDestacados.map((s, i) => (
              <ScrollReveal key={s.sector} delay={i * 100}>
                <Card>
                  <Buildings size={32} weight="duotone" className="text-brand" />
                  <h3 className="mt-3 text-lg font-bold font-heading">{s.sector}</h3>
                  <p className="mt-2 text-sm text-dark-secondary">{s.detalle}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA intermedio con imagen */}
      <CTABanner
        title={`Tu competencia en ${municipio.nombre} ya tiene web.`}
        subtitle="Cada día que pasa sin web, son clientes que se van a tu competencia. Sin dramas, sin rodeos."
        bgImage="/images/cta-bg.jpg"
      />

      {/* 6. Caso de éxito local */}
      <section className="py-16 bg-light">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title={`Caso de Éxito en ${municipio.nombre}`}
                subtitle="Un ejemplo real de cómo una web profesional transforma un negocio local."
              />
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <TrendUp size={28} weight="duotone" className="text-brand" />
                  <h3 className="text-xl font-bold font-heading">
                    {municipio.casoExito.negocio}
                  </h3>
                  <span className="ml-auto text-sm text-dark-secondary bg-gray-100 px-3 py-1 rounded-full">
                    {municipio.casoExito.sector}
                  </span>
                </div>
                <div className="space-y-4 text-dark-secondary">
                  <div>
                    <p className="font-bold text-dark text-sm mb-1">El problema</p>
                    <p>{municipio.casoExito.problema}</p>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm mb-1">La solución</p>
                    <p>{municipio.casoExito.solucion}</p>
                  </div>
                  <div className="bg-brand/5 p-4 rounded-lg">
                    <p className="font-bold text-dark text-sm mb-1">El resultado</p>
                    <p className="font-bold text-brand">{municipio.casoExito.resultado}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 7. Lo que hacemos */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Lo que Hacemos en Web Sin Excusas"
              highlight="Web Sin Excusas"
              subtitle="No hacemos webs para decorar. Las hacemos para vender."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "Web Corporativa", desc: "Tu carta de presentación online. Profesional, rápida y optimizada." },
              { icon: ShoppingCart, title: "Tienda Online", desc: "Vende tus productos las 24 horas del día, los 7 días de la semana." },
              { icon: Browser, title: "Landing Pages", desc: "Páginas de aterrizaje diseñadas para convertir visitas en clientes." },
              { icon: ArrowsClockwise, title: "Rediseño Web", desc: "¿Tu web actual no funciona? La renovamos para que sí lo haga." },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <Card>
                  <s.icon size={40} weight="duotone" className="text-brand" />
                  <h3 className="mt-3 text-lg font-bold font-heading">{s.title}</h3>
                  <p className="mt-2 text-sm text-dark-secondary">{s.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. SEO Local */}
      <section className="py-16 bg-light">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-heading mb-6">
                {municipio.contenidoSEO.titulo}
              </h2>
              <div className="text-dark-secondary space-y-4 text-lg">
                {municipio.contenidoSEO.parrafos.map((parrafo, i) => (
                  <p key={i}>{parrafo}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {municipio.barrios.map((barrio) => (
                  <span
                    key={barrio}
                    className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full border border-gray-200"
                  >
                    <MapPin size={14} weight="fill" className="text-brand" />
                    {barrio}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 9. Ventajas locales */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-heading mb-8">
                Por Qué Elegirnos para tu Web en {municipio.nombre}
              </h2>
              <div className="space-y-4">
                {municipio.ventajasLocales.map((ventaja, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle
                      size={24}
                      weight="fill"
                      className="text-brand mt-1 shrink-0"
                    />
                    <p className="text-dark-secondary text-lg">{ventaja}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 10. Testimonio local */}
      <section className="py-16 bg-light">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Quotes size={48} weight="fill" className="text-brand/20 mx-auto mb-4" />
              <blockquote className="text-xl text-dark italic leading-relaxed">
                &ldquo;{municipio.testimonioLocal.texto}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-bold text-dark font-heading">
                  {municipio.testimonioLocal.nombre}
                </p>
                <p className="text-sm text-dark-secondary">
                  {municipio.testimonioLocal.negocio}
                </p>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} weight="fill" className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 11. Portfolio */}
      <PortfolioPreview />

      {/* 12. Process Timeline */}
      <ProcessTimeline />

      {/* 13. Pricing */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <PricingTable
              plans={preciosWeb}
              title={`Precios de Diseño Web en ${municipio.nombre}`}
              subtitle="Elige tu plan y hablamos hoy. Sin letra pequeña. Sin sorpresas. Sin excusas."
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* 14. FAQ */}
      <section className="py-20 bg-light">
        <Container>
          <ScrollReveal>
            <FAQ
              faqs={faqs}
              title={`Preguntas Frecuentes sobre Diseño Web en ${municipio.nombre}`}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* 15. CTA final */}
      <CTABanner
        title={`¿Tienes un negocio en ${municipio.nombre}? Hablemos.`}
        subtitle="Pídenos un presupuesto gratis y te respondemos en 24 horas. Sin compromiso."
        variant="brand"
      />

      {/* 16. Nearby municipalities */}
      <NearbyMunicipalities
        currentSlug={municipio.slug}
        municipiosCercanos={municipio.municipiosCercanos}
      />
    </>
  );
}
