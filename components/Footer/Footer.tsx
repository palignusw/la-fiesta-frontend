import Link from "next/link";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const socialIconStyle = { color: "var(--gold)", marginInlineEnd: 8, verticalAlign: "-0.12em" };

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="wordmark">
            <span>La Fiesta ✳</span>
            <small>რესტორანი · მარტვილი</small>
          </Link>
          <p>
            ქართული გემო.
            <br />
            განსაკუთრებული შეხვედრები.
          </p>
        </div>
        <div>
          <h3>აღმოაჩინეთ</h3>
          <Link href="/menu">მენიუ</Link>
          <Link href="/gallery">გალერეა</Link>
          <Link href="/about">ჩვენ შესახებ</Link>
        </div>
        <div>
          <h3>გვეწვიეთ</h3>
          <Link href="/location">მარტვილი, საქართველო ↗</Link>
          <a href="tel:+995599435644">+995 599 43 56 44</a>
          <Link href="/contacts">ჯავშნის მოთხოვნა</Link>
        </div>
        <div>
          <h3>გამოგვყევით</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100083011586797"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF aria-hidden="true" style={socialIconStyle} />
            ფეისბუქი ↗
          </a>
          <a
            href="https://www.tiktok.com/@la_fiesta2022"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok aria-hidden="true" style={socialIconStyle} />
            ტიკტოკი ↗
          </a>
          <a href="https://wa.me/995599435644" target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden="true" style={socialIconStyle} />
            ვოთსაპი ↗
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} ლა ფიესტა. ყველა უფლება დაცულია.
        </span>
        <span>სიყვარულით, სამეგრელოდან.</span>
      </div>
    </footer>
  );
}
