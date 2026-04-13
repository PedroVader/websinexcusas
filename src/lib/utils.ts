export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: string): string {
  return price.replace("€", " €");
}

export function slugToName(slug: string): string {
  const specialCases: Record<string, string> = {
    "hospitalet-de-llobregat": "L'Hospitalet de Llobregat",
    "sant-cugat-del-valles": "Sant Cugat del Vallès",
    "cornella-de-llobregat": "Cornellà de Llobregat",
    "mataro": "Mataró",
    "rubi": "Rubí",
  };

  if (specialCases[slug]) return specialCases[slug];

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
