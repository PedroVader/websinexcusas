import type { Metadata } from "next";
import Image from "next/image";
import { Envelope, MapPin, Clock, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = generatePageMetadata({
  title: "Contacto · Hablemos de tu proyecto",
  description:
    "Contacta con Web Sin Excusas. Estamos en Barcelona y alrededores. Escríbenos por email, WhatsApp o rellena el formulario. Respondemos en 24h.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      {/* Hero con imagen de fondo */}
      <section className="relative bg-dark text-light overflow-hidden">
        <Image
          src="/images/contacto-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/80" />
        <Container className="relative py-16 sm:py-20">
          <h1 className="text-3xl font-bold font-heading sm:text-5xl">
            Hablemos de <span className="text-brand">tu proyecto</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl">
            ¿Tienes una idea? ¿Una duda? ¿Quieres saber cómo podemos ayudar a tu
            negocio? Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </Container>
      </section>

      <Container className="py-4">
        <Breadcrumbs items={[{ label: "Contacto" }]} />
      </Container>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Envíanos un mensaje
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Info de contacto */}
            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Otras formas de contacto
                </h2>

                <Card>
                  <div className="flex items-start gap-4">
                    <Envelope size={28} weight="duotone" className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading text-lg">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-brand font-medium hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                      <p className="mt-1 text-dark-secondary text-sm">
                        Respondemos en menos de 24 horas
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <WhatsappLogo size={28} weight="duotone" className="text-success shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading text-lg">WhatsApp</h3>
                      <p className="text-dark-secondary text-sm">
                        La forma más rápida de hablar con nosotros.
                      </p>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-success font-bold text-sm hover:underline"
                      >
                        Abrir WhatsApp →
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <MapPin size={28} weight="duotone" className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading text-lg">Ubicación</h3>
                      <p className="text-dark-secondary">
                        {siteConfig.sede}
                      </p>
                      <p className="mt-1 text-dark-secondary text-sm">
                        Reuniones presenciales o por videollamada
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <Clock size={28} weight="duotone" className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading text-lg">Horario</h3>
                      <p className="text-dark-secondary">
                        {siteConfig.horario}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
