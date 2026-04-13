import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = generatePageMetadata({
  title: "Servicios de Diseño Web y SEO Local",
  description:
    "Diseño web profesional, SEO local, mantenimiento web y Google Ads para negocios de la provincia de Barcelona. Desde 490€.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <Hero
        title="Servicios de Diseño Web y SEO"
        highlight="en Barcelona"
        subtitle="Todo lo que tu negocio necesita para estar online y captar clientes. Sin rodeos, sin esperas, sin excusas."
        bgImage="/images/servicios-bg.jpg"
      />

      <Container className="py-4">
        <Breadcrumbs items={[{ label: "Servicios" }]} />
      </Container>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio) => (
              <Card key={servicio.slug} className="p-8">
                <Icon name={servicio.icono as IconName} size={48} weight="duotone" className="text-brand" />
                <h2 className="mt-4 text-2xl font-bold font-heading">
                  {servicio.nombre}
                </h2>
                <p className="mt-3 text-dark-secondary">
                  {servicio.descripcion}
                </p>
                <ul className="mt-4 space-y-2">
                  {servicio.caracteristicas.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check size={16} weight="bold" className="text-success mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-bold text-brand font-heading">
                    Desde {servicio.precioDesde}
                  </p>
                  <Button href={`/servicios/${servicio.slug}`} variant="primary" size="sm">
                    Ver Más
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
