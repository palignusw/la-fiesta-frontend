import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/content";
import Icon from "./Icon";
const dishes = [
  {
    name: "ხაჭაპური",
    img: "xachapuri.jpg",
    note: "ქართული სუფრის ნაცნობი გემო",
    match: "ხაჭაპური",
  },
  {
    name: "გებჟალია",
    img: "gebjalia.jpg",
    note: "მეგრული სამზარეულოდან",
    match: "გებჟალია",
  },
  {
    name: "ელარჯი",
    img: "elarji.jpg",
    note: "მეგრული სუფრისთვის",
    match: "ელარჯი",
  },
  {
    name: "ღორის მწვადი",
    img: "mwv.webp",
    note: "ცხელი კერძებიდან",
    match: "ღორის მწვადი",
  },
];
export default function CuisineSelection() {
  return (
    <section className="cuisine-selection">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">გაიცანით ჩვენი მენიუ</span>
            <h2>
              ქართული სუფრა,
              <br />
              <em>მეგრული აქცენტებით.</em>
            </h2>
          </div>
          <p>
            გაეცანით კერძებს და ნახეთ,
            <br />
            რომელ პაკეტშია თქვენთვის სასურველი გემო.
          </p>
        </div>
        <div className="cuisine-grid">
          {dishes.map((d) => {
            const options = [...packages]
              .sort((a, b) => a.price - b.price)
              .filter((p) =>
                p.sections.some((s) =>
                  s.items.some((item) =>
                    (typeof item === "string" ? item : item.label).includes(
                      d.match,
                    ),
                  ),
                ),
              );
            return (
              <article key={d.name}>
                <div className="cuisine-photo">
                  <Image
                    src={"/menu/" + d.img}
                    alt={d.name}
                    fill
                    sizes="(max-width:600px) 45vw, 25vw"
                  />
                </div>
                <small>{d.note}</small>
                <h3>{d.name}</h3>
                <div className="dish-packages">
                  <span>პაკეტები:</span>
                  {options.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/menu/${p.slug}`}
                      aria-label={`${d.name} — ${p.price}-ლარიანი პაკეტის ნახვა`}
                    >
                      {p.price} ₾ <Icon name="diagonal" />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <p className="cuisine-disclaimer">
          ფოტოები კერძების გასაცნობად არის წარმოდგენილი. სუფრის შემადგენლობა და
          მიწოდების დეტალები წინასწარ შეთანხმდება.
        </p>
      </div>
    </section>
  );
}
