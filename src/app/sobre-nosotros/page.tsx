import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Sobre Nosotros · Quiénes Somos",
  description:
    "Web Sin Excusas es la marca de diseño web local de Fast Horizons SL, con sede en Sabadell, Barcelona. Especializados en webs para negocios locales.",
  path: "/sobre-nosotros",
});

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="bg-dark text-light py-16">
        <Container>
          <h1 className="text-4xl font-bold font-heading sm:text-5xl">
            Sobre <span className="text-brand">Nosotros</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Quiénes somos, por qué hacemos esto, y por qué tu negocio nos importa.
          </p>
        </Container>
      </section>

      <Container className="py-4">
        <Breadcrumbs items={[{ label: "Sobre Nosotros" }]} />
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Web Sin Excusas. El nombre lo dice todo.
              </h2>
              <div className="text-dark-secondary space-y-4 text-lg">
                <p>
                  Nacimos con una misión simple: que ningún negocio local de la
                  provincia de Barcelona se quede sin web por falta de tiempo,
                  conocimiento o presupuesto. Porque en 2026, no tener web ya no
                  es una opción. Es una excusa.
                </p>
                <p>
                  Somos la marca de diseño web local de{" "}
                  <strong>{siteConfig.empresa}</strong>, con sede en{" "}
                  <strong>Sabadell, Barcelona</strong>. Un equipo pequeño pero
                  especializado que entiende las necesidades reales de los negocios
                  locales porque vivimos y trabajamos en la misma provincia que tú.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Lo que nos diferencia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold font-heading text-lg">Somos de aquí</h3>
                  <p className="mt-2 text-dark-secondary text-sm">
                    Conocemos la provincia de Barcelona, sus municipios, su tejido
                    comercial. No somos una agencia remota que no sabe dónde está
                    tu negocio.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold font-heading text-lg">Hablamos claro</h3>
                  <p className="mt-2 text-dark-secondary text-sm">
                    Nada de jerga técnica, ni presupuestos opacos. Te explicamos
                    todo en lenguaje normal y te damos precios cerrados.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold font-heading text-lg">Nos quedamos</h3>
                  <p className="mt-2 text-dark-secondary text-sm">
                    No hacemos tu web y desaparecemos. Nos quedamos cada mes
                    cuidando tu presencia online con mantenimiento y SEO.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold font-heading text-lg">Resultados reales</h3>
                  <p className="mt-2 text-dark-secondary text-sm">
                    No vendemos &quot;diseño web&quot;. Vendemos clientes nuevos para
                    tu negocio. Si tu web no te trae clientes, no está bien hecha.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Datos de empresa
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-gray-500">Nombre comercial</dt>
                    <dd className="font-bold">{siteConfig.name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Razón social</dt>
                    <dd className="font-bold">{siteConfig.empresa}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">CIF</dt>
                    <dd className="font-bold">{siteConfig.cif}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Sede</dt>
                    <dd className="font-bold">{siteConfig.sede}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Email</dt>
                    <dd className="font-bold">{siteConfig.email}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Teléfono</dt>
                    <dd className="font-bold">{siteConfig.telefono}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="¿Preparado para dar el paso?"
        subtitle="Cuéntanos qué necesita tu negocio. Sin compromiso."
        variant="brand"
      />
    </>
  );
}
