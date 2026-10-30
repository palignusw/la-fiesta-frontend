import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Experience/Icon";
export const metadata: Metadata = {
  title: "ჩვენ შესახებ",
  description:
    "გაიცანით ლა ფიესტა — რესტორანი და საბანკეტო დარბაზი მარტვილში. ქართული და მეგრული მენიუ, დარბაზის ფოტოები და ღონისძიების დაგეგმვა.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <section className="section container about-content">
      <div className="page-heading">
        <span className="eyebrow">ლა ფიესტა · მარტვილი · სამეგრელო</span>
        <h1>
          ქართული სუფრა.
          <br />
          <em>თქვენი დღესასწაული.</em>
        </h1>
        <p>
          ლა ფიესტა მარტვილში მდებარე რესტორანი და საბანკეტო დარბაზია. ჩვენთან
          შეგიძლიათ დაგეგმოთ ქორწილი, ნათლობა, ბანკეტი და ოჯახური შეკრება.
        </p>
      </div>
      <div className="story-grid">
        <div className="story-image">
          <Image
            src="/gallery/hall5.jpg"
            alt="ლა ფიესტას დარბაზი და მაგიდების განლაგება"
            fill
            sizes="(max-width:760px) 100vw, 60vw"
          />
        </div>
        <div className="story-panel">
          <span className="eyebrow light">
            ღონისძიება თქვენი სურვილების მიხედვით
          </span>
          <h2>
            გაეცანით სივრცეს.
            <br />
            შეარჩიეთ მენიუ.
          </h2>
          <p>
            მენიუში წარმოდგენილია ქართული და მეგრული კერძები. პაკეტების
            გვერდებზე შეგიძლიათ ნახოთ კერძების სრული ჩამონათვალი და ფასი ერთ
            სტუმარზე.
          </p>
          <p>
            გალერეაში ნახავთ დარბაზის ფოტოებსა და სხვადასხვა ღონისძიების
            გაფორმების მაგალითებს. დეტალები, რომლებიც თქვენი ღონისძიებისთვის
            მნიშვნელოვანია, წინასწარ შევათანხმოთ.
          </p>
          <Link href="/gallery" className="text-link">
            დარბაზის დათვალიერება <Icon name="diagonal" />
          </Link>
        </div>
      </div>
      <div className="about-practical">
        <div>
          <span className="eyebrow">პირველ საუბრამდე</span>
          <h2>რაზე შევთანხმდეთ?</h2>
          <p>
            ღონისძიების დაგეგმვა რამდენიმე მარტივი დეტალით იწყება. მოგვწერეთ
            თქვენი სურვილები ან დაგვირეკეთ.
          </p>
          <Link href="/contacts" className="btn">
            ჯავშნის მოთხოვნა
            <Icon name="arrow" />
          </Link>
        </div>
        <ol>
          {[
            {
              title: "ღონისძიება და სასურველი თარიღი",
              text: "მიუთითეთ, რას გეგმავთ და რომელი დღე გაწყობთ. თარიღის ხელმისაწვდომობას ადმინისტრაცია დაგიდასტურებთ.",
            },
            {
              title: "სტუმრების რაოდენობა და მენიუ",
              text: "გაგვიზიარეთ სტუმრების სავარაუდო რაოდენობა. აირჩიეთ პაკეტი ან მენიუს შერჩევაში დახმარება გვთხოვეთ.",
            },
            {
              title: "გაფორმება და სხვა დეტალები",
              text: "გვითხარით, რა არის თქვენთვის მნიშვნელოვანი. მომსახურების პირობებსა და საბოლოო ფასს წინასწარ შევათანხმებთ.",
            },
          ].map((item, i) => (
            <li key={item.title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="about-contact-band">
        <div>
          <Icon name="pin" />
          <span>
            მარტვილი, საქართველო
            <Link href="/location">მდებარეობა და მარშრუტი ↗</Link>
          </span>
        </div>
        <div>
          <Icon name="phone" />
          <span>
            დაგვიკავშირდით<a href="tel:+995599435644">+995 599 43 56 44</a>
          </span>
        </div>
        <Link href="/menu" className="text-link">
          მენიუს ნახვა
          <Icon name="diagonal" />
        </Link>
      </div>
    </section>
  );
}
