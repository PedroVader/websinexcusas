import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/sections/CTABanner";
import type { ProyectoPortfolio } from "@/types";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio · Trabajos Realizados",
  description:
    "Mira las webs que hemos creado para negocios locales de Barcelona. Restaurantes, clínicas, talleres y más.",
  path: "/portfolio",
});

const proyectos: ProyectoPortfolio[] = [
  {
    titulo: "Restaurante Can Pere",
    descripcion:
      "Web con carta online, sistema de reservas y galería fotográfica. Diseño que refleja la esencia mediterránea del local con colores cálidos y tipografías elegantes.",
    sector: "Hostelería",
    municipio: "Sabadell",
    resultados: "+45% reservas online en 3 meses",
  },
  {
    titulo: "Clínica Dental Somriure",
    descripcion:
      "Web profesional con sistema de citas online, fichas detalladas de especialistas y blog de salud dental. SEO local optimizado para captar pacientes de la zona.",
    sector: "Salud",
    municipio: "Terrassa",
    resultados: "+60% nuevos pacientes desde Google",
  },
  {
    titulo: "Taller AutoPro",
    descripcion:
      "Web corporativa con formulario de cita previa, sección de servicios detallada y integración con Google Maps. Diseño industrial y profesional.",
    sector: "Automoción",
    municipio: "Badalona",
    resultados: "+35% solicitudes de presupuesto",
  },
  {
    titulo: "Inmobiliaria Costa Maresme",
    descripcion:
      "Web con catálogo de propiedades, filtros avanzados de búsqueda y formularios de contacto por propiedad. Integración con portal inmobiliario.",
    sector: "Inmobiliaria",
    municipio: "Mataró",
    resultados: "+50% contactos cualificados",
  },
  {
    titulo: "Estética Bellesa Natural",
    descripcion:
      "Web elegante con catálogo de tratamientos, reserva online y galería de resultados. Diseño premium que transmite exclusividad y confianza.",
    sector: "Estética",
    municipio: "Sant Cugat del Vallès",
    resultados: "+40% nuevas clientas desde web",
  },
  {
    titulo: "Fontanería Ràpid",
    descripcion:
      "Web de servicios con formulario de urgencias 24h, listado de servicios y zona de cobertura. Optimizada para búsquedas locales de emergencia.",
    sector: "Servicios Técnicos",
    municipio: "Rubí",
    resultados: "+70% llamadas de urgencia",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-dark text-light py-16">
        <Container>
          <h1 className="text-4xl font-bold font-heading sm:text-5xl">
            Nuestro <span className="text-brand">Portfolio</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Webs reales para negocios reales. Cada proyecto tiene un objetivo:
            traer más clientes.
          </p>
        </Container>
      </section>

      <Container className="py-4">
        <Breadcrumbs items={[{ label: "Portfolio" }]} />
      </Container>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <Card key={proyecto.titulo}>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Preview del proyecto</span>
                </div>
                <div className="flex gap-2 mb-3">
                  <Badge variant="brand">{proyecto.sector}</Badge>
                  <Badge variant="dark">{proyecto.municipio}</Badge>
                </div>
                <h2 className="text-xl font-bold font-heading">
                  {proyecto.titulo}
                </h2>
                <p className="mt-2 text-sm text-dark-secondary">
                  {proyecto.descripcion}
                </p>
                <p className="mt-4 text-sm font-bold text-success flex items-center gap-1">
                  <CheckCircle size={18} weight="fill" /> {proyecto.resultados}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="¿Tu negocio podría ser el siguiente?"
        subtitle="Cuéntanos qué necesitas y te mostramos cómo podemos ayudarte."
        variant="brand"
      />
    </>
  );
}
