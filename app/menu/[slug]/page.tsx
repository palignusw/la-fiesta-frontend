import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { packages } from "@/lib/content";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = packages.find((p) => p.slug === slug);
  return {
    title: p?.name || "მენიუ ვერ მოიძებნა",
    alternates: { canonical: `/menu/${slug}` },
    openGraph: { images: ["/hero/hro.jpg"] },
  };
}
export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();
  return (
    <section className="section container">
      <Link className="text-link" href="/menu">
        ← ყველა პაკეტი
      </Link>
      <div className="menu-detail-head">
        <div>
          <span className="eyebrow">ლა ფიესტას საბანკეტო მენიუ</span>
          <h1>{pkg.name}</h1>
        </div>
        <div className="menu-detail-price">
          {pkg.price} ₾<small>{pkg.perPersonLabel}</small>
        </div>
      </div>
      <nav className="menu-tabs" aria-label="მენიუს კატეგორიები">
        {pkg.sections.map((s, i) => (
          <a href={`#category-${i}`} key={i}>
            {s.title}
          </a>
        ))}
      </nav>
      {pkg.sections.map((section, i) => (
        <section className="menu-category" id={`category-${i}`} key={i}>
          <h2>{section.title}</h2>
          <ul className="dish-grid">
            {section.items.map((item, j) => {
              const dish = typeof item === "string" ? { label: item } : item;
              return (
                <li key={j}>
                  {dish.img && (
                    <div className="dish-photo">
                      <Image
                        src={dish.img}
                        alt={dish.alt || dish.label}
                        fill
                        sizes="(max-width:540px) 45vw, (max-width:1100px) 30vw, 22vw"
                      />
                    </div>
                  )}
                  <h3>{dish.label}</h3>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <div className="detail-cta">
        <p>
          მოგეწონათ მენიუ? ღონისძიების დეტალები ერთად შევათანხმოთ.
          <br />
          მენიუს შემადგენლობა და ფასი დასტურდება ადმინისტრაციასთან.
        </p>
        <Link href="/contacts" className="btn">
          ჯავშნის მოთხოვნა ↗
        </Link>
      </div>
    </section>
  );
}
