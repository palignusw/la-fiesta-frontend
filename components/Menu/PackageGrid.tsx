import Image from "next/image";
import { LuCrown } from "react-icons/lu";
import { MenuPackage } from "@/lib/content";
import { restaurant } from "@/lib/restaurant";
import PackageCard from "./PackageCard";
import styles from "./PackageGrid.module.scss";

export default function PackageGrid({ items }: { items: MenuPackage[] }) {
  return (
    <div className={styles.grid}>
      {items.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
      <article className={styles.premium}>
        <div className={styles.photo}>
          <Image
            src="/gallery/dekor1.jpg"
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
          />
          <span className={styles.medallion} aria-hidden="true">
            <LuCrown />
          </span>
        </div>
        <div className={styles.details}>
          <h3>პრემიუმ მენიუ</h3>
          <p className={styles.price}>120 ₾ <small>ერთ სტუმარზე</small></p>
          <p>მენიუს შემადგენლობას ინდივიდუალურად შევათანხმებთ.</p>
          <a className={styles.call} href={`tel:${restaurant.phone}`}>
            დაგვიკავშირდით
          </a>
        </div>
      </article>
    </div>
  );
}
