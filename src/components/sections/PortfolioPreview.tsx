import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";


const proyectos = [
  {
    domain: "disstands.com",
    url: "https://disstands.com",
    sector: "Pavimentos",
    descripcion: "Venta e instalación profesional de moquetas, suelos y césped artificial en Barcelona.",
  },
  {
    domain: "limpieza.ai",
    url: "https://limpieza.ai",
    sector: "Limpieza",
    descripcion: "Servicios de limpieza profesional para hogares, oficinas y comunidades en Barcelona.",
  },
  {
    domain: "austinroofingcompany.com",
    url: "https://austinroofingcompany.com",
    sector: "Tejados",
    descripcion: "Reparación, instalación y sustitución de tejados residenciales y comerciales en Austin, Texas.",
  },
  {
    domain: "mumscleaningserviceschicago.com",
    url: "https://mumscleaningserviceschicago.com",
    sector: "Limpieza",
    descripcion: "Limpieza profesional de hogares, apartamentos y limpiezas profundas en Chicago.",
  },
  {
    domain: "mussvap.com",
    url: "https://mussvap.com",
    sector: "E-commerce",
    descripcion: "Marca de dispositivos de vapeo con venta online y en tiendas físicas en España.",
  },
  {
    domain: "astorialightingco.com",
    url: "https://astorialightingco.com",
    sector: "Iluminación",
    descripcion: "Instalación profesional de sistemas de iluminación exterior para propiedades residenciales y comerciales.",
  },
  {
    domain: "javiermeizoso.com",
    url: "https://javiermeizoso.com",
    sector: "Personal",
    descripcion: "Web personal de empresario e inversor con iniciativas empresariales, culturales y sociales.",
  },
  {
    domain: "goatdeal.io",
    url: "https://goatdeal.io",
    sector: "Plataforma",
    descripcion: "Plataforma de monetización para creadores de contenido mediante afiliación y suscripciones.",
  },
  {
    domain: "freedomgreenclean.com",
    url: "https://freedomgreenclean.com",
    sector: "Limpieza Eco",
    descripcion: "Servicios de limpieza ecológica de alfombras, tapicería y superficies en Tampa Bay, Florida.",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Trabajos Realizados"
            subtitle="Cada web que hacemos tiene un objetivo: traer clientes. Mira algunos de nuestros proyectos."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, i) => (
            <ScrollReveal key={proyecto.domain} delay={i * 80}>
              <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                <Card className="h-full group">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Badge variant="brand">{proyecto.sector}</Badge>
                    <ArrowSquareOut size={18} className="text-gray-400 group-hover:text-brand transition-colors shrink-0" />
                  </div>
                  <h3 className="text-lg font-bold font-heading group-hover:text-brand transition-colors">
                    {proyecto.domain}
                  </h3>
                  <p className="mt-2 text-sm text-dark-secondary">
                    {proyecto.descripcion}
                  </p>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
