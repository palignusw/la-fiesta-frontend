import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ჩვენ შესახებ",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <section className="section container">
      <div className="page-heading">
        <span className="eyebrow">ლა ფიესტა · მარტვილი</span>
        <h1>
          ადგილი, სადაც
          <br />
          ერთად ყოფნა გვიხარია.
        </h1>
      </div>
      <div className="story-grid">
        <div className="story-image">
          <Image
            src="/gallery/hall3.jpg"
            alt="ლა ფიესტას სადღესასწაულო სივრცე"
            fill
            sizes="(max-width:760px) 100vw, 60vw"
          />
        </div>
        <div className="story-panel">
          <span className="eyebrow light">ჩვენი მასპინძლობა</span>
          <h2>
            თქვენი დღე,
            <br />
            ჩვენი ზრუნვა.
          </h2>
          <p>
            ლა ფიესტა მარტვილში მდებარე რესტორანი და საბანკეტო სივრცეა. აქ
            ვიკრიბებით ქორწილის, ნათლობისა და ოჯახური თუ მეგობრული შეხვედრების
            აღსანიშნავად.
          </p>
          <p>
            აირჩიეთ მენიუ, გაგვიზიარეთ თქვენი სურვილები და ერთად დავგეგმოთ
            ღონისძიების დეტალები.
          </p>
          <Link href="/contacts" className="text-link">
            დაგვიკავშირდით ↗
          </Link>
        </div>
      </div>
      <div className="intro-grid section">
        <h2>
          ტრადიციული გემო.
          <br />
          თბილი გარემო.
        </h2>
        <div className="intro-copy">
          <p>
            ქართული სუფრა მხოლოდ კერძები არ არის — ეს შეხვედრა, საუბარი და
            გაზიარებული სიხარულია. ჩვენი მენიუ აერთიანებს ქართულ და მეგრულ
            კერძებს, სადღესასწაულო სუფრისთვის.
          </p>
          <Link href="/menu" className="text-link">
            აღმოაჩინეთ მენიუ ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
