"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/Gallery/LightBox";
import Icon from "./Icon";
import type { MediaItem } from "@/lib/content";
const views = [
  {
    src: "/gallery/hall5.jpg",
    title: "დარბაზის საერთო ხედი",
    text: "დაათვალიერეთ დარბაზი და მაგიდების განლაგება.",
  },
  {
    src: "/gallery/hall1.jpg",
    title: "სადღესასწაულო სუფრა",
    text: "სუფრის დეტალები ერთ-ერთი ღონისძიებიდან.",
  },
  {
    src: "/gallery/hall2.jpg",
    title: "საღამოს განათება",
    text: "დარბაზი სადღესასწაულო განათებით.",
  },
  {
    src: "/gallery/hall10.jpg",
    title: "საქორწილო გაფორმება",
    text: "გაფორმების მაგალითი ლა ფიესტაში.",
  },
];
const images: MediaItem[] = views.map((v, i) => ({
  id: `venue-${i}`,
  src: v.src,
  album: "დარბაზი",
  alt: v.title,
}));
export default function VenueDetails() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="section container venue-details">
      <div className="section-heading">
        <div>
          <span className="eyebrow">სივრცე ახლოდან</span>
          <h2>
            დაათვალიერეთ დარბაზი
            <br />
            <em>სხვადასხვა რაკურსით.</em>
          </h2>
        </div>
        <Link className="text-link" href="/gallery">
          ყველა ფოტო
          <Icon name="diagonal" />
        </Link>
      </div>
      <div className="venue-details-grid">
        {views.map((v, i) => (
          <article key={v.src}>
            <button
              type="button"
              className="venue-detail-image"
              onClick={() => setActive(i)}
              aria-label={`${v.title} — ფოტოს გადიდება`}
            >
              <Image
                src={v.src}
                alt={v.title}
                fill
                sizes="(max-width:600px) 100vw, (max-width:900px) 45vw, 25vw"
              />
              <span className="photo-expand">
                <Icon name="diagonal" />
              </span>
            </button>
            <div className="venue-detail-caption">
              <span>0{i + 1}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="venue-context">
        <Icon name="sparkle" />
        <p>
          ფოტოებზე ნაჩვენებია სხვადასხვა ღონისძიების გაფორმება. თქვენი
          ღონისძიების გაფორმებასა და მომსახურების პირობებს წინასწარ
          შევათანხმებთ.
        </p>
      </div>
      {active !== null && (
        <Lightbox
          items={images}
          start={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
