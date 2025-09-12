import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import Script from "next/script";
import Analytics from "./analytics";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://lafiesta.ge"),
  title: {
    default: "ლა ფიესტა (La Fiesta) — საქორწილო/ბანკეტის დარბაზი მარტვილში",
    template: "%s | ლა ფიესტა (La Fiesta)",
  },
  description:
    "ელეგანტური ბანკეტები, ქორწილები და უმაღლესი მომსახურება მარტვილში — ლა ფიესტა (La Fiesta).",
  keywords: [
    "ლა ფიესტა",
    "La Fiesta",
    "ბანკეტი",
    "საქორწილო დარბაზი",
    "მარტვილი",
    "ქორწილი",
    "ნათლობა",
    "გასვენების სუფრა",
    "ორმოცის სუფრა",
    "წლისთავის სუფრა",
    "წლისთავი",
    "ორმოცი",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://lafiesta.ge",
    siteName: "ლა ფიესტა (La Fiesta)",
    title: "ლა ფიესტა (La Fiesta) — საქორწილო/ბანკეტის დარბაზი მარტვილში",
    description:
      "ელეგანტური ბანკეტები, ქორწილები და უმაღლესი მომსახურება მარტვილში.",
    images: [
      {
        url: "https://lafiesta.ge/hero/hall.png",
        width: 1200,
        height: 630,
        alt: "ლა ფიესტა (La Fiesta)",
      },
    ],
    locale: "ka_GE",
  },
  twitter: {
    card: "summary_large_image",
    title: "ლა ფიესტა (La Fiesta) — ბანკეტის დარბაზი მარტვილში",
    description: "ელეგანტური ბანკეტები და უმაღლესი მომსახურება.",
    images: ["/hero/hall.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "La Fiesta",
    alternateName: "ლა ფიესტა",
    url: "https://lafiesta.ge",
    logo: "https://lafiesta.ge/brand/la-fiesta-logo.png",
    sameAs: [
      "https://www.tiktok.com/@la_fiesta2022",
      "https://www.facebook.com/profile.php?id=100083011586797",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Restaurant", "EventVenue"],
    name: "La Fiesta",
    alternateName: "ლა ფიესტა",
    url: "https://lafiesta.ge",
    telephone: "+99555150910",
    priceRange: "₾₾",
    acceptsReservations: true,
    image: ["https://lafiesta.ge/hero/hall.png"],
    logo: "https://lafiesta.ge/brand/la-fiesta-logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "მარტვილი",
      addressRegion: "Samegrelo-Zemo Svaneti",
      postalCode: "3100",
      addressCountry: "GE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 42.43033, longitude: 42.38122 },
    hasMap: "https://maps.google.com/?q=42.43033,42.38122",
    menu: "https://lafiesta.ge/menu",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "02:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "La Fiesta",
    url: "https://lafiesta.ge",
    inLanguage: "ka-GE",
    publisher: {
      "@type": "Organization",
      name: "La Fiesta",
      logo: {
        "@type": "ImageObject",
        url: "https://lafiesta.ge/brand/la-fiesta-logo.png",
      },
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ka">
      <head>
        <link rel="icon" href="/brand/la-fiesta-logo.png" type="image/png" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 скрипты */}
        {
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-10987973823"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-10987973823');
    ${
      GA_ID
        ? `gtag('config', '${GA_ID}', { page_path: window.location.pathname });`
        : ""
    }
  `}
            </Script>
          </>
        }
      </head>
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
