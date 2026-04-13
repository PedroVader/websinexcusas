import Link from "next/link";
import { Container } from "@/components/ui/Container";
import municipiosData from "@/data/municipios.json";
import type { Municipio } from "@/types";

interface NearbyMunicipalitiesProps {
  currentSlug: string;
  municipiosCercanos: string[];
}

export function NearbyMunicipalities({
  currentSlug,
  municipiosCercanos,
}: NearbyMunicipalitiesProps) {
  const allMunicipios = municipiosData as Municipio[];
  const otherMunicipios = allMunicipios.filter(
    (m) => municipiosCercanos.includes(m.slug)
  );

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <h2 className="text-2xl font-bold font-heading text-center mb-8">
          También ofrecemos Diseño Web en...
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {otherMunicipios.map((m) => (
            <Link
              key={m.slug}
              href={`/diseno-web-${m.slug}`}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-dark-secondary hover:text-brand hover:border-brand border border-gray-200 transition-colors"
            >
              Diseño Web en {m.nombre}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
