import type { Metadata } from "next";
import { restaurant, mapUrl, mapEmbedUrl } from "@/lib/restaurant";
export const metadata: Metadata = {
  title: "მდებარეობა",
  alternates: { canonical: "/location" },
};

export default function LocationPage() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">გელოდებით სამეგრელოში</span>
          <h1>
            შევხვდეთ
            <br />
            მარტვილში.
          </h1>
        </div>
        <div>
          <p>ლა ფიესტა · მარტვილი, საქართველო</p>
          <a href={`tel:${restaurant.phone}`} className="text-link">
            {restaurant.displayPhone}
          </a>
        </div>
      </div>
      <div className="location-map">
        <iframe
          src={mapEmbedUrl}
          title="ლა ფიესტას მდებარეობა რუკაზე"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="map-footer">
        <div>
          <p>მარშრუტის სანახავად გახსენით რუკა.</p>
          <a
            href={restaurant.googleMapsUrl}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ჩვენი Google-პროფილი და შეფასებები ↗
          </a>
        </div>
        <a href={mapUrl} className="btn" target="_blank" rel="noreferrer">
          მარშრუტის ნახვა ↗
        </a>
      </div>
    </section>
  );
}
