import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/Booking/BookingForm";
import Icon from "@/components/Experience/Icon";
export const metadata: Metadata = {
  title: "ჯავშნის მოთხოვნა",
  alternates: { canonical: "/contacts" },
};
export default function ContactsPage() {
  return (
    <section className="reservation-page">
      <div className="container reservation-layout">
        <aside className="reservation-intro">
          <span className="eyebrow">დაგეგმეთ ლა ფიესტასთან ერთად</span>
          <h1>
            თქვენი დღე.
            <br />
            <em>თქვენი ისტორია.</em>
          </h1>
          <p>ჩვენ კი დაგეხმარებით, რომ მას ლამაზი დასაწყისი ჰქონდეს.</p>
          <div className="reservation-intro-photo">
            <Image
              src="/gallery/hall3.jpg"
              alt="დღესასწაული ლა ფიესტაში"
              fill
              sizes="(max-width:800px) 100vw, 40vw"
            />
            <span>ერთად ყოფნისთვის შექმნილი სივრცე</span>
          </div>
          <div className="reservation-help">
            <div>
              <Icon name="phone" />
              <span>
                გირჩევნიათ საუბარი?
                <a href="tel:+995599435644">+995 599 43 56 44</a>
              </span>
            </div>
            <a
              href="https://wa.me/995599435644"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              მოგვწერეთ ვოთსაპში
              <Icon name="diagonal" />
            </a>
          </div>
          <p className="reservation-intro-note">
            შეავსეთ სამი მარტივი ნაბიჯი. დაგიკავშირდებით თარიღისა და პირობების
            დასადასტურებლად.
          </p>
        </aside>
        <BookingForm />
      </div>
    </section>
  );
}
