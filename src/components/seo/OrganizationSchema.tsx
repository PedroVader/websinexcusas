import { siteConfig } from "@/data/site";
import { JsonLd } from "./JsonLd";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.empresa,
    url: siteConfig.url,
    telephone: siteConfig.telefono,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sabadell",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Provincia de Barcelona",
    },
    sameAs: [
      siteConfig.redesSociales.instagram,
      siteConfig.redesSociales.linkedin,
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.telefono,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sabadell",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "€€",
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={localBusiness} />
    </>
  );
}
