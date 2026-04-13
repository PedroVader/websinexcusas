import { siteConfig } from "@/data/site";

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage =
    "Hola, he visto Web Sin Excusas y quiero información sobre vuestros servicios de diseño web.";
  const texto = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${texto}`;
}

export function getWhatsAppMunicipioUrl(municipio: string): string {
  const message = `Hola, he visto Web Sin Excusas y quiero información sobre diseño web en ${municipio}.`;
  return getWhatsAppUrl(message);
}
