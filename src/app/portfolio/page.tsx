import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
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

const coverImages = [
  "/images/servicio-code.jpg",
  "/images/servicio-ai.jpg",
  "/images/servicios-bg.jpg",
  "/images/hero-bg.jpg",
  "/images/servicio-code.jpg",
  "/images/servicio-ai.jpg",
];

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
      <Hero
        title="Nuestro"
        highlight="Portfolio"
        subtitle="Webs reales para negocios reales. Cada proyecto tiene un objetivo: traer más clientes."
        bgImage="/images/servicio-code.jpg"
      />

      <Container className="py-4">
        <Breadcrumbs items={[{ label: "Portfolio" }]} />
      </Container>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, i) => (
              <Card key={proyecto.titulo}>
                <div className="relative aspect-video rounded-lg mb-4 overflow-hidden bg-gray-100">
                  <Image
                    src={coverImages[i % coverImages.length]}
                    alt={proyecto.titulo}
                    fill
                    className="object-cover"
                  />
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
