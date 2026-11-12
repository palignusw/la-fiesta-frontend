import type { Metadata } from "next";
import { LuCrown } from "react-icons/lu";
import styles from "./banquet.module.scss";
import PackageGrid from "@/components/Menu/PackageGrid";
import MenuComparison from "@/components/Experience/MenuComparison";
import { packages } from "@/lib/content";
import {
  getMenuStructuredData,
  restaurant,
  serializeStructuredData,
} from "@/lib/restaurant";
export const metadata: Metadata = {
  title: "მენიუ",
  alternates: { canonical: "/menu" },
};
export default function MenuPage() {
  return (
    <section className={`section container ${styles.catalog}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(getMenuStructuredData()),
        }}
      />
      <div className="page-heading">
        <span className="eyebrow">გემრიელი შეხვედრებისთვის</span>
        <h1>
          ქართული სუფრა,
          <br />
          <em>თქვენი არჩევანით.</em>
        </h1>
        <p>
          გაეცანით საბანკეტო პაკეტებს. ფასები მოცემულია ერთ სტუმარზე.
          <br />
          მენიუსა და ღონისძიების დეტალებს პირადად შევათანხმებთ.
        </p>
      </div>
      <PackageGrid items={[...packages].sort((a, b) => a.price - b.price)} />
      <article className={styles.premium}>
        <div className={styles.crown} aria-hidden="true">
          <LuCrown />
        </div>
        <div>
          <h2>პრემიუმ მენიუ</h2>
          <p>მენიუს შემადგენლობასა და ფასს ინდივიდუალურად შევათანხმებთ.</p>
        </div>
        <a href={`tel:${restaurant.phone}`} className="btn">
          დაგვიკავშირდით
        </a>
      </article>
      <MenuComparison />
      <p className="fine-print">
        მენიუს შემადგენლობა და ფასი დაჯავშნამდე გადაამოწმეთ ადმინისტრაციასთან.
      </p>
    </section>
  );
}
