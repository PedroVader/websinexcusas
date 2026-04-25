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
import { faqsDisenoWeb } from "@/lib/faq-templates";

export const metadata: Metadata = generatePageMetadata({
  title: "Diseño Web Profesional · Webs desde 590€",
  description:
    "Diseño web profesional para negocios de Barcelona. Webs rápidas, responsive y optimizadas para Google. Desde 590€ con entrega en 10-21 días.",
  path: "/servicios/diseno-web",
});

export default function DisenoWebPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Diseño Web Profesional"
        description="Diseño y desarrollo de páginas web profesionales para negocios locales de la provincia de Barcelona."
        areaServed="Provincia de Barcelona"
        priceFrom="590"
        faqs={faqsDisenoWeb}
      />

      <Hero
        badge="Servicio principal"
        title="Diseño Web Profesional"
        highlight="para tu negocio"
        subtitle="No hacemos webs bonitas que nadie ve. Hacemos webs que aparecen en Google y traen clientes. Desde 590€, en 2-3 semanas."
        bgImage="/images/servicio-code.jpg"
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
              <p>
                ¿Cuánto cuesta una web profesional? Depende de lo que necesites,
                pero nuestros precios empiezan en 590€ para una web one-page y
                llegan hasta 2.490€ para una web completa con tienda online. Sin
                letra pequeña, sin costes ocultos, sin sorpresas a final de mes.
                Lo que ves es lo que pagas.
              </p>
              <p>
                Llevamos años creando webs para pymes en Barcelona y alrededores:
                desde peluquerías en Sabadell hasta clínicas dentales en Terrassa,
                pasando por restaurantes en Badalona y talleres en Mataró. Conocemos
                el tejido empresarial local y sabemos qué necesita cada negocio para
                destacar en su zona.
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

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Nuestro proceso: de la idea a tu web en 3 semanas
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                No improvisamos. Cada web que creamos sigue un proceso probado
                que garantiza resultados y elimina sorpresas. Así trabajamos:
              </p>
              <ol className="space-y-4 list-none pl-0">
                <li>
                  <strong>1. Briefing y estrategia (Día 1-2)</strong> — Nos reunimos
                  contigo (presencial o videollamada) para entender tu negocio, tu
                  público objetivo y tus competidores. Definimos la estructura de
                  la web, los mensajes clave y los objetivos de conversión. No
                  empezamos a diseñar hasta que tenemos claro el &quot;para qué&quot;.
                </li>
                <li>
                  <strong>2. Diseño y prototipo (Día 3-7)</strong> — Creamos un
                  prototipo visual de tu web para que veas cómo quedará antes de
                  programar nada. Incluimos hasta 2 rondas de revisiones. Tú
                  apruebas el diseño antes de que toquemos una sola línea de código.
                </li>
                <li>
                  <strong>3. Desarrollo y contenido (Día 8-16)</strong> — Programamos
                  tu web con tecnología moderna (Next.js), optimizamos la velocidad
                  de carga, configuramos el SEO on-page, integramos formularios y
                  WhatsApp, y subimos todo el contenido. Cada decisión técnica busca
                  que tu web cargue rápido y posicione bien.
                </li>
                <li>
                  <strong>4. Revisión y lanzamiento (Día 17-21)</strong> — Revisamos
                  juntos la web terminada, hacemos los ajustes finales, configuramos
                  Analytics y Search Console, y publicamos. Te damos una sesión de
                  formación para que puedas gestionar el contenido de forma autónoma.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <ProcessTimeline />

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Caso real: de cero a 40 contactos/mes en 3 meses
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                <strong>El problema:</strong> Una clínica de fisioterapia en
                Sabadell llevaba 3 años sin web. Dependían exclusivamente del
                boca a boca y de un perfil de Instagram con 200 seguidores. Los
                pacientes nuevos se iban a competidores que sí aparecían en Google.
              </p>
              <p>
                <strong>La solución:</strong> Diseñamos una web multipágina con
                páginas de servicio individuales (fisioterapia deportiva, rehabilitación,
                suelo pélvico), blog con artículos optimizados para SEO, sistema de
                reserva online y ficha de Google Business Profile completamente
                optimizada.
              </p>
              <p>
                <strong>El resultado:</strong> En 3 meses, la web generaba 40+
                contactos mensuales (formularios + llamadas), aparecían en el top 3
                de Google Maps para &quot;fisioterapia Sabadell&quot; y habían
                reducido su dependencia de Instagram como única fuente de captación.
                El coste total de la web se amortizó en menos de 6 semanas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              ¿Por qué Web Sin Excusas y no otra agencia?
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                Hay cientos de agencias web en Barcelona. La mayoría te venderán
                una web con WordPress, una plantilla retocada y un &quot;ya te
                llamamos&quot;. Esto es lo que hacemos diferente:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Somos locales de verdad</strong> — Oficina en Sabadell,
                  reuniones presenciales, conocemos el mercado de la provincia de
                  Barcelona. No somos una agencia de Madrid que &quot;también
                  trabaja en Barcelona&quot;.
                </li>
                <li>
                  <strong>Precios cerrados, no presupuestos abiertos</strong> — Sabes
                  exactamente cuánto pagas antes de empezar. Sin horas extra, sin
                  &quot;esto no estaba incluido&quot;, sin facturas sorpresa.
                </li>
                <li>
                  <strong>Tecnología moderna, no plantillas</strong> — Usamos
                  Next.js, la misma tecnología que usan Netflix o TikTok. Webs
                  ultrarrápidas que Google adora y que tus visitantes disfrutan.
                </li>
                <li>
                  <strong>Obsesión por los resultados</strong> — No medimos el
                  éxito en &quot;qué bonita ha quedado&quot;, sino en cuántos
                  clientes te trae. Cada decisión de diseño está orientada a la
                  conversión.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

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
            faqs={faqsDisenoWeb}
            title="Preguntas Frecuentes sobre Diseño Web"
          />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
