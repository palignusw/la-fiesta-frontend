"use client";
import { useEffect, useRef, useState } from "react";
import { packages } from "@/lib/content";
import { bookingSchema, eventTypes, todayInGeorgia } from "@/lib/booking";
export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [minDate, setMinDate] = useState("");
  const busy = useRef(false);
  const alertRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMinDate(todayInGeorgia()), []);
  useEffect(() => {
    if (status === "ok" || status === "error") alertRef.current?.focus();
  }, [status]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    setErrors({});
    setMessage("");
    setStatus("idle");
    const parsed = bookingSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      (
        form.elements.namedItem(Object.keys(next)[0]) as HTMLElement | null
      )?.focus();
      return;
    }
    busy.current = true;
    setStatus("sending");
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(20000),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMessage(
          res.status === 429
            ? "გთხოვთ, ცოტა ხანში სცადოთ ხელახლა."
            : res.status === 400
              ? "შეამოწმეთ შევსებული მონაცემები."
              : "მოთხოვნა ვერ გაიგზავნა. სცადეთ მოგვიანებით ან დაგვირეკეთ: +995 599 43 56 44.",
        );
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("ok");
    } catch {
      setMessage(
        "კავშირის შეფერხება. გაგზავნის სტატუსის დასაზუსტებლად დაგვირეკეთ: +995 599 43 56 44.",
      );
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }
  const error = (name: string) =>
    errors[name] ? (
      <span id={`${name}-error`} className="field-error">
        {errors[name]}
      </span>
    ) : null;
  const props = (name: string) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <h2>ჯავშნის მოთხოვნა</h2>
      <p>შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით.</p>
      {(status === "ok" || status === "error") && (
        <div
          ref={alertRef}
          tabIndex={-1}
          role={status === "error" ? "alert" : "status"}
          className={`form-alert ${status === "error" ? "error" : ""}`}
        >
          {status === "ok"
            ? "თქვენი მოთხოვნა გაიგზავნა! დაგიკავშირდებით თარიღისა და დეტალების დასადასტურებლად."
            : message}
        </div>
      )}
      <fieldset disabled={status === "sending"}>
        <legend className="visually-hidden">ღონისძიების დეტალები</legend>
        <div className="honey" aria-hidden="true">
          <label>
            კომპანია
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="form-grid">
          <label className="form-field wide">
            სახელი და გვარი
            <input
              name="name"
              autoComplete="name"
              maxLength={100}
              placeholder="თქვენი სახელი და გვარი"
              required
              {...props("name")}
            />
            {error("name")}
          </label>
          <label className="form-field wide">
            ტელეფონი
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              maxLength={30}
              placeholder="მაგ.: 599 43 56 44"
              required
              {...props("phone")}
            />
            {error("phone")}
          </label>
          <label className="form-field">
            სასურველი თარიღი
            <input
              type="date"
              lang="ka"
              name="date"
              min={minDate}
              required
              {...props("date")}
            />
            {error("date")}
          </label>
          <label className="form-field">
            სტუმრების რაოდენობა
            <input
              type="number"
              name="guests"
              inputMode="numeric"
              min={60}
              max={1200}
              step={1}
              placeholder="მინ. 60"
              required
              {...props("guests")}
            />
            {error("guests")}
          </label>
          <label className="form-field">
            ღონისძიების ტიპი
            <select
              name="eventType"
              defaultValue=""
              required
              {...props("eventType")}
            >
              <option value="" disabled>
                აირჩიეთ ტიპი
              </option>
              {eventTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            {error("eventType")}
          </label>
          <label className="form-field">
            სასურველი მენიუ
            <select
              name="packageSlug"
              defaultValue="undecided"
              {...props("packageSlug")}
            >
              <option value="undecided">ჯერ არ ამირჩევია</option>
              {[...packages]
                .sort((a, b) => a.price - b.price)
                .map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
            </select>
            {error("packageSlug")}
          </label>
          <label className="form-field wide">
            დამატებითი ინფორმაცია{" "}
            <span className="visually-hidden">არასავალდებულო</span>
            <textarea
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="გაგვიზიარეთ თქვენი სურვილები (არასავალდებულო)"
              {...props("message")}
            />
            {error("message")}
          </label>
        </div>
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "იგზავნება…" : "მოთხოვნის გაგზავნა ↗"}
        </button>
      </fieldset>
      <p className="form-privacy">
        გაგზავნით ეთანხმებით მონაცემების გამოყენებას თქვენს მოთხოვნაზე
        დასაკავშირებლად. მოთხოვნა გადაეგზავნება ადმინისტრაციას ტელეგრამში.
      </p>
    </form>
  );
}
