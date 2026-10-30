import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section container">
      <div className="page-heading">
        <span className="eyebrow">გვერდი ვერ მოიძებნა</span>
        <h1>
          სხვა გზით
          <br />
          შევხვდეთ.
        </h1>
        <p>ეს გვერდი აღარ არსებობს ან მისამართი არასწორია.</p>
        <Link href="/" className="btn">
          მთავარზე დაბრუნება ↗
        </Link>
      </div>
    </section>
  );
}
