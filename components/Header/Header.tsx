"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  ["/", "მთავარი"],
  ["/menu", "მენიუ"],
  ["/gallery", "გალერეა"],
  ["/about", "ჩვენ შესახებ"],
  ["/location", "მდებარეობა"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        გადასვლა შინაარსზე
      </a>
      <div className="container header-inner">
        <Link
          href="/"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label="ლა ფიესტა — მთავარი"
        >
          <span>
            La Fiesta<span className="brand-dot">✳</span>
          </span>
          <small>რესტორანი · მარტვილი</small>
        </Link>
        <nav className="desktop-nav" aria-label="მთავარი ნავიგაცია">
          {links.map(([url, label]) => (
            <Link
              href={url}
              key={url}
              aria-current={pathname === url ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contacts" className="header-book">
          დაჯავშნა <span>↗</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="მობილური ნავიგაცია"
        >
          {[...links, ["/contacts", "ჯავშნის მოთხოვნა"]].map(([url, label]) => (
            <Link
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              aria-current={pathname === url ? "page" : undefined}
            >
              {label}
              <span>↗</span>
            </Link>
          ))}
          <a href="tel:+995599435644">+995 599 43 56 44</a>
        </nav>
      )}
    </header>
  );
}
