import { packages } from "./content";

// Confirmed details retained from the restaurant's existing website.
export const restaurant = {
  name: "ლა ფიესტა",
  alternateName: "La Fiesta",
  siteUrl: "https://lafiesta.ge",
  phone: "+995599435644",
  displayPhone: "+995 599 43 56 44",
  locality: "მარტვილი",
  region: "სამეგრელო-ზემო სვანეთი",
  countryCode: "GE",
  latitude: 42.43033,
  longitude: 42.38122,
  socialUrls: [
    "https://www.tiktok.com/@la_fiesta2022",
    "https://www.facebook.com/profile.php?id=100083011586797",
  ],
} as const;

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.latitude},${restaurant.longitude}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${restaurant.latitude},${restaurant.longitude}&z=16&hl=ka&output=embed`;
export const restaurantId = `${restaurant.siteUrl}/#restaurant`;
export const menuId = `${restaurant.siteUrl}/menu#menu`;

export function getRestaurantStructuredData() {
  const prices = packages.map((pkg) => pkg.price);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": restaurantId,
        name: restaurant.name,
        alternateName: restaurant.alternateName,
        url: restaurant.siteUrl,
        description:
          "რესტორანი და საბანკეტო დარბაზი მარტვილში. ქართული და მეგრული კერძები, ქორწილები, ნათლობები და ბანკეტები.",
        telephone: restaurant.phone,
        logo: `${restaurant.siteUrl}/brand/la-fiesta-logo.png`,
        image: [
          `${restaurant.siteUrl}/hero/hro.jpg`,
          `${restaurant.siteUrl}/gallery/hall5.jpg`,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: restaurant.locality,
          addressRegion: restaurant.region,
          addressCountry: restaurant.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
        },
        hasMap: mapUrl,
        servesCuisine: ["ქართული", "მეგრული"],
        acceptsReservations: true,
        priceRange: `${Math.min(...prices)}–${Math.max(...prices)} ₾ ერთ სტუმარზე`,
        hasMenu: {
          "@type": "Menu",
          "@id": menuId,
          name: "საბანკეტო მენიუ",
          url: `${restaurant.siteUrl}/menu`,
          inLanguage: "ka-GE",
        },
        sameAs: [...restaurant.socialUrls],
      },
      {
        "@type": "WebSite",
        "@id": `${restaurant.siteUrl}/#website`,
        name: restaurant.name,
        alternateName: restaurant.alternateName,
        url: restaurant.siteUrl,
        inLanguage: "ka-GE",
        publisher: { "@id": restaurantId },
      },
    ],
  };
}

// Prices describe complete banquet packages, not individual dishes or products.
export function getMenuStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": menuId,
    name: "ლა ფიესტას საბანკეტო მენიუ",
    url: `${restaurant.siteUrl}/menu`,
    inLanguage: "ka-GE",
    hasMenuSection: [...packages]
      .sort((a, b) => a.price - b.price)
      .map((pkg) => ({
        "@type": "MenuSection",
        "@id": `${restaurant.siteUrl}/menu/${pkg.slug}#menu-section`,
        name: pkg.name,
        description: `${pkg.perPersonLabel}: ${pkg.price} ₾. საბოლოო შემადგენლობა და ფასი დასტურდება ადმინისტრაციასთან.`,
        url: `${restaurant.siteUrl}/menu/${pkg.slug}`,
      })),
  };
}

export function serializeStructuredData(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
