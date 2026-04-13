import { siteConfig } from "@/data/site";
import { JsonLd } from "./JsonLd";
import type { FAQ } from "@/types";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  areaServed?: string;
  priceFrom?: string;
  faqs?: FAQ[];
}

export function ServiceSchema({
  serviceName,
  description,
  areaServed,
  priceFrom,
  faqs,
}: ServiceSchemaProps) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(areaServed && {
      areaServed: {
        "@type": "City",
        name: areaServed,
      },
    }),
    ...(priceFrom && {
      offers: {
        "@type": "Offer",
        price: priceFrom.replace(/[^0-9]/g, ""),
        priceCurrency: "EUR",
      },
    }),
  };

  const faqData = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.pregunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.respuesta,
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={serviceData} />
      {faqData && <JsonLd data={faqData} />}
    </>
  );
}
