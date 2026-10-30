"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section container">
      <div className="page-heading">
        <span className="eyebrow">დროებითი შეფერხება</span>
        <h1>გვერდი ვერ ჩაიტვირთა.</h1>
        <p>
          სცადეთ ხელახლა ან დაგვიკავშირდით:{" "}
          <a href="tel:+995599435644">+995 599 43 56 44</a>
        </p>
        <div className="actions">
          <button className="btn" onClick={reset}>
            ხელახლა ცდა
          </button>
          <Link href="/" className="text-link">
            მთავარზე დაბრუნება ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
