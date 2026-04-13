import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = generatePageMetadata({
  title: "Google Ads · Resultados desde el Día Uno",
  description:
    "Campañas de Google Ads para negocios locales en Barcelona. Aparece en los primeros resultados desde el primer día. Desde 200€/mes + inversión.",
  path: "/servicios/google-ads",
});

const ventajas: { titulo: string; descripcion: string; icono: IconName }[] = [
  {
    titulo: "Resultados inmediatos",
    descripcion: "Mientras el SEO trabaja a medio plazo, Google Ads te pone en primera posición desde el día uno.",
    icono: "lightning",
  },
  {
    titulo: "Segmentación local precisa",
    descripcion: "Tus anuncios solo se muestran a personas que buscan tus servicios en tu zona. Ni un euro desperdiciado.",
    icono: "map-pin",
  },
  {
    titulo: "Control total del presupuesto",
    descripcion: "Tú decides cuánto inviertes cada día. Sin contratos permanentes, sin sorpresas.",
    icono: "currency-dollar",
  },
  {
    titulo: "Medición real del ROI",
    descripcion: "Sabes exactamente cuántas llamadas y contactos genera cada euro invertido.",
    icono: "chart-bar",
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Google Ads para Negocios Locales"
        description="Gestión profesional de campañas de Google Ads para negocios locales en Barcelona."
        areaServed="Provincia de Barcelona"
        priceFrom="200"
      />

      <Hero
        badge="Resultados rápidos"
        title="Google Ads para"
        highlight="Negocios Locales"
        subtitle="Aparece en los primeros resultados de Google desde el día uno. Campañas locales optimizadas para que cada euro cuente. Desde 200€/mes."
      />

      <Container className="py-4">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: "Google Ads" },
          ]}
        />
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-6">
              SEO + Google Ads = La combinación ganadora
            </h2>
            <div className="text-dark-secondary space-y-4 text-lg">
              <p>
                El SEO es una carrera de fondo: resultados sólidos, pero lleva
                tiempo. Google Ads es un sprint: resultados inmediatos, pero
                pagas por cada clic. La estrategia inteligente es combinar ambos.
              </p>
              <p>
                Mientras tu SEO va ganando posiciones orgánicas mes a mes, Google
                Ads te garantiza visibilidad desde el primer día. Cuando el SEO
                esté maduro, puedes reducir la inversión en Ads. O no. Tú decides.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ventajas.map((v) => (
              <Card key={v.titulo} className="p-8">
                <Icon name={v.icono} size={48} weight="duotone" className="text-brand" />
                <h3 className="mt-4 text-xl font-bold font-heading">{v.titulo}</h3>
                <p className="mt-2 text-dark-secondary">{v.descripcion}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="rounded-2xl bg-dark text-light p-8">
              <h3 className="text-2xl font-bold font-heading">
                Gestión de Google Ads
              </h3>
              <p className="mt-2 text-4xl font-bold font-heading text-brand">
                200€<span className="text-lg text-gray-400">/mes</span>
              </p>
              <p className="mt-1 text-sm text-gray-400">
                + presupuesto de anuncios (lo decides tú)
              </p>
              <ul className="mt-6 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-center gap-2 text-sm"><Check size={16} weight="bold" className="text-success" /> Configuración completa de campañas</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} weight="bold" className="text-success" /> Segmentación geográfica precisa</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} weight="bold" className="text-success" /> Optimización continua del presupuesto</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} weight="bold" className="text-success" /> Landing pages optimizadas</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} weight="bold" className="text-success" /> Informe mensual de ROI</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} weight="bold" className="text-success" /> Sin permanencia</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="¿Quieres clientes desde mañana?"
        subtitle="Configuramos tu campaña de Google Ads y empiezas a recibir llamadas en 48 horas."
        variant="brand"
      />
    </>
  );
}
