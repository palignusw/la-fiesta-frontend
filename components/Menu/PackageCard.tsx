import { MenuPackage } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Experience/Icon";
export default function PackageCard({ pkg }: { pkg: MenuPackage }) {
  const photo =
    pkg.slug === "85gel"
      ? "gochi.jpg"
      : pkg.slug === "70gel"
        ? "xachapuri.jpg"
        : "lobio.jpg";
  const main = pkg.sections.find((s) => s.title === "ძირითადი კერძები");
  return (
    <article className="package-card package-content-card">
      <Link
        href={`/menu/${pkg.slug}`}
        className="package-photo"
        aria-label={`${pkg.name} — სრული მენიუ`}
      >
        <Image
          src={"/menu/" + photo}
          alt={pkg.name}
          fill
          sizes="(max-width:640px) 100vw, 33vw"
        />
        <span>საბანკეტო მენიუ</span>
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
