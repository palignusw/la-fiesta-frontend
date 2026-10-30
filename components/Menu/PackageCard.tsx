import { MenuPackage } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
export default function PackageCard({ pkg }: { pkg: MenuPackage }) {
  const photo =
    pkg.slug === "85gel"
      ? "gochi.jpg"
      : pkg.slug === "70gel"
        ? "xachapuri.jpg"
        : "lobio.jpg";
  return (
    <Link href={`/menu/${pkg.slug}`} className="package-card">
      <div className="package-photo">
        <Image
          src={"/menu/" + photo}
          alt={pkg.name}
          fill
          sizes="(max-width:640px) 100vw, 33vw"
        />
        <span>საბანკეტო მენიუ</span>
      </div>
      <div className="package-body">
        <div className="package-top">
          <h3>{pkg.name}</h3>
          <span className="package-arrow">↗</span>
        </div>
        <div className="package-price">
          {pkg.price}
          <span> ₾</span>
          <small>{pkg.perPersonLabel}</small>
        </div>
        <p>{pkg.highlights.join(" · ")}</p>
        <span className="package-more">
          მენიუს დათვალიერება <span>→</span>
        </span>
      </div>
    </Link>
  );
}
