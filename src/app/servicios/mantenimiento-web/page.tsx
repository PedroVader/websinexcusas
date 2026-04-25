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
import { faqsMantenimiento } from "@/lib/faq-templates";

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
        faqs={faqsMantenimiento}
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
              <p>
                ¿Cuánto cuesta mantener una web? Menos de lo que crees, y mucho
                menos de lo que cuesta arreglar los problemas cuando no la mantienes.
                Nuestro servicio de mantenimiento web cubre todo lo necesario
                por 50€/mes: desde las actualizaciones de seguridad hasta el
                soporte técnico directo por WhatsApp. Sin permanencia, sin
                sorpresas.
              </p>
              <p>
                Piénsalo así: tu web es tu escaparate digital. Si la puerta de
                tu tienda estuviera rota, ¿la dejarías así? Una web lenta, con
                errores o con el certificado de seguridad caducado transmite
                exactamente eso: dejadez. Y los clientes lo notan. Google
                también: penaliza las webs lentas e inseguras bajándolas en
                los resultados de búsqueda.
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
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Qué incluye el mantenimiento web paso a paso
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                Nuestro servicio de mantenimiento no es un &quot;ya te llamamos
                si pasa algo&quot;. Es un trabajo proactivo y continuo para que
                tu web nunca te dé problemas:
              </p>
              <ol className="space-y-4 list-none pl-0">
                <li>
                  <strong>Cada día:</strong> Ejecutamos copias de seguridad
                  automáticas y monitorizamos que tu web esté online y
                  accesible. Si detectamos una caída, actuamos antes de que
                  afecte a tus clientes.
                </li>
                <li>
                  <strong>Cada semana:</strong> Revisamos y aplicamos
                  actualizaciones de seguridad del CMS, plugins y dependencias.
                  Verificamos que no haya errores de compatibilidad tras cada
                  actualización.
                </li>
                <li>
                  <strong>Cada mes:</strong> Analizamos el rendimiento de tu
                  web (velocidad, errores, tráfico), realizamos las pequeñas
                  modificaciones que necesites (textos, fotos, ajustes) y te
                  enviamos un informe detallado del estado de tu web.
                </li>
                <li>
                  <strong>Cuando lo necesites:</strong> Soporte técnico
                  prioritario por WhatsApp y email con respuesta en menos de
                  4 horas laborables. Si algo falla, lo arreglamos. Si tienes
                  una duda, te la resolvemos.
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
              Caso real: una web hackeada que costó 1.200€
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                <strong>El problema:</strong> Un restaurante en Badalona dejó
                su web WordPress sin actualizar durante 14 meses. Un día,
                Google la marcó como &quot;sitio peligroso&quot; y dejó de
                mostrarla en los resultados. La web había sido infectada con
                malware que redirigía a los visitantes a páginas fraudulentas.
                El dueño ni se había enterado.
              </p>
              <p>
                <strong>Lo que costó arreglarlo:</strong> 800€ en limpieza de
                malware y restauración, 400€ en rediseño parcial (parte de la
                web se había corrompido y no había backups), más 3 semanas sin
                aparecer en Google hasta que se levantó la penalización manual.
                Total: 1.200€ + incontables clientes perdidos durante 3 semanas.
              </p>
              <p>
                <strong>Lo que habría costado prevenirlo:</strong> 50€/mes de
                mantenimiento. En 14 meses, 700€. Menos de lo que costó el
                arreglo. Y sin perder un solo día de visibilidad en Google.
                Desde entonces, este cliente tiene contratado nuestro
                mantenimiento. No ha vuelto a tener un solo problema.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Mantenimiento web: inversión vs riesgo
            </h2>
            <div className="prose prose-lg text-dark-secondary space-y-4">
              <p>
                ¿Por qué necesitas mantenimiento web si tu web &quot;ya
                funciona&quot;? Porque los costes de NO mantenerla superan
                con creces los 50€/mes de prevención:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Web hackeada:</strong> Desde 300€ en limpieza +
                  pérdida de posicionamiento en Google durante semanas.
                </li>
                <li>
                  <strong>Web caída sin backup:</strong> Desde 500€ en
                  reconstrucción si no hay copia de seguridad reciente.
                </li>
                <li>
                  <strong>SSL caducado:</strong> Los navegadores muestran
                  &quot;sitio no seguro&quot; y tus visitantes huyen. Google
                  baja tu posicionamiento.
                </li>
                <li>
                  <strong>Web lenta por falta de optimización:</strong> Cada
                  segundo extra de carga reduce las conversiones un 7%.
                  Los clientes no esperan.
                </li>
              </ul>
              <p>
                El mantenimiento web no es un gasto: es un seguro para tu
                inversión digital. 50€/mes por la tranquilidad de saber que
                tu web siempre está actualizada, segura y funcionando. Sin
                permanencia: si no ves el valor, cancelas y listo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mt-0 max-w-2xl mx-auto text-center">
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

      <section className="py-20 bg-light">
        <Container>
          <FAQ
            faqs={faqsMantenimiento}
            title="Preguntas Frecuentes sobre Mantenimiento Web"
          />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
