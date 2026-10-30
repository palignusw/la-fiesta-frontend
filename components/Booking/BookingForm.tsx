"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/content";
import { bookingSchema, eventTypes } from "@/lib/booking";
import { formatGeorgianDate } from "@/lib/calendar";
import CalendarPicker from "./CalendarPicker";
import CustomSelect from "./CustomSelect";
import Icon from "@/components/Experience/Icon";
const initial = {
  name: "",
  phone: "",
  date: "",
  guests: "100",
  eventType: "",
  packageSlug: "undecided",
  message: "",
  company: "",
};
const steps = ["ღონისძიება", "მენიუ", "კონტაქტი"];
export default function BookingForm() {
  const [values, setValues] = useState(initial);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const busy = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const changeStepFocus = useRef(false);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setValues((v) => ({
      ...v,
      eventType: eventTypes.includes(
        q.get("event") as (typeof eventTypes)[number],
      )
        ? q.get("event")!
        : "",
      packageSlug: packages.some((p) => p.slug === q.get("menu"))
        ? q.get("menu")!
        : "undecided",
    }));
  }, []);
  useEffect(() => {
    if (changeStepFocus.current) {
      heading.current?.focus();
      changeStepFocus.current = false;
    }
  }, [step]);
  useEffect(() => {
    if (status === "ok" || status === "error") alertRef.current?.focus();
  }, [status]);
  function update(key: keyof typeof initial, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
    if (status === "error") setStatus("idle");
  }
  function goto(next: number) {
    changeStepFocus.current = true;
    setStep(next);
    setErrors({});
  }
  function validate(all = false) {
    const parsed = bookingSchema.safeParse(values);
    const keys = all
      ? null
      : step === 0
        ? ["eventType", "date", "guests"]
        : ["packageSlug"];
    const next: Record<string, string> = {};
    if (!parsed.success)
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if ((!keys || keys.includes(key)) && !next[key]) next[key] = i.message;
      });
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      const targetStep = ["eventType", "date", "guests"].includes(first)
        ? 0
        : first === "packageSlug"
          ? 1
          : 2;
      if (targetStep !== step) {
        setStep(targetStep);
        requestAnimationFrame(() =>
          formRef.current
            ?.querySelector<HTMLElement>(`[data-field="${first}"]`)
            ?.focus(),
        );
      } else
        formRef.current
          ?.querySelector<HTMLElement>(`[data-field="${first}"]`)
          ?.focus();
      return false;
    }
    return true;
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    if (!validate(step === 2)) return;
    if (step < 2) {
      goto(step + 1);
      return;
    }
    busy.current = true;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingSchema.parse(values)),
        signal: AbortSignal.timeout(20000),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMessage(
          res.status === 429
            ? "გთხოვთ, ცოტა ხანში სცადოთ ხელახლა."
            : "მოთხოვნა ვერ გაიგზავნა. სცადეთ მოგვიანებით ან დაგვირეკეთ: +995 599 43 56 44.",
        );
        setStatus("error");
        return;
      }
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
  const selectedPackage = packages.find((p) => p.slug === values.packageSlug);
  const guestCount = Number(values.guests);
  const total =
    selectedPackage && guestCount >= 60 && guestCount <= 1200
      ? selectedPackage.price * guestCount
      : null;
  const fieldProps = (name: keyof typeof initial) => ({
    name,
    "data-field": name,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const error = (name: string) =>
    errors[name] ? (
      <span id={`${name}-error`} className="field-error">
        {errors[name]}
      </span>
    ) : null;
  if (status === "ok")
    return (
      <div
        className="reservation-card reservation-success"
        ref={alertRef}
        tabIndex={-1}
        role="status"
      >
        <span className="success-seal">
          <Icon name="check" />
        </span>
        <span className="eyebrow">მოთხოვნა მიღებულია</span>
        <h2>
          პირველი ნაბიჯი
          <br />
          უკვე გადადგმულია.
        </h2>
        <p>
          თქვენი მოთხოვნა გაიგზავნა. დაგიკავშირდებით თარიღისა და დეტალების
          დასადასტურებლად.
        </p>
        <div className="success-details">
          <span>{values.eventType}</span>
          <strong>{formatGeorgianDate(values.date)}</strong>
          <span>{values.guests} სტუმარი</span>
        </div>
        <p className="reservation-disclaimer">
          ეს არის მოთხოვნა. ჯავშანი ძალაში შედის ადმინისტრაციასთან შეთანხმების
          შემდეგ.
        </p>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setValues(initial);
            setStatus("idle");
            goto(0);
          }}
        >
          ახალი მოთხოვნა <Icon name="arrow" />
        </button>
      </div>
    );
  return (
    <form
      className="reservation-card"
      ref={formRef}
      onSubmit={submit}
      noValidate
      aria-busy={status === "sending"}
    >
      <div className="reservation-topline">
        <span>ლა ფიესტა</span>
        <span>თქვენი ღონისძიების დაგეგმვა</span>
      </div>
      <nav
        className="reservation-progress"
        aria-label="მოთხოვნის შევსების ეტაპები"
      >
        {steps.map((label, i) => (
          <button
            type="button"
            key={label}
            disabled={i > step || status === "sending"}
            aria-current={step === i ? "step" : undefined}
            onClick={() => goto(i)}
            className={i === step ? "current" : i < step ? "complete" : ""}
          >
            <span>{i < step ? <Icon name="check" /> : `0${i + 1}`}</span>
            <small>{label}</small>
          </button>
        ))}
      </nav>
      <div className="reservation-heading">
        <span className="eyebrow">ნაბიჯი 0{step + 1} / 03</span>
        <h2 ref={heading} tabIndex={-1}>
          {
            ["როდის შევხვდეთ?", "როგორი სუფრა გსურთ?", "როგორ დაგიკავშირდეთ?"][
              step
            ]
          }
        </h2>
        <p>
          {
            [
              "აირჩიეთ ღონისძიება, თარიღი და სტუმრების რაოდენობა.",
              "შეარჩიეთ პაკეტი ან მენიუ ჩვენთან ერთად შეათანხმეთ.",
              "დატოვეთ თქვენი ნომერი — დეტალებს პირადად შევათანხმებთ.",
            ][step]
          }
        </p>
      </div>
      {status === "error" && (
        <div
          ref={alertRef}
          role="alert"
          tabIndex={-1}
          className="form-alert error"
        >
          {message}
        </div>
      )}
      <fieldset disabled={status === "sending"}>
        <legend className="visually-hidden">{steps[step]}</legend>
        <div className="honey" aria-hidden="true">
          <label>
            კომპანია
            <input
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        {step === 0 && (
          <div className="reservation-fields">
            <CustomSelect
              name="eventType"
              label="რას აღნიშნავთ?"
              options={eventTypes.map((t) => ({ value: t, label: t }))}
              value={values.eventType}
              onChange={(v) => update("eventType", v)}
              error={errors.eventType}
              disabled={status === "sending"}
            />
            <CalendarPicker
              value={values.date}
              onChange={(v) => update("date", v)}
              error={errors.date}
              disabled={status === "sending"}
            />
            <div className="guest-control">
              <div>
                <label htmlFor="reservation-guests" className="field-label">
                  სტუმრების რაოდენობა
                </label>
                <small>მინიმუმ 60 სტუმარი</small>
              </div>
              <div
                className={`guest-stepper ${errors.guests ? "invalid" : ""}`}
              >
                <button
                  type="button"
                  aria-label="სტუმრების რაოდენობის შემცირება ათით"
                  disabled={guestCount <= 60}
                  onClick={() =>
                    update(
                      "guests",
                      String(Math.max(60, (guestCount || 60) - 10)),
                    )
                  }
                >
                  −
                </button>
                <input
                  id="reservation-guests"
                  inputMode="numeric"
                  type="text"
                  value={values.guests}
                  maxLength={4}
                  onChange={(e) => {
                    if (/^\d*$/.test(e.target.value))
                      update("guests", e.target.value);
                  }}
                  {...fieldProps("guests")}
                  aria-label="სტუმრების რაოდენობა"
                />
                <button
                  type="button"
                  aria-label="სტუმრების რაოდენობის გაზრდა ათით"
                  disabled={guestCount >= 1200}
                  onClick={() =>
                    update(
                      "guests",
                      String(Math.min(1200, (guestCount || 60) + 10)),
                    )
                  }
                >
                  +
                </button>
              </div>
              {error("guests")}
            </div>
          </div>
        )}
        {step === 1 && (
          <div
            className="reservation-packages"
            role="radiogroup"
            aria-label="სასურველი მენიუ"
            data-field="packageSlug"
            tabIndex={-1}
          >
            {[...packages]
              .sort((a, b) => a.price - b.price)
              .map((pkg) => (
                <label
                  key={pkg.slug}
                  className={`reservation-package ${values.packageSlug === pkg.slug ? "chosen" : ""}`}
                >
                  <input
                    type="radio"
                    name="menu-choice"
                    checked={values.packageSlug === pkg.slug}
                    onChange={() => update("packageSlug", pkg.slug)}
                  />
                  <span className="reservation-package-photo">
                    <Image
                      src={
                        "/menu/" +
                        (pkg.slug === "40gel"
                          ? "lobio.jpg"
                          : pkg.slug === "70gel"
                            ? "xachapuri.jpg"
                            : "gochi.jpg")
                      }
                      alt=""
                      fill
                      sizes="90px"
                    />
                  </span>
                  <span className="reservation-package-copy">
                    <strong>{pkg.name}</strong>
                    <small>{pkg.highlights.slice(0, 2).join(" · ")}</small>
                    <Link
                      href={`/menu/${pkg.slug}`}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      მენიუს ნახვა ↗
                    </Link>
                  </span>
                  <span className="reservation-package-price">
                    {pkg.price} ₾<small>სტუმარზე</small>
                  </span>
                  <span className="radio-indicator" aria-hidden="true">
                    {values.packageSlug === pkg.slug && <Icon name="check" />}
                  </span>
                </label>
              ))}
            <label
              className={`reservation-package undecided ${values.packageSlug === "undecided" ? "chosen" : ""}`}
            >
              <input
                type="radio"
                name="menu-choice"
                checked={values.packageSlug === "undecided"}
                onChange={() => update("packageSlug", "undecided")}
              />
              <span className="undecided-icon">
                <Icon name="plate" />
              </span>
              <span className="reservation-package-copy">
                <strong>ერთად შევარჩიოთ</strong>
                <small>მენიუს პირადად შევათანხმებთ</small>
              </span>
              <span className="radio-indicator" aria-hidden="true">
                {values.packageSlug === "undecided" && <Icon name="check" />}
              </span>
            </label>
            {error("packageSlug")}
            <p className="reservation-disclaimer">
              ფასი და მენიუს შემადგენლობა საბოლოოდ დასტურდება ადმინისტრაციასთან.
            </p>
          </div>
        )}
        {step === 2 && (
          <div className="reservation-fields">
            <div className="reservation-receipt">
              <div>
                <span>თქვენი ღონისძიება</span>
                <button type="button" onClick={() => goto(0)}>
                  შეცვლა ↗
                </button>
              </div>
              <strong>
                {values.eventType} · {formatGeorgianDate(values.date)}
              </strong>
              <p>
                {values.guests} სტუმარი <span>·</span>{" "}
                {selectedPackage
                  ? selectedPackage.name
                  : "მენიუს ერთად შევარჩევთ"}
              </p>
              {total !== null && (
                <div className="receipt-total">
                  <span>სავარაუდო ღირებულება</span>
                  <b>{new Intl.NumberFormat("ka-GE").format(total)} ₾</b>
                </div>
              )}
            </div>
            <label className="bespoke-input">
              <span className="field-label">სახელი და გვარი</span>
              <input
                autoComplete="name"
                maxLength={100}
                placeholder="როგორ მოგმართოთ?"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                {...fieldProps("name")}
              />
              {error("name")}
            </label>
            <label className="bespoke-input">
              <span className="field-label">ტელეფონის ნომერი</span>
              <span className="phone-input">
                <Icon name="phone" />
                <input
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  placeholder="მაგ.: 599 43 56 44"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  {...fieldProps("phone")}
                />
              </span>
              {error("phone")}
            </label>
            <label className="bespoke-input">
              <span className="field-label">
                თქვენი სურვილები <small>არასავალდებულო</small>
              </span>
              <textarea
                rows={3}
                maxLength={1000}
                placeholder="მოგვიყევით, როგორ წარმოგიდგენიათ ეს დღე…"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                {...fieldProps("message")}
              />
              {error("message")}
            </label>
            <p className="reservation-disclaimer">
              გაგზავნით ეთანხმებით მონაცემების გამოყენებას თქვენთან
              დასაკავშირებლად. მოთხოვნა გადაეგზავნება ადმინისტრაციას ტელეგრამში.
            </p>
          </div>
        )}
        <div className="reservation-navigation">
          {step > 0 && (
            <button
              className="reservation-back"
              type="button"
              onClick={() => goto(step - 1)}
            >
              ← უკან
            </button>
          )}
          <button
            className="btn reservation-next"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending"
              ? "იგზავნება…"
              : step === 2
                ? "მოთხოვნის გაგზავნა"
                : "გაგრძელება"}
            <Icon name="arrow" />
          </button>
        </div>
      </fieldset>
      <div className="reservation-bottom">
        <Icon name="heart" />
        <span>ჯავშანი დასტურდება პირადი შეთანხმების შემდეგ</span>
      </div>
    </form>
  );
}
