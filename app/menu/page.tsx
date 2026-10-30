import type { Metadata } from "next";
import PackageGrid from "@/components/Menu/PackageGrid";
import MenuComparison from "@/components/Experience/MenuComparison";
import { packages } from "@/lib/content";
export const metadata: Metadata = {
  title: "მენიუ",
  alternates: { canonical: "/menu" },
};
export default function MenuPage() {
  return (
    <section className="section container">
      <div className="page-heading">
        <span className="eyebrow">გემრიელი შეხვედრებისთვის</span>
        <h1>
          ქართული სუფრა,
          <br />
          თქვენი არჩევანით.
        </h1>
        <p>
          გაეცანით საბანკეტო პაკეტებს. ფასები მოცემულია ერთ სტუმარზე.
          <br />
          მენიუსა და ღონისძიების დეტალებს პირადად შევათანხმებთ.
        </p>
      </div>
      <PackageGrid items={[...packages].sort((a, b) => a.price - b.price)} />
      <MenuComparison />
      <p className="fine-print">
        მენიუს შემადგენლობა და ფასი დაჯავშნამდე გადაამოწმეთ ადმინისტრაციასთან.
      </p>
    </section>
  );
}
