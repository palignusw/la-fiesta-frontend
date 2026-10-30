import Image from "next/image";
import Link from "next/link";
import PackageGrid from "@/components/Menu/PackageGrid";
import { packages } from "@/lib/content";
import EventExplorer from "@/components/Experience/EventExplorer";
import Icon from "@/components/Experience/Icon";
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
            აქ იწყება
            <br />
            თქვენი <em>დღესასწაული.</em>
          </h1>
          <div className="editorial-bottom">
            <p>
              ლამაზი სივრცე. ქართული სუფრა.
              <br />
              თქვენი ადამიანები — ერთ მაგიდასთან.
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
            <Icon name="heart" /> თქვენი განსაკუთრებული დღე
          </span>
          <i />
          <span>
            <Icon name="plate" /> ქართული და მეგრული გემო
          </span>
          <i />
          <span>
            <Icon name="pin" /> მარტვილი, სამეგრელო
          </span>
        </div>
      </div>
      <section className="section container welcome-editorial">
        <div className="welcome-title">
          <span className="eyebrow">სიხარული იწყება შეხვედრით</span>
          <h2>
            ზოგი დღე
            <br />
            უბრალოდ <em>განსაკუთრებულია.</em>
          </h2>
        </div>
        <div className="welcome-note">
          <span className="decorative-star" aria-hidden="true">
            ✳
          </span>
          <p>
            ამ დღისთვის იკრიბებიან თქვენი ადამიანები. იშლება ქართული სუფრა.
            იწყება საუბარი, მუსიკა და მოგონებები.
          </p>
          <p>ლა ფიესტაში სწორედ ასეთი შეხვედრებისთვის გელოდებით.</p>
          <Link href="/about" className="text-link">
            გაიცანით ლა ფიესტა
            <Icon name="diagonal" />
          </Link>
        </div>
      </section>
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
              მენიუ სტუმრებისა და სურვილების მიხედვით შეარჩიეთ.
            </p>
            <Link href="/menu" className="text-link">
              ყველა პაკეტი
              <Icon name="diagonal" />
            </Link>
          </div>
        </div>
        <PackageGrid items={[...packages].sort((a, b) => a.price - b.price)} />
      </section>
      <section className="venue-story container">
        <div className="venue-tall">
          <Image
            src="/hero/hro.jpg"
            alt="ლა ფიესტას შენობა"
            fill
            sizes="(max-width:760px) 100vw, 45vw"
          />
        </div>
        <div className="venue-story-copy">
          <span className="eyebrow">გარემო ქმნის განწყობას</span>
          <h2>
            დეტალები,
            <br />
            რომლებიც თქვენს
            <br />
            <em>დღეს ერგება.</em>
          </h2>
          <p>
            დარბაზი, სადღესასწაულო სუფრა და თქვენი საყვარელი ადამიანები.
            დაათვალიერეთ სივრცე და წარმოიდგინეთ თქვენი დღე ლა ფიესტაში.
          </p>
          <Link href="/gallery" className="text-link">
            შეაბიჯეთ ჩვენს სივრცეში
            <Icon name="diagonal" />
          </Link>
          <div className="venue-small">
            <Image
              src="/gallery/hall8.jpg"
              alt="ლა ფიესტას დარბაზის დეტალები"
              fill
              sizes="(max-width:760px) 70vw, 27vw"
            />
          </div>
        </div>
      </section>
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
              text: "გაეცანით პაკეტებს ან სუფრის შერჩევაში ჩვენ დაგეხმარებით.",
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
                a: "ფორმა აგზავნის მოთხოვნას. თავისუფალ თარიღსა და პირობებს ადმინისტრაცია პირადად დაგიდასტურებთ.",
              },
              {
                q: "როგორ შევარჩიო მენიუ?",
                a: "მენიუს გვერდზე შეგიძლიათ ნახოთ პაკეტები და კერძები. თუ ჯერ არ გადაგიწყვეტიათ, ფორმაში აირჩიეთ „ერთად შევარჩიოთ“.",
              },
              {
                q: "როგორ დაგიკავშირდებით?",
                a: "მოგვწერეთ ფორმით, დაგვირეკეთ ან გამოიყენეთ ვოთსაპი. ფორმაში მიუთითეთ ნომერი, რომელზეც დაგიკავშირდებით.",
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
