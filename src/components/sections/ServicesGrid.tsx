import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { servicios } from "@/data/servicios";
import type { IconName } from "@/components/ui/Icon";

export function ServicesGrid() {
  return (
    <section className="py-20 bg-light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Lo que Hacemos en Web Sin Excusas"
            highlight="Web Sin Excusas"
            subtitle="No hacemos webs para decorar. Las hacemos para vender."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, i) => (
            <ScrollReveal key={servicio.slug} delay={i * 100}>
              <Link href={`/servicios/${servicio.slug}`}>
                <Card className="h-full group">
                  <Icon name={servicio.icono as IconName} size={40} weight="duotone" className="text-brand" />
                  <h3 className="mt-4 text-xl font-bold font-heading group-hover:text-brand transition-colors">
                    {servicio.nombre}
                  </h3>
                  <p className="mt-2 text-dark-secondary text-sm">
                    {servicio.descripcionCorta}
                  </p>
                  <p className="mt-4 text-brand font-bold">
                    Desde {servicio.precioDesde}
                  </p>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
