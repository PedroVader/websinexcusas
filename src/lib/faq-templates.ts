import type { FAQ, Municipio } from "@/types";

export function getFAQsMunicipio(municipio: Municipio): FAQ[] {
  return [...municipio.faqsUnicas, ...faqsGenerales];
}

export const faqsGenerales: FAQ[] = [
  {
    pregunta: "¿Cuánto cuesta una página web profesional?",
    respuesta:
      "Nuestros precios empiezan desde 590€ para una web one-page hasta 2.490€ para una web completa con tienda online. Cada plan incluye diseño responsive, SSL y optimización básica de SEO.",
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

export const faqsDisenoWeb: FAQ[] = [
  {
    pregunta: "¿Cuánto cuesta una web profesional para una pyme?",
    respuesta:
      "Para una pyme local, una web profesional oscila entre 590€ y 1.490€ según las necesidades. Nuestro plan Esencial (590€) cubre una web one-page perfecta para negocios que empiezan online. El plan Profesional (990€) incluye múltiples páginas, blog y formularios avanzados. Y el plan Premium (1.490€) añade e-commerce básico y funcionalidades a medida. Todos incluyen diseño responsive, SSL, SEO on-page y hosting del primer año.",
  },
  {
    pregunta: "¿Qué diferencia hay entre una web one-page y una web multipágina?",
    respuesta:
      "Una web one-page concentra toda la información en una sola página con secciones (ideal para negocios simples, freelancers o como carta de presentación). Una web multipágina tiene páginas separadas para servicios, sobre nosotros, blog, etc. Es mejor para negocios que ofrecen varios servicios, quieren posicionar más keywords en Google o necesitan un blog para atraer tráfico. Si tienes dudas, te asesoramos gratis sobre cuál te conviene más.",
  },
  {
    pregunta: "¿Puedo editar la web yo mismo después?",
    respuesta:
      "Sí. Todas nuestras webs incluyen un panel de gestión sencillo donde puedes cambiar textos, fotos y contenido sin conocimientos técnicos. Te damos una sesión de formación incluida para que seas autónomo. Y si algún día te atascas, nuestro soporte está a un WhatsApp.",
  },
  {
    pregunta: "¿Mi web se verá bien en móviles?",
    respuesta:
      "Absolutamente. Más del 70% del tráfico web en España viene de dispositivos móviles, por eso todas nuestras webs son responsive por defecto. Las diseñamos primero para móvil (mobile-first) y luego adaptamos a tablet y escritorio. Además, optimizamos la velocidad de carga para conexiones móviles.",
  },
  {
    pregunta: "¿Qué pasa si no me gusta el diseño?",
    respuesta:
      "Antes de empezar a programar, te presentamos un diseño previo (mockup) para tu aprobación. Incluimos hasta 2 rondas de revisiones en todos los planes. En la práctica, como trabajamos con un briefing detallado al inicio, el 90% de los clientes aprueban el diseño en la primera ronda.",
  },
  {
    pregunta: "¿Incluís dominio y hosting?",
    respuesta:
      "Incluimos el hosting del primer año en todos los planes. El dominio (.es o .com) te ayudamos a registrarlo y configurarlo. Si ya tienes dominio, lo migramos sin coste. A partir del segundo año, el hosting tiene un coste de renovación que te detallamos antes de empezar.",
  },
];

export const faqsSEOLocal: FAQ[] = [
  {
    pregunta: "¿Qué es exactamente el SEO local?",
    respuesta:
      "El SEO local es el conjunto de técnicas para que tu negocio aparezca en los resultados de Google cuando alguien busca tus servicios en tu zona. Por ejemplo, si tienes una peluquería en Terrassa, el SEO local hace que aparezcas cuando alguien busca «peluquería en Terrassa» o «peluquería cerca de mí». Incluye optimizar tu ficha de Google Business Profile, tu web, las reseñas y las citas locales (directorios).",
  },
  {
    pregunta: "¿Cómo puedo aparecer en Google Maps?",
    respuesta:
      "Para aparecer en Google Maps necesitas una ficha de Google Business Profile verificada y optimizada. Nosotros nos encargamos de crear o reclamar tu ficha, completar toda la información (categorías, horarios, fotos, servicios), responder reseñas y publicar actualizaciones periódicas. Con el SEO local trabajamos las señales que Google usa para decidir quién sale en el «pack local» de 3 resultados del mapa.",
  },
  {
    pregunta: "¿Cuánto tarda en posicionar una web en Google?",
    respuesta:
      "Los primeros resultados del SEO local suelen verse entre 3 y 6 meses, dependiendo de la competencia en tu sector y zona. Para keywords de baja competencia (como servicios específicos en ciudades medianas), los resultados pueden llegar antes. Negocios en sectores competitivos (abogados, dentistas en Barcelona centro) pueden necesitar 6-12 meses. Por eso recomendamos combinar SEO con Google Ads al principio.",
  },
  {
    pregunta: "¿Qué diferencia hay entre SEO local y SEO normal?",
    respuesta:
      "El SEO «normal» (o nacional) posiciona tu web para búsquedas generales sin componente geográfico. El SEO local se enfoca en búsquedas con intención local: «servicio + ciudad», «cerca de mí», búsquedas en Google Maps, etc. Las técnicas son diferentes: el SEO local trabaja mucho la ficha de Google Business, las reseñas, los directorios locales y la coherencia de NAP (nombre, dirección, teléfono). Para un negocio físico, el SEO local es mucho más rentable.",
  },
  {
    pregunta: "¿Necesito tener una web para hacer SEO local?",
    respuesta:
      "Puedes tener solo una ficha de Google Business Profile, pero los resultados serán limitados. Tener una web optimizada multiplica tus posibilidades de aparecer tanto en los resultados orgánicos como en el pack local de Maps. La web te permite posicionar para muchas más keywords, crear contenido relevante y generar confianza. Los negocios con web + ficha de Google optimizada superan consistentemente a los que solo tienen ficha.",
  },
  {
    pregunta: "¿Cómo sabré si el SEO está funcionando?",
    respuesta:
      "Cada mes te enviamos un informe claro con: posiciones en Google para tus keywords objetivo, tráfico orgánico (visitas desde Google), interacciones en tu ficha de Google Business (llamadas, solicitudes de ruta, clics a la web) y leads generados. No usamos métricas vanidosas: medimos lo que importa, que es cuántos clientes potenciales llegan a través de Google.",
  },
];

export const faqsMantenimiento: FAQ[] = [
  {
    pregunta: "¿Qué incluye exactamente el mantenimiento web?",
    respuesta:
      "Nuestro servicio de mantenimiento incluye: actualizaciones de seguridad del CMS y plugins, copias de seguridad diarias automáticas, monitorización de uptime 24/7 (te avisamos si la web se cae), soporte técnico prioritario por WhatsApp y email, pequeñas modificaciones mensuales (textos, fotos, ajustes) e informe mensual de estado. Todo por 50€/mes, sin permanencia.",
  },
  {
    pregunta: "¿Cuánto cuesta mantener una página web al mes?",
    respuesta:
      "Nuestro plan de mantenimiento es de 50€/mes e incluye todo lo necesario: actualizaciones, backups, monitorización y soporte. Si comparas con el coste de arreglar una web hackeada (desde 300€) o de reconstruirla tras una caída sin backup (desde 500€), el mantenimiento preventivo es la opción inteligente. Es como el seguro del coche: esperamos no usarlo, pero dormimos tranquilos.",
  },
  {
    pregunta: "¿Por qué necesito mantenimiento web si mi web ya funciona?",
    respuesta:
      "Las amenazas de seguridad web evolucionan constantemente. Solo en 2025, se detectaron más de 30.000 vulnerabilidades en plugins de WordPress. Sin actualizaciones regulares, tu web se convierte en un blanco fácil para hackers. Además, las actualizaciones de navegadores y dispositivos pueden hacer que tu web deje de verse bien. El mantenimiento no es un gasto: es protección de tu inversión digital.",
  },
  {
    pregunta: "¿Qué pasa si mi web se cae o la hackean?",
    respuesta:
      "Con nuestro servicio de mantenimiento, monitorizamos tu web 24/7 y recibimos alertas automáticas si se cae. El tiempo de respuesta es inferior a 4 horas en horario laboral. Si la web se corrompe o sufre un ataque, la restauramos desde el backup más reciente (máximo 24 horas de antigüedad). Sin mantenimiento, una web hackeada puede tardar días en detectarse y costar desde 300€ en limpieza y recuperación.",
  },
  {
    pregunta: "¿Hay permanencia en el servicio de mantenimiento?",
    respuesta:
      "No. Nuestro servicio de mantenimiento es mes a mes, sin permanencia ni penalizaciones por cancelación. Puedes darte de baja cuando quieras con un aviso de 15 días. Eso sí, el 95% de los clientes que contratan mantenimiento lo mantienen porque ven el valor: tranquilidad y una web que siempre funciona.",
  },
  {
    pregunta: "¿Puedo contratar mantenimiento si mi web no la hicisteis vosotros?",
    respuesta:
      "Sí, mantenemos webs de cualquier proveedor siempre que estén desarrolladas con tecnologías estándar (WordPress, Next.js, HTML/CSS). Hacemos una auditoría inicial gratuita para evaluar el estado de la web y te decimos si hay algo que corregir antes de empezar. En algunos casos recomendamos una optimización previa si la web tiene problemas estructurales graves.",
  },
];

export const faqsGoogleAds: FAQ[] = [
  {
    pregunta: "¿Cuánto debería invertir en Google Ads para un negocio local?",
    respuesta:
      "Para negocios locales en la provincia de Barcelona, recomendamos un presupuesto mínimo de 300-500€/mes en anuncios (aparte de nuestra tarifa de gestión de 200€/mes). Esto suele generar entre 30 y 80 clics cualificados al mes, dependiendo del sector. Sectores menos competitivos (reformas, limpieza) pueden funcionar con 300€/mes. Sectores más competitivos (abogados, dentistas) necesitan 500€+ para resultados consistentes.",
  },
  {
    pregunta: "¿Cuál es la diferencia entre Google Ads y SEO?",
    respuesta:
      "Google Ads es publicidad de pago: apareces arriba de todo inmediatamente, pero pagas por cada clic. Cuando dejas de pagar, desapareces. El SEO es posicionamiento orgánico: tarda más (3-6 meses), pero los resultados son duraderos y no pagas por cada visita. La estrategia ideal para negocios locales es empezar con ambos: Google Ads para resultados inmediatos mientras el SEO va construyendo posiciones orgánicas a medio plazo.",
  },
  {
    pregunta: "¿Google Ads funciona para negocios locales?",
    respuesta:
      "Es donde mejor funciona. Google Ads permite segmentar geográficamente al milímetro: puedes mostrar tus anuncios solo a personas que buscan en tu ciudad, en un radio de X kilómetros, o incluso en barrios específicos. Además, las búsquedas locales tienen alta intención de compra: alguien que busca «fontanero urgente Sabadell» está a una llamada de contratarte. La tasa de conversión de búsquedas locales es 2-3 veces mayor que las búsquedas genéricas.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda Google Ads en dar resultados?",
    respuesta:
      "Los primeros clics y llamadas pueden llegar en las primeras 24-48 horas tras activar la campaña. Sin embargo, la optimización real lleva 2-4 semanas, porque necesitamos datos para ajustar las pujas, eliminar keywords negativas y optimizar los anuncios. A partir del segundo mes, las campañas están estabilizadas y empiezas a ver un ROI consistente.",
  },
  {
    pregunta: "¿Cómo sé si Google Ads me está siendo rentable?",
    respuesta:
      "Configuramos tracking de conversiones para medir exactamente cuántas llamadas, formularios y ventas genera cada euro invertido. En el informe mensual te mostramos: coste por lead (cuánto te cuesta cada contacto), coste por adquisición (cuánto te cuesta cada cliente) y ROI estimado. Si tu servicio medio vale 500€ y cada cliente te cuesta 50€ en publicidad, tu ROI es de 10x. Así de claro.",
  },
  {
    pregunta: "¿Puedo pausar o cancelar las campañas en cualquier momento?",
    respuesta:
      "Sí, sin permanencia ni penalizaciones. Puedes pausar las campañas en vacaciones, en temporada baja o cuando quieras. También puedes ajustar el presupuesto arriba o abajo según tus necesidades. Nuestro trabajo es darte la flexibilidad que necesitas y los datos para que tomes decisiones informadas.",
  },
];
