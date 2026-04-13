import type { Servicio } from "@/types";

export const servicios: Servicio[] = [
  {
    slug: "diseno-web",
    nombre: "Diseño Web",
    descripcion:
      "Creamos páginas web profesionales que convierten visitantes en clientes. Diseño moderno, rápido y optimizado para Google. En 2-3 semanas tienes tu web online.",
    descripcionCorta: "Webs profesionales que traen clientes",
    icono: "monitor",
    precioDesde: "490€",
    caracteristicas: [
      "Diseño responsive (móvil, tablet, escritorio)",
      "Optimizada para velocidad y SEO",
      "Formulario de contacto + WhatsApp",
      "Certificado SSL incluido",
      "Panel de administración fácil",
      "Entrega en 2-3 semanas",
    ],
  },
  {
    slug: "seo-local",
    nombre: "SEO Local",
    descripcion:
      "Posicionamos tu negocio en Google para que te encuentren los clientes de tu zona. Google Maps, búsquedas locales, reseñas... todo lo que necesitas para dominar tu área.",
    descripcionCorta: "Que te encuentren en Google",
    icono: "map-pin",
    precioDesde: "150€/mes",
    caracteristicas: [
      "Auditoría SEO inicial completa",
      "Optimización de Google My Business",
      "Contenido optimizado mensual",
      "Link building local",
      "Informe de resultados mensual",
      "Gestión de reseñas",
    ],
  },
  {
    slug: "mantenimiento-web",
    nombre: "Mantenimiento Web",
    descripcion:
      "Nos encargamos de que tu web esté siempre actualizada, segura y funcionando. Actualizaciones, copias de seguridad, soporte técnico... tú céntrate en tu negocio.",
    descripcionCorta: "Tu web siempre al día",
    icono: "wrench",
    precioDesde: "50€/mes",
    caracteristicas: [
      "Actualizaciones de seguridad",
      "Copias de seguridad diarias",
      "Monitorización 24/7",
      "Soporte técnico prioritario",
      "Pequeñas modificaciones incluidas",
      "Informe mensual de estado",
    ],
  },
  {
    slug: "google-ads",
    nombre: "Google Ads",
    descripcion:
      "Campañas de Google Ads para tu negocio local. Aparece en los primeros resultados desde el día uno mientras el SEO orgánico hace su trabajo a medio plazo.",
    descripcionCorta: "Resultados desde el día uno",
    icono: "target",
    precioDesde: "200€/mes",
    caracteristicas: [
      "Configuración de campañas optimizada",
      "Segmentación geográfica precisa",
      "Palabras clave de alta intención",
      "Landing pages optimizadas",
      "Optimización continua del presupuesto",
      "Informe de ROI mensual",
    ],
  },
];
