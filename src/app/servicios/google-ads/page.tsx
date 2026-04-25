import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { faqsGoogleAds } from "@/lib/faq-templates";

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
        faqs={faqsGoogleAds}
      />

      <Hero
        badge="Resultados rápidos"
        title="Google Ads para"
        highlight="Negocios Locales"
        subtitle="Aparece en los primeros resultados de Google desde el día uno. Campañas locales optimizadas para que cada euro cuente. Desde 200€/mes."
        bgImage="/images/servicio-ai.jpg"
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
              <p>
                ¿Google Ads funciona para negocios locales? Es donde mejor
                funciona. La publicidad en Google permite segmentar geográficamente
                al milímetro: puedes mostrar tus anuncios solo a personas que
                buscan en tu ciudad, en un radio específico o incluso en barrios
                concretos. Las búsquedas locales tienen una intención de compra
                altísima: alguien que busca &quot;fontanero urgente Sabadell&quot;
                necesita un fontanero ahora, no mañana.
              </p>
              <p>
                ¿Cuánto invertir en Google Ads? Para negocios locales en Barcelona,
                una inversión de 300-500€/mes en anuncios (más nuestra tarifa de
                gestión de 200€/mes) suele generar resultados consistentes. Pero
                lo importante no es cuánto gastas, sino cuánto recuperas: con el
                tracking adecuado, sabrás exactamente cuánto te cuesta cada
                cliente nuevo y si la inversión es rentable.
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
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Cómo gestionamos tu campaña de Google Ads
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                No lanzamos anuncios al azar y cruzamos los dedos. Cada
                campaña sigue un proceso de optimización continua:
              </p>
              <ol className="space-y-4 list-none pl-0">
                <li>
                  <strong>1. Investigación y configuración (Semana 1)</strong> — Analizamos
                  tu mercado, identificamos las keywords con mayor intención de
                  compra, estudiamos los anuncios de tu competencia y
                  configuramos la estructura de campaña. Definimos la
                  segmentación geográfica, los horarios de publicación y el
                  presupuesto diario óptimo.
                </li>
                <li>
                  <strong>2. Creación de anuncios y landing pages (Semana 1-2)</strong> — Redactamos
                  anuncios con copywriting orientado a la conversión, creamos
                  extensiones de llamada, ubicación y enlaces de sitio.
                  Optimizamos (o creamos) landing pages específicas para cada
                  grupo de anuncios, porque el anuncio es solo la mitad: la
                  página de destino cierra la venta.
                </li>
                <li>
                  <strong>3. Lanzamiento y optimización (Semana 2+)</strong> — Activamos
                  la campaña y monitorizamos el rendimiento diariamente.
                  Ajustamos pujas, añadimos keywords negativas (para no pagar
                  por clics irrelevantes) y hacemos pruebas A/B de anuncios
                  para maximizar la tasa de conversión.
                </li>
                <li>
                  <strong>4. Informe mensual y escalado</strong> — Cada mes te
                  presentamos un informe claro: impresiones, clics, coste por
                  clic, llamadas generadas, formularios enviados y coste por
                  lead. Con estos datos decidimos juntos si escalar la
                  inversión, ajustar la estrategia o explorar nuevas keywords.
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
              Caso real: 12€ por cada nuevo cliente
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                <strong>El problema:</strong> Una empresa de reformas en el
                Vallès Occidental acababa de empezar y no tenía reputación
                online ni posicionamiento SEO. Necesitaba clientes ya, no
                en 6 meses.
              </p>
              <p>
                <strong>La solución:</strong> Lanzamos campañas de Google Ads
                segmentadas por tipo de servicio (reformas integrales, reformas
                de baño, reformas de cocina) y por zona geográfica (Sabadell,
                Terrassa, Sant Cugat y alrededores). Creamos landing pages
                específicas para cada servicio con formulario de presupuesto
                y botón de llamada directa.
              </p>
              <p>
                <strong>El resultado:</strong> Con una inversión de 450€/mes
                en anuncios, la campaña generaba una media de 38 contactos
                cualificados al mes (llamadas + formularios). Con una tasa
                de cierre del 25%, eso son 9-10 clientes nuevos al mes. Coste
                por cliente: 45€ en una empresa donde el ticket medio de
                reforma supera los 5.000€. Un ROI de más de 100x.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Google Ads vs SEO: ¿cuál necesito?
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                No es una cuestión de elegir uno u otro. Son herramientas
                complementarias con ventajas diferentes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4"></th>
                      <th className="py-3 px-4 font-bold">Google Ads</th>
                      <th className="py-3 pl-4 font-bold">SEO Local</th>
                    </tr>
                  </thead>
                  <tbody className="text-base">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">Velocidad</td>
                      <td className="py-3 px-4">Resultados en 24-48h</td>
                      <td className="py-3 pl-4">Resultados en 3-6 meses</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">Coste</td>
                      <td className="py-3 px-4">Pagas por cada clic</td>
                      <td className="py-3 pl-4">Inversión mensual fija</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">Durabilidad</td>
                      <td className="py-3 px-4">Paras de pagar = desapareces</td>
                      <td className="py-3 pl-4">Resultados duraderos</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">Control</td>
                      <td className="py-3 px-4">Total (posición, horario, zona)</td>
                      <td className="py-3 pl-4">Indirecto (depende de Google)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Ideal para</td>
                      <td className="py-3 px-4">Negocios nuevos, temporadas altas</td>
                      <td className="py-3 pl-4">Estrategia a medio-largo plazo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Nuestra recomendación para negocios locales: empieza con ambos.
                Google Ads para tener clientes desde el día uno, y SEO local
                para construir una base sólida de tráfico orgánico. A medida que
                el SEO madura, puedes ir ajustando la inversión en Ads según
                tus necesidades.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
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

      <section className="py-20 bg-light">
        <Container>
          <FAQ
            faqs={faqsGoogleAds}
            title="Preguntas Frecuentes sobre Google Ads"
          />
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
