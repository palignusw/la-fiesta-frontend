import type { Metadata } from "next";
import { media, albums } from "@/lib/content";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
export const metadata: Metadata = {
  title: "გალერეა",
  alternates: { canonical: "/gallery" },
};
export default function GalleryPage() {
  return (
    <section className="section container">
      <div className="page-heading">
        <span className="eyebrow">სივრცე და განწყობა</span>
        <h1>
          ლა ფიესტა
          <br />
          თქვენი თვალით.
        </h1>
        <p>დაათვალიერეთ ჩვენი სივრცე. ფოტოს გასადიდებლად შეეხეთ სურათს.</p>
      </div>
      <GalleryGrid items={media} albums={[...albums]} />
    </section>
  );
}
