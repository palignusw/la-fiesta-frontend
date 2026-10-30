import Header from "@/components/Header/Header";
import "./globals.css";
import "./experience.css";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import Script from "next/script";
import Analytics from "./analytics";
import { Suspense } from "react";
import {
  getRestaurantStructuredData,
  serializeStructuredData,
} from "@/lib/restaurant";

export const metadata: Metadata = {
  metadataBase: new URL("https://lafiesta.ge"),
  title: {
    default: "ლა ფიესტა — რესტორანი და საბანკეტო დარბაზი მარტვილში",
    template: "%s | ლა ფიესტა (La Fiesta)",
  },
  description:
    "რესტორანი და საბანკეტო დარბაზი მარტვილში. ქართული და მეგრული კერძები, მენიუს პაკეტები, დარბაზის ფოტოები და ღონისძიების დაგეგმვა — ლა ფიესტა.",
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
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://lafiesta.ge",
    siteName: "ლა ფიესტა (La Fiesta)",
    title: "ლა ფიესტა — რესტორანი და საბანკეტო დარბაზი მარტვილში",
    description:
      "ქორწილები, ნათლობები და ბანკეტები მარტვილში. გაეცანით მენიუსა და დარბაზის ფოტოებს.",
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
    description: "ქართული სუფრა და ღონისძიებების დაგეგმვა მარტვილში.",
    images: ["/hero/hall.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ka">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(getRestaurantStructuredData()),
          }}
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
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
