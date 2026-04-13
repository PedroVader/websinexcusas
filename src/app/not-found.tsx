import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <p className="text-6xl font-bold text-brand font-heading">404</p>
        <h1 className="mt-4 text-3xl font-bold font-heading">
          Página no encontrada
        </h1>
        <p className="mt-4 text-lg text-dark-secondary max-w-md mx-auto">
          Esta página no existe o ha sido movida. Pero tranquilo, tu web con
          nosotros sí va a funcionar.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Volver al Inicio
          </Button>
          <Button href="/presupuesto" variant="outline">
            Pide Presupuesto
          </Button>
        </div>
      </Container>
    </section>
  );
}
