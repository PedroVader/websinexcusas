import type { FAQ, Municipio } from "@/types";

export function getFAQsMunicipio(municipio: Municipio): FAQ[] {
  return municipio.faqsUnicas;
}

export const faqsGenerales: FAQ[] = [
  {
    pregunta: "¿Cuánto cuesta una página web profesional?",
    respuesta:
      "Nuestros precios empiezan desde 490€ para una web one-page hasta 1.990€ para una web completa con tienda online. Cada plan incluye diseño responsive, SSL y optimización básica de SEO.",
  },
  {
    pregunta: "¿Cuánto tarda en estar lista la web?",
    respuesta:
      "Entre 10 y 21 días según el plan elegido. Trabajamos con plazos claros y definidos desde el primer día.",
  },
  {
    pregunta: "¿Hacéis webs solo en Barcelona?",
    respuesta:
      "Nos especializamos en negocios de la provincia de Barcelona, pero podemos trabajar con clientes de toda España. Las reuniones pueden ser presenciales (en Sabadell) o por videollamada.",
  },
  {
    pregunta: "¿Qué incluye el mantenimiento mensual?",
    respuesta:
      "Actualizaciones de seguridad, copias de seguridad diarias, monitorización 24/7, soporte técnico y pequeñas modificaciones incluidas. Desde 50€/mes.",
  },
  {
    pregunta: "¿Necesito contratar SEO además de la web?",
    respuesta:
      "La web incluye SEO on-page básico. Pero si quieres aparecer en las primeras posiciones de Google de forma consistente, el SEO local mensual es lo que marca la diferencia. Desde 150€/mes.",
  },
  {
    pregunta: "¿Ofrecéis servicio de Google Ads?",
    respuesta:
      "Sí, gestionamos campañas de Google Ads para que aparezcas en los primeros resultados desde el día uno, mientras el SEO orgánico trabaja a medio plazo. Desde 200€/mes + presupuesto de anuncios.",
  },
];
