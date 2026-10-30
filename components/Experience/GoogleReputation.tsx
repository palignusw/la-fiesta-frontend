import Icon from "./Icon";
import { getGoogleReputation } from "@/lib/google-reputation";
export default async function GoogleReputation() {
  const googleReviews = await getGoogleReputation();
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
          {googleReviews.source === "google" ? (
            "რეიტინგი და შეფასებების რაოდენობა მიღებულია Google-იდან. მონაცემები პერიოდულად ახლდება."
          ) : (
            <>
              შენახული შეფასება —{" "}
              <time dateTime={googleReviews.updatedAt}>30.10.2026</time>.
              მიმდინარე მონაცემები იხილეთ Google-ში.
            </>
          )}
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
