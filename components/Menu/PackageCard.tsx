import { MenuPackage } from "@/lib/content";
import Link from "next/link";
import styles from "./PackageGrid.module.scss";
import { LuCrown } from "react-icons/lu";
import Image from "next/image";
import Icon from "@/components/Experience/Icon";
export default function PackageCard({ pkg }: { pkg: MenuPackage }) {
  const premium = pkg.slug === "120gel";
  const photo =
    pkg.slug === "85gel"
      ? "editorial/gochi.webp"
      : pkg.slug === "70gel"
        ? "editorial/xachapuri.webp"
        : "editorial/lobio.webp";
  const main = pkg.sections.find((s) => s.title === "ძირითადი კერძები");
  return (
    <article className={`package-card package-content-card ${premium ? styles.premium : ""}`}>
      <Link
        href={`/menu/${pkg.slug}`}
        className="package-photo"
        aria-label={`${pkg.name} — სრული მენიუ`}
      >
        <Image
          src={pkg.photo ?? "/menu/" + photo}
          alt={pkg.name}
          fill
          sizes="(max-width:640px) 100vw, 33vw"
        />
        {premium && (
          <span className={styles.crown} aria-hidden="true">
            <LuCrown />
          </span>
        )}
        <span>{premium ? "პრემიუმ მენიუ" : "საბანკეტო მენიუ"}</span>
      </Link>
      <div className="package-body">
        <div className="package-top">
          <h3>{pkg.name}</h3>
          <Link
            href={`/menu/${pkg.slug}`}
            className="package-arrow"
            aria-label={`${pkg.name} — დეტალები`}
          >
            ↗
          </Link>
        </div>
        <div className="package-price">
          {pkg.price}
          <span> ₾</span>
          <small>{pkg.perPersonLabel}</small>
        </div>
        <p className="package-categories">{pkg.highlights.join(" · ")}</p>
        <ul className="package-dish-list">
          {main?.items.slice(0, 4).map((item) => {
            const label = typeof item === "string" ? item : item.label;
            return (
              <li key={label}>
                <Icon name="check" />
                {label}
              </li>
            );
          })}
        </ul>
        <div className="package-counts">
          <span>{pkg.sections.length} განყოფილება</span>
          <span>სრული სია პაკეტის გვერდზე</span>
        </div>
        <div className="package-card-actions">
          <Link href={`/menu/${pkg.slug}`} className="text-link">
            სრული მენიუ <Icon name="diagonal" />
          </Link>
          <Link href={`/contacts?menu=${pkg.slug}`} className="package-reserve">
            ამ მენიუს არჩევა <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
