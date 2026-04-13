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
  title: "Mantenimiento Web · Desde 50€/mes",
  description:
    "Mantenimiento web profesional: actualizaciones, copias de seguridad, monitorización 24/7 y soporte técnico. Desde 50€/mes.",
  path: "/servicios/mantenimiento-web",
});

const serviciosMantenimiento: { titulo: string; descripcion: string; icono: IconName }[] = [
  {
    titulo: "Actualizaciones de seguridad",
    descripcion: "Mantenemos tu web actualizada y protegida contra vulnerabilidades. Sin que tengas que preocuparte de nada.",
    icono: "shield-check",
  },
  {
    titulo: "Copias de seguridad diarias",
    descripcion: "Backup automático cada día. Si algo falla, restauramos tu web en minutos.",
    icono: "floppy-disk",
  },
  {
    titulo: "Monitorización 24/7",
    descripcion: "Vigilamos tu web las 24 horas. Si se cae, nos enteramos antes que tú y la levantamos.",
    icono: "broadcast",
  },
  {
    titulo: "Soporte técnico prioritario",
    descripcion: "¿Un problema? ¿Una duda? Estamos a un WhatsApp o email. Respuesta en menos de 4 horas.",
    icono: "lifebuoy",
  },
  {
    titulo: "Pequeñas modificaciones",
    descripcion: "Cambiar un texto, actualizar una foto, añadir un teléfono... las pequeñas cosas, incluidas.",
    icono: "pencil-simple",
  },
  {
    titulo: "Informe mensual",
    descripcion: "Cada mes te enviamos un resumen: visitas, estado de la web, acciones realizadas.",
    icono: "chart-bar",
  },
];

export default function MantenimientoWebPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Mantenimiento Web"
        description="Servicio de mantenimiento web profesional con actualizaciones, backups y soporte técnico."
        areaServed="Provincia de Barcelona"
        priceFrom="50"
      />

      <Hero
        badge="Tranquilidad total"
        title="Mantenimiento Web"
        highlight="— Tú Céntrate en tu Negocio"
        subtitle="Nos encargamos de que tu web esté siempre actualizada, segura y funcionando. Tú dedica tu tiempo a lo que importa: tus clientes. Desde 50€/mes."
        bgImage="/images/servicio-code.jpg"
      />

      <Container className="py-4">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: "Mantenimiento Web" },
          ]}
        />
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Tu web necesita mantenimiento. Punto.
            </h2>
            <div className="text-dark-secondary space-y-4 text-lg">
              <p>
                Una web sin mantenimiento es como un coche sin revisiones: funciona
                hasta que deja de funcionar. Y cuando deja de funcionar, el
                problema es más caro de arreglar.
              </p>
              <p>
                Actualizaciones de seguridad, copias de seguridad, velocidad,
                compatibilidad... Son cosas que no ves, pero que si fallan, tus
                clientes sí lo notan. Y se van.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosMantenimiento.map((s) => (
              <Card key={s.titulo}>
                <Icon name={s.icono} size={40} weight="duotone" className="text-brand" />
                <h3 className="mt-3 text-lg font-bold font-heading">{s.titulo}</h3>
                <p className="mt-2 text-sm text-dark-secondary">{s.descripcion}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="rounded-2xl bg-dark text-light p-8">
              <h3 className="text-2xl font-bold font-heading">
                Mantenimiento Web
              </h3>
              <p className="mt-2 text-4xl font-bold font-heading text-brand">
                50€<span className="text-lg text-gray-400">/mes</span>
              </p>
              <p className="mt-2 text-gray-400">
                Todo lo que necesitas para dormir tranquilo.
              </p>
              <ul className="mt-6 space-y-2 text-left max-w-md mx-auto">
                {serviciosMantenimiento.map((s) => (
                  <li key={s.titulo} className="flex items-center gap-2 text-sm">
                    <Check size={16} weight="bold" className="text-success" />
                    <span>{s.titulo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
