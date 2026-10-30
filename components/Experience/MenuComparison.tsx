import Link from "next/link";
import { packages } from "@/lib/content";
import Icon from "./Icon";
const rows = [
  { label: "ძირითადი კერძები", match: (s: string) => s === "ძირითადი კერძები" },
  { label: "ცივი კერძები", match: (s: string) => s === "ცივი კერძები" },
  {
    label: "სალათები",
    match: (s: string) => s === "სალათი" || s === "სალათები",
  },
  { label: "ცომეული", match: (s: string) => s === "ცომეული" },
  { label: "დესერტი", match: (s: string) => s === "დესერტი" },
  { label: "სასმელები", match: (s: string) => s === "სასმელები" },
];
export default function MenuComparison() {
  const sorted = [...packages].sort((a, b) => a.price - b.price);
  return (
    <div className="menu-comparison">
      <div className="comparison-intro">
        <span className="eyebrow">შეადარეთ და შეარჩიეთ</span>
        <h3>რა შედის თითოეულ მენიუში?</h3>
        <p>
          ქვემოთ მოცემულია მენიუს ნაწილის მოკლე ჩამონათვალი. სრული შემადგენლობა
          იხილეთ პაკეტის გვერდზე.
        </p>
      </div>
      <div
        className="comparison-scroll"
        tabIndex={0}
        role="region"
        aria-label="მენიუს პაკეტების შედარება"
      >
        <table>
          <caption className="visually-hidden">
            პაკეტების ფასი ერთ სტუმარზე და კერძების მაგალითები
          </caption>
          <thead>
            <tr>
              <th scope="col">მენიუს ნაწილი</th>
              {sorted.map((p) => (
                <th scope="col" key={p.slug}>
                  <strong>{p.price} ₾</strong>
                  <small>ერთ სტუმარზე</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {sorted.map((p) => {
                  const section = p.sections.find((s) => row.match(s.title));
                  return (
                    <td key={p.slug}>
                      {section ? (
                        <>
                          <span>
                            {section.items
                              .slice(0, 2)
                              .map((item) =>
                                typeof item === "string" ? item : item.label,
                              )
                              .join(" · ")}
                          </span>
                          <small>{section.items.length} დასახელება</small>
                        </>
                      ) : (
                        <span className="comparison-empty">
                          ამ პაკეტში არ არის მითითებული
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">სრული შემადგენლობა</th>
              {sorted.map((p) => (
                <td key={p.slug}>
                  <Link href={`/menu/${p.slug}`}>
                    მენიუს ნახვა <Icon name="diagonal" />
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="comparison-note">
        ჩამონათვალში ერთი დასახელება შესაძლოა ალტერნატიულ კერძებსაც მოიცავდეს.
        საბოლოო მენიუ და ფასი შეთანხმდება ადმინისტრაციასთან.
      </p>
    </div>
  );
}
