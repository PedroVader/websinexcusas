import type { PlanPrecio } from "@/types";

export const preciosWeb: PlanPrecio[] = [
  {
    nombre: "Sin Excusas Starter",
    precio: "490€",
    descripcion: "Ideal para empezar. Tu web profesional en 10 días.",
    caracteristicas: [
      "Web one-page responsive",
      "Formulario de contacto + WhatsApp",
      "Certificado SSL",
      "1 idioma",
      "Diseño profesional personalizado",
      "Entrega en 10 días",
    ],
    cta: "Empezar con Starter",
  },
  {
    nombre: "Sin Excusas Pro",
    precio: "990€",
    descripcion: "La más elegida. Web completa con SEO incluido.",
    caracteristicas: [
      "Web 5-7 páginas",
      "SEO on-page optimizado",
      "Blog integrado",
      "2 idiomas",
      "Google My Business configurado",
      "Entrega en 15 días",
    ],
    destacado: true,
    cta: "Elegir Plan Pro",
  },
  {
    nombre: "Sin Excusas Total",
    precio: "1.990€",
    descripcion: "Para negocios que van en serio. Todo incluido.",
    caracteristicas: [
      "Web completa a medida",
      "Tienda online o sistema de reservas",
      "SEO avanzado",
      "Copywriting profesional",
      "3 idiomas",
      "Entrega en 21 días",
    ],
    cta: "Ir a por Todo",
  },
];

export const preciosSEO: PlanPrecio[] = [
  {
    nombre: "Visibilidad",
    precio: "150€",
    periodo: "/mes",
    descripcion: "El primer paso para aparecer en Google.",
    caracteristicas: [
      "Auditoría SEO inicial",
      "Google My Business optimizado",
      "2 artículos/mes",
      "Informe mensual de resultados",
    ],
    cta: "Empezar a Posicionar",
  },
  {
    nombre: "Crecimiento",
    precio: "350€",
    periodo: "/mes",
    descripcion: "Para negocios que quieren crecer de verdad.",
    caracteristicas: [
      "Todo lo de Visibilidad",
      "Link building local",
      "4 artículos/mes",
      "Optimización CTR",
      "Gestión de reseñas",
    ],
    destacado: true,
    cta: "Crecer Ahora",
  },
  {
    nombre: "Dominio Local",
    precio: "650€",
    periodo: "/mes",
    descripcion: "Domina tu zona. Sin compartir clientes.",
    caracteristicas: [
      "Todo lo de Crecimiento",
      "Contenido multimedia",
      "Estrategia comarcal",
      "Google Ads básico incluido",
      "Soporte prioritario",
    ],
    cta: "Dominar mi Zona",
  },
];
