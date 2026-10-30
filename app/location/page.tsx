import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "მდებარეობა",
  alternates: { canonical: "/location" },
};
const map = "https://www.google.com/maps/search/?api=1&query=42.43033,42.38122";
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
          <a href="tel:+995599435644" className="text-link">
            +995 599 43 56 44
          </a>
        </div>
      </div>
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps?q=42.43033,42.38122&z=16&hl=ka&output=embed"
          title="ლა ფიესტას მდებარეობა რუკაზე"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="map-footer">
        <p>მარშრუტის სანახავად გახსენით რუკა.</p>
        <a href={map} className="btn" target="_blank" rel="noreferrer">
          მარშრუტის ნახვა ↗
        </a>
      </div>
    </section>
  );
}
