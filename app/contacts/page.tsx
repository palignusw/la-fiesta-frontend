import type { Metadata } from "next";
import BookingForm from "@/components/Booking/BookingForm";
export const metadata: Metadata = {
  title: "ჯავშნის მოთხოვნა",
  alternates: { canonical: "/contacts" },
};
export default function ContactsPage() {
  return (
    <section className="section container booking-layout">
      <div className="booking-intro">
        <span className="eyebrow">თქვენი დღე იწყება აქ</span>
        <h1>
          მოდით,
          <br />
          დავგეგმოთ.
        </h1>
        <p>
          მოგვწერეთ სასურველი თარიღი და ღონისძიების დეტალები. დაგიკავშირდებით
          თავისუფალი ადგილისა და პირობების დასადასტურებლად.
        </p>
        <a className="contact-phone" href="tel:+995599435644">
          +995 599 43 56 44 ↗
        </a>
        <a
          className="text-link"
          href="https://wa.me/995599435644"
          target="_blank"
          rel="noreferrer"
        >
          მოგვწერეთ ვოთსაპში ↗
        </a>
        <div className="booking-note">
          გთხოვთ გაითვალისწინოთ: ფორმის გაგზავნა თარიღის ავტომატურ დაჯავშნას არ
          ნიშნავს. ჯავშანი დასტურდება ადმინისტრაციასთან შეთანხმების შემდეგ.
        </div>
      </div>
      <BookingForm />
    </section>
  );
}
