import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/booking";
import { packages } from "@/lib/content";
export const runtime = "nodejs";
// Best-effort, per-instance abuse protection. No booking records are stored.
const attempts = new Map<string, { count: number; expires: number }>();
const WINDOW = 10 * 60 * 1000;
function reply(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}
export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (origin && origin !== req.nextUrl.origin) return reply({ ok: false }, 403);
  if (!req.headers.get("content-type")?.includes("application/json"))
    return reply({ ok: false }, 415);
  if (Number(req.headers.get("content-length")) > 8192)
    return reply({ ok: false }, 413);
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.expires <= now) attempts.delete(key);
  // Vercel sets x-vercel-forwarded-for; fall back to a shared bucket on other hosts.
  const ip =
    req.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    "shared";
  const slot = attempts.get(ip) || { count: 0, expires: now + WINDOW };
  if (slot.count >= 5 || attempts.size >= 10000)
    return reply({ ok: false }, 429);
  slot.count++;
  attempts.set(ip, slot);
  let raw: unknown;
  try {
    const body = await req.text();
    if (body.length > 8192) return reply({ ok: false }, 413);
    raw = JSON.parse(body);
  } catch {
    return reply({ ok: false }, 400);
  }
  if (
    raw &&
    typeof raw === "object" &&
    "company" in raw &&
    typeof raw.company === "string" &&
    raw.company.trim()
  )
    return reply({ ok: true });
  const parsed = bookingSchema.safeParse(raw);
  if (!parsed.success) return reply({ ok: false }, 400);
  const token = process.env.TELEGRAM_BOT_TOKEN,
    chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return reply({ ok: false }, 503);
  const b = parsed.data,
    pkg = packages.find((p) => p.slug === b.packageSlug);
  const text = [
    "📩 ლა ფიესტა — ჯავშნის მოთხოვნა",
    "",
    `სახელი: ${b.name}`,
    `ტელეფონი: ${b.phone}`,
    `თარიღი: ${b.date}`,
    `სტუმრები: ${b.guests}`,
    `ღონისძიება: ${b.eventType}`,
    `მენიუ: ${pkg ? pkg.name : "ჯერ არ არის არჩეული"}`,
    b.message ? `შენიშვნა: ${b.message}` : "",
    "თარიღი და პირობები დასადასტურებელია.",
  ]
    .filter(Boolean)
    .join("\n");
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(12000),
        cache: "no-store",
      },
    );
    const result = await res.json();
    if (!res.ok || result.ok !== true) return reply({ ok: false }, 502);
    return reply({ ok: true });
  } catch {
    return reply({ ok: false }, 502);
  }
}
