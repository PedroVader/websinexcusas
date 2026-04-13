import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Hablamos de tu negocio, tus objetivos y lo que necesitas. 30 minutos por teléfono o videollamada.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos un diseño a medida para tu negocio. Lo revisamos contigo y ajustamos hasta que esté perfecto.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tu web: rápida, responsive y optimizada para SEO. Tú ves el progreso en tiempo real.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Publicamos tu web, configuramos analytics y te enseñamos a gestionarla. Tu web, en tus manos.",
  },
  {
    number: "05",
    title: "SEO Mensual",
    description:
      "Nos quedamos cada mes posicionándote en Google. Contenido, enlaces, reseñas... todo lo que necesitas.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Así Trabajamos — Sin Rodeos"
            subtitle='En 2-3 semanas tienes tu web online. Sin dramas.'
          />
        </ScrollReveal>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 80}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-dark font-bold font-heading text-sm shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                  <p className="mt-2 text-dark-secondary">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
