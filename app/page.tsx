import Image from "next/image";
import Link from "next/link";
import PackageGrid from "@/components/Menu/PackageGrid";
import { packages } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/hero/hro.jpg"
          alt="ლა ფიესტას შენობა მარტვილში"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow light">მარტვილი · სამეგრელო</span>
          <h1>
            თქვენი განსაკუთრებული
            <br />
            დღის ადგილი.
          </h1>
          <p>
            ქართული სუფრა, თბილი მასპინძლობა და მომენტები,
            <br className="desktop-break" /> რომლებიც დიდხანს გემახსოვრებათ.
          </p>
          <div className="actions">
            <Link href="/contacts" className="btn cream">
              დაგეგმეთ თქვენი ღონისძიება <span>↗</span>
            </Link>
            <Link href="/menu" className="hero-link">
              აღმოაჩინეთ მენიუ <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>ქორწილი · ნათლობა · ბანკეტი</span>
          <a href="#welcome">გაიცანით ლა ფიესტა ↓</a>
        </div>
      </section>
      <section id="welcome" className="section container intro-grid">
        <div>
          <span className="eyebrow">კეთილი იყოს თქვენი მობრძანება</span>
          <h2>
            ლამაზი შეხვედრები
            <br />
            აქ იწყება.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            არის დღეები, რომლებსაც განსაკუთრებული გარემო სჭირდება. ლა ფიესტა
            მარტვილში აერთიანებს ქართულ გემოს, სადღესასწაულო განწყობასა და
            საყვარელ ადამიანებთან ერთად ყოფნის სიხარულს.
          </p>
          <Link href="/about" className="text-link">
            ჩვენ შესახებ <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="container story-grid">
        <div className="story-image">
          <Image
            src="/gallery/hall3.jpg"
            alt="ლა ფიესტას ინტერიერი"
            fill
            sizes="(max-width: 760px) 100vw, 60vw"
          />
        </div>
        <div className="story-panel">
          <span className="eyebrow light">სივრცე თქვენი დღისათვის</span>
          <h2>
            თქვენ აღნიშნავთ.
            <br />
            ჩვენ გმასპინძლობთ.
          </h2>
          <p>
            იქნება ეს ქორწილი, ნათლობა თუ ოჯახური ბანკეტი — ერთად დავგეგმოთ
            სუფრა და დეტალები, რომლებიც თქვენს დღეს მოუხდება.
          </p>
          <Link href="/gallery" className="text-link">
            დაათვალიერეთ სივრცე <span>↗</span>
          </Link>
          <span className="panel-mark" aria-hidden="true">
            ✳
          </span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ქართული სუფრის გემო</span>
            <h2>
              თქვენი სუფრა.
              <br />
              თქვენი არჩევანი.
            </h2>
          </div>
          <p>
            გაეცანით მენიუს, შეარჩიეთ სასურველი პაკეტი
            <br />
            და დეტალები ჩვენთან ერთად შეათანხმეთ.
          </p>
        </div>
        <PackageGrid items={[...packages].sort((a, b) => a.price - b.price)} />
      </section>
      <section className="food-banner">
        <Image
          src="/menu/xachapuri.jpg"
          alt="ქართული ხაჭაპური"
          fill
          sizes="100vw"
        />
        <div className="food-overlay" />
        <div className="container">
          <span className="eyebrow light">ტრადიცია, რომელიც გვაერთიანებს</span>
          <h2>
            სუფრასთან ყოველთვის
            <br />
            მეტი გვაკავშირებს.
          </h2>
          <Link href="/menu" className="btn cream">
            მენიუს ნახვა ↗
          </Link>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ლა ფიესტას განწყობა</span>
            <h2>ერთი შეხედვით.</h2>
          </div>
          <Link href="/gallery" className="text-link">
            სრული გალერეა ↗
          </Link>
        </div>
        <div className="home-gallery">
          {["hall1.jpg", "hall5.jpg", "hall8.jpg"].map((src, i) => (
            <Link href="/gallery" key={src}>
              <Image
                src={"/gallery/" + src}
                alt={`ლა ფიესტას დარბაზი — ხედი ${i + 1}`}
                fill
                sizes="(max-width: 600px) 85vw, 33vw"
              />
              <span>დაათვალიერეთ ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="booking-cta container">
        <span className="eyebrow">მოდით, ერთად დავგეგმოთ</span>
        <h2>
          ყველა განსაკუთრებულ დღეს
          <br />
          თავისი ადგილი აქვს.
        </h2>
        <p>მოგვწერეთ თქვენი გეგმების შესახებ — დანარჩენს ერთად შევათანხმებთ.</p>
        <div className="actions">
          <Link href="/contacts" className="btn">
            ჯავშნის მოთხოვნა ↗
          </Link>
          <a href="tel:+995599435644" className="text-link">
            +995 599 43 56 44
          </a>
        </div>
      </section>
    </>
  );
}
