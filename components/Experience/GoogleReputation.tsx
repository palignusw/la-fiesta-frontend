import Icon from "./Icon";
import { googleReviews } from "@/lib/restaurant";
export default function GoogleReputation() {
  return (
    <section
      className="container google-reputation"
      aria-labelledby="google-reputation-title"
    >
      <div className="google-rating-score">
        <span className="google-rating-source">Google</span>
        <strong>{googleReviews.rating.toLocaleString("ka-GE")}</strong>
        <span className="google-rating-stars" aria-hidden="true">
          ★★★★★
          <span style={{ width: `${(googleReviews.rating / 5) * 100}%` }}>
            ★★★★★
          </span>
        </span>
        <span className="visually-hidden">
          შეფასება: {googleReviews.rating} 5-დან.
        </span>
        <small>{googleReviews.reviewCount} შეფასება</small>
      </div>
      <div className="google-rating-copy">
        <span className="eyebrow">სტუმრების შეფასებები</span>
        <h2 id="google-reputation-title">ლა ფიესტა Google-ში</h2>
        <p>
          გაეცანით სტუმრების მიმოხილვებს, ფოტოებსა და შეფასებებს ჩვენი რესტორნის
          Google-პროფილზე.
        </p>
        <small>
          შენახული შეფასება —{" "}
          <time dateTime={googleReviews.updatedAt}>
            {new Intl.DateTimeFormat("ka-GE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              timeZone: "UTC",
            }).format(new Date(googleReviews.updatedAt + "T12:00:00Z"))}
          </time>
          . მიმდინარე მონაცემები იხილეთ Google-ში.
        </small>
      </div>
      <a
        href={googleReviews.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Google-ში ნახვა
        <Icon name="diagonal" />
      </a>
    </section>
  );
}
