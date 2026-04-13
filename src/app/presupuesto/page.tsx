import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Pide Presupuesto Gratis · Respondemos en 24h",
  description:
    "Solicita un presupuesto gratis para tu web o servicio SEO. Rellena el formulario y te respondemos en menos de 24 horas. Sin compromiso.",
  path: "/presupuesto",
});

export default function PresupuestoPage() {
  return (
    <>
      <section className="bg-dark text-light py-16">
        <Container>
          <h1 className="text-4xl font-bold font-heading sm:text-5xl">
            Pide tu Presupuesto{" "}
            <span className="text-brand">Gratis</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Rellena el formulario con los datos de tu negocio y te enviamos un
            presupuesto personalizado en menos de 24 horas. Sin compromiso, sin
            letra pequeña.
          </p>
        </Container>
      </section>

      <Container className="py-4">
        <Breadcrumbs items={[{ label: "Presupuesto" }]} />
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
