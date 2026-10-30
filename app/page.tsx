import Image from "next/image";
import Link from "next/link";
import PackageGrid from "@/components/Menu/PackageGrid";
import { packages } from "@/lib/content";
import EventExplorer from "@/components/Experience/EventExplorer";
import Icon from "@/components/Experience/Icon";
import MenuComparison from "@/components/Experience/MenuComparison";
import VenueDetails from "@/components/Experience/VenueDetails";
import CuisineSelection from "@/components/Experience/CuisineSelection";
import GoogleReputation from "@/components/Experience/GoogleReputation";
export default function HomePage() {
  return (
    <>
      <section className="editorial-hero">
        <div className="hero-editorial-image">
          <Image
            src="/gallery/hall3.jpg"
            alt="სადღესასწაულო დღე ლა ფიესტაში"
            fill
            priority
            sizes="100vw"
          />
          <div className="editorial-shade" />
        </div>
        <div className="container editorial-content">
          <div className="hero-pretitle">
            <span className="hero-line" />
            რესტორანი და საბანკეტო სივრცე · მარტვილი
          </div>
          <h1>
            რესტორანი მარტვილში.
            <br />
            <em>ლა ფიესტა.</em>
          </h1>
          <div className="editorial-bottom">
            <p>
              ქორწილი, ნათლობა თუ ოჯახური ბანკეტი —
              <br />
              შეარჩიეთ მენიუ და დაგეგმეთ თქვენი ღონისძიება.
            </p>
            <Link href="/contacts" className="btn ivory-button">
              დაგეგმეთ თქვენი დღე
              <Icon name="diagonal" />
            </Link>
          </div>
          <a
            href="#occasions"
            className="hero-scroll"
            aria-label="ღონისძიებების ნახვა"
          >
            ↓
          </a>
        </div>
        <div className="hero-corner">
          <span>ლა ფიესტა</span>
          <small>ერთად ყოფნის ხელოვნება</small>
        </div>
      </section>
      <div className="experience-strip">
        <div className="container">
          <span>
            <Icon name="heart" /> ქორწილი · ნათლობა · ბანკეტი
          </span>
          <i />
          <span>
            <Icon name="plate" /> ქართული და მეგრული კერძები
          </span>
          <i />
          <span>
            <Icon name="pin" /> მარტვილი, სამეგრელო
          </span>
        </div>
      </div>
      <section className="container venue-introduction">
        <div>
          <span className="eyebrow">გაიცანით ლა ფიესტა</span>
          <h2>
            ქართული სუფრა და
            <br />
            <em>სადღესასწაულო გარემო.</em>
          </h2>
          <p>
            ლა ფიესტა მარტვილში მდებარე რესტორანი და საბანკეტო დარბაზია. ჩვენთან
            შეგიძლიათ დაგეგმოთ ქორწილი, ნათლობა და ოჯახური თუ მეგობრული შეკრება.
          </p>
          <Link href="/about" className="text-link">
            ჩვენ შესახებ
            <Icon name="diagonal" />
          </Link>
        </div>
        <div className="venue-fact-grid">
          <Link href="/location">
            <Icon name="pin" />
            <strong>მარტვილი</strong>
            <span>მდებარეობა და მარშრუტი</span>
            <b>↗</b>
          </Link>
          <Link href="/menu">
            <Icon name="plate" />
            <strong>{packages.length} მენიუ</strong>
            <span>
              {Math.min(...packages.map((p) => p.price))}–
              {Math.max(...packages.map((p) => p.price))} ₾ ერთ სტუმარზე
            </span>
            <b>↗</b>
          </Link>
          <Link href="/gallery">
            <Icon name="sparkle" />
            <strong>დარბაზის ფოტოები</strong>
            <span>ინტერიერი და გაფორმების მაგალითები</span>
            <b>↗</b>
          </Link>
          <Link href="/contacts">
            <Icon name="calendar" />
            <strong>დაგეგმეთ ღონისძიება</strong>
            <span>გაგვიზიარეთ თარიღი და სურვილები</span>
            <b>↗</b>
          </Link>
        </div>
      </section>
      <GoogleReputation />
      <EventExplorer />
      <section className="section container feast-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">კარგი სუფრა აერთიანებს</span>
            <h2>
              გემო, რომელიც
              <br />
              <em>შეხვედრას უხდება.</em>
            </h2>
          </div>
          <div>
            <p>
              ქართული და მეგრული კერძები თქვენს სუფრაზე.
              <br />
              შეარჩიეთ მენიუ თქვენი ღონისძიებისთვის.
            </p>
            <Link href="/menu" className="text-link">
              ყველა პაკეტი
              <Icon name="diagonal" />
            </Link>
          </div>
        </div>
        <PackageGrid items={[...packages].sort((a, b) => a.price - b.price)} />
        <MenuComparison />
      </section>
      <CuisineSelection />
      <VenueDetails />
      <section className="section container planning-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">მარტივი დასაწყისი</span>
            <h2>
              სურვილიდან
              <br />
              <em>თქვენს დღემდე.</em>
            </h2>
          </div>
          <Link href="/contacts" className="text-link">
            დავიწყოთ დაგეგმვა
            <Icon name="diagonal" />
          </Link>
        </div>
        <div className="planning-steps">
          {[
            {
              n: "01",
              icon: "calendar",
              title: "შეარჩიეთ თარიღი",
              text: "გაგვიზიარეთ ღონისძიების ტიპი, სასურველი დღე და სტუმრების რაოდენობა.",
            },
            {
              n: "02",
              icon: "plate",
              title: "აირჩიეთ მენიუ",
              text: "გაეცანით პაკეტებს. თუ არჩევანი ჯერ არ გაგიკეთებიათ, მენიუს შერჩევაში დაგეხმარებით.",
            },
            {
              n: "03",
              icon: "phone",
              title: "შევათანხმოთ დეტალები",
              text: "დაგიკავშირდებით თარიღის, მენიუსა და პირობების დასადასტურებლად.",
            },
          ].map((s) => (
            <article key={s.n}>
              <div>
                <span>{s.n}</span>
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="faq-section section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">მოკლე პასუხები</span>
            <h2>
              სანამ
              <br />
              <em>შევხვდებით.</em>
            </h2>
            <p>კიდევ გაქვთ კითხვა?</p>
            <a href="tel:+995599435644" className="text-link">
              +995 599 43 56 44
              <Icon name="diagonal" />
            </a>
          </div>
          <div className="faq-list">
            {[
              {
                q: "ფორმის გაგზავნისას თარიღი ავტომატურად იჯავშნება?",
                a: "არა. ფორმის შევსებით გვიგზავნით მოთხოვნას. თარიღისა და პირობების შეთანხმების შემდეგ ჯავშანს ადმინისტრაცია დაგიდასტურებთ.",
              },
              {
                q: "როგორ შევარჩიო მენიუ?",
                a: "მენიუს გვერდზე შეგიძლიათ ნახოთ პაკეტები და კერძები. თუ ჯერ არ გადაგიწყვეტიათ, ფორმაში აირჩიეთ „ერთად შევარჩიოთ“.",
              },
              {
                q: "როგორ დაგიკავშირდეთ?",
                a: "შეგიძლიათ შეავსოთ მოთხოვნის ფორმა, დაგვირეკოთ ან მოგვწეროთ ვოთსაპში. ფორმაში მიუთითეთ საკონტაქტო ნომერი.",
              },
              {
                q: "სად მდებარეობს ლა ფიესტა?",
                a: "ლა ფიესტა მდებარეობს მარტვილში, სამეგრელოში. ზუსტი მდებარეობისა და მარშრუტის სანახავად გახსენით გვერდი „მდებარეობა“.",
              },
              {
                q: "რა ღირს მენიუ?",
                a: `პაკეტების ფასებია ${[...packages]
                  .sort((a, b) => a.price - b.price)
                  .map((p) => p.price)
                  .join(
                    ", ",
                  )} ლარი. ფასები მოცემულია ერთ სტუმარზე. საბოლოო ფასსა და შემადგენლობას დაჯავშნამდე შევათანხმებთ.`,
              },
              {
                q: "შემიძლია დარბაზის წინასწარ დათვალიერება?",
                a: "დარბაზის დათვალიერების დროის შესათანხმებლად დაგვიკავშირდით ტელეფონით ან ვოთსაპით.",
              },
            ].map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="container home-contact-section">
        <div className="home-contact-photo">
          <Image
            src="/hero/hro.jpg"
            alt="ლა ფიესტას შენობა მარტვილში"
            fill
            sizes="(max-width:760px) 100vw, 45vw"
          />
        </div>
        <div className="home-contact-copy">
          <span className="eyebrow">დაგვიკავშირდით ან გვეწვიეთ</span>
          <h2>
            შევხვდეთ
            <br />
            <em>მარტვილში.</em>
          </h2>
          <p>
            გსურთ მენიუს დაზუსტება ან ღონისძიების დაგეგმვა? დაგვიკავშირდით და
            ერთად შევათანხმოთ დეტალები.
          </p>
          <a href="tel:+995599435644" className="home-contact-phone">
            +995 599 43 56 44
          </a>
          <div className="home-contact-links">
            <a
              href="https://www.google.com/maps/search/?api=1&query=42.43033,42.38122"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="pin" />
              მარშრუტის ნახვა ↗
            </a>
            <a
              href="https://wa.me/995599435644"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="phone" />
              მოგვწერეთ ვოთსაპში ↗
            </a>
          </div>
          <Link href="/contacts" className="btn">
            ჯავშნის მოთხოვნა
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="final-invitation">
        <div className="container">
          <span className="eyebrow">თქვენი დღის მოლოდინში</span>
          <span className="invitation-flower" aria-hidden="true">
            ✳
          </span>
          <h2>
            შევქმნათ კიდევ ერთი
            <br />
            <em>ლამაზი მოგონება.</em>
          </h2>
          <p>მოგვიყევით თქვენი გეგმების შესახებ.</p>
          <Link href="/contacts" className="btn ivory-button">
            დაგეგმეთ თქვენი ღონისძიება
            <Icon name="diagonal" />
          </Link>
        </div>
      </section>
    </>
  );
}
