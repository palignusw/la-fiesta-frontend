import { z } from "zod";
import { packages } from "./content";
export const eventTypes = [
  "ქორწილი",
  "ნათლობა",
  "ბანკეტი",
  "ოჯახური შეხვედრა",
  "ქელეხი",
  "სხვა",
] as const;
export function todayInGeorgia() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tbilisi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}
export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "შეიყვანეთ სახელი და გვარი")
    .max(100, "მაქსიმუმ 100 სიმბოლო"),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine(
      (v) => /^\+?\d{9,15}$/.test(v.replace(/[\s()-]/g, "")),
      "შეიყვანეთ სწორი ტელეფონის ნომერი",
    ),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "აირჩიეთ თარიღი")
    .refine((v) => {
      const d = new Date(v + "T00:00:00Z");
      return (
        !Number.isNaN(d.getTime()) &&
        d.toISOString().slice(0, 10) === v &&
        v >= todayInGeorgia()
      );
    }, "აირჩიეთ სწორი, მიმდინარე ან მომავალი თარიღი"),
  guests: z.coerce
    .number()
    .int("შეიყვანეთ მთელი რიცხვი")
    .min(60, "სტუმრების მინიმალური რაოდენობაა 60")
    .max(1200, "მაქსიმუმ 1200 სტუმარი"),
  eventType: z.enum(eventTypes, { message: "აირჩიეთ ღონისძიების ტიპი" }),
  packageSlug: z
    .string()
    .refine(
      (v) => v === "undecided" || packages.some((p) => p.slug === v),
      "აირჩიეთ მენიუ",
    ),
  message: z.string().trim().max(1000, "მაქსიმუმ 1000 სიმბოლო").default(""),
  company: z.string().max(200).optional(),
});
