import Section from "@/components/Section/Section";
import PackageGrid from "@/components/Menu/PackageGrid";
import { packages, texts } from "@/lib/content";

export default function MenuPage() {
  const t = texts?.MenuPackages ?? {
    title: "ბანკეტის პაკეტები",
    subtitle: "აირჩიეთ შესაბამისი შეთავაზება თქვენი ღონისძიებისთვის",
    note: "ფასები მითითებულია ერთ სტუმარზე. ალკოჰოლური სასმელები — შეთანხმებით.",
    view: "ნახვა",
    perPerson: "ფასი ერთ სტუმარზე",
    back: "დაბრუნება პაკეტებში",
    book: "დაჯავშნა",
  };

  return (
    <Section title={t.title} subtitle={t.subtitle}>
      <PackageGrid items={packages} />
      <p style={{ marginTop: 14, color: "var(--muted)" }}>{t.note}</p>
    </Section>
  );
}
