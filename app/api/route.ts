// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextRequest, NextResponse } from 'next/server'
// import { packages } from '@/lib/content'
// import { z } from 'zod'

// export const runtime = 'nodejs'

// const EVENT_TYPES = [
// 	'ქორწილი',
// 	'ნათლობა',
// 	'ბანკეტი',
// 	'გასვენების სუფრა',
// ] as const

// const BookingSchema = z.object({
// 	name: z.string().min(2).max(120),
// 	phone: z.string().min(5).max(40),
// 	date: z.string().optional(),
// 	guests: z.number().int().min(1).max(1000).optional(),
// 	message: z.string().max(1000).optional(),
// 	company: z.string().max(0).optional(),
// 	packageSlug: z
// 		.string()
// 		.refine(v => packages.some(p => p.slug === v), 'invalid package'),
// 	eventType: z.enum(EVENT_TYPES),
// })

// function line(label: string, val?: string | number) {
// 	return val ? `<b>${label}:</b> ${val}<br/>` : ''
// }

// async function sendTelegram(html: string, subject: string) {
// 	const token = process.env.TELEGRAM_BOT_TOKEN
// 	const chatId = process.env.TELEGRAM_CHAT_ID
// 	if (!token || !chatId) {
// 		console.warn('[TG] env missing: TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID')
// 		return { ok: false, error: 'TELEGRAM_ENV_MISSING' as const }
// 	}

// 	const url = `https://api.telegram.org/bot${token}/sendMessage`
// 	const res = await fetch(url, {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({
// 			chat_id: chatId,
// 			text:
// 				`📩 ${subject}\n\n` +
// 				html
// 					.replace(/<br\/>/g, '\n')
// 					.replace(/<b>/g, '*')
// 					.replace(/<\/b>/g, '*'),
// 			parse_mode: 'Markdown',
// 			disable_web_page_preview: true,
// 		}),
// 	})

// 	const data = await res.json().catch(() => ({}))
// 	if (!res.ok || !data?.ok) {
// 		console.error('[TG] sendMessage failed', res.status, data)
// 		return {
// 			ok: false,
// 			error: 'TELEGRAM_SEND_FAILED' as const,
// 			status: res.status,
// 			data,
// 		}
// 	}
// 	return { ok: true as const }
// }

// async function sendEmail(subject: string, html: string) {
// 	const resendKey = process.env.RESEND_API_KEY
// 	const toEmail = process.env.BOOKINGS_EMAIL_TO
// 	const fromEmail = process.env.BOOKINGS_EMAIL_FROM || 'bookings@example.com'
// 	if (!resendKey || !toEmail) return { ok: false, skipped: true }

// 	const { Resend } = await import('resend')
// 	const resend = new Resend(resendKey)
// 	const res = await resend.emails.send({
// 		from: `La Fiesta <${fromEmail}>`,
// 		to: [toEmail],
// 		subject,
// 		html,
// 	})
// 	if (res.error) {
// 		console.error('[EMAIL] Resend error', res.error)
// 		return { ok: false, error: 'EMAIL_SEND_FAILED' as const, detail: res.error }
// 	}
// 	return { ok: true as const }
// }

// export async function POST(req: NextRequest) {
// 	const reqId = Math.random().toString(36).slice(2, 8)
// 	try {
// 		const raw = await req.json()
// 		console.log(`[API ${reqId}] incoming`, raw)

// 		const parsed = BookingSchema.safeParse({
// 			...raw,
// 			guests:
// 				typeof raw.guests === 'string' ? parseInt(raw.guests, 10) : raw.guests,
// 		})
// 		if (!parsed.success) {
// 			console.warn(`[API ${reqId}] validation failed`, parsed.error.issues)
// 			return NextResponse.json(
// 				{ ok: false, error: 'VALIDATION', issues: parsed.error.issues },
// 				{ status: 400 }
// 			)
// 		}

// 		const data = parsed.data

// 		if (data.company && data.company.length > 0) {
// 			console.log(`[API ${reqId}] honeypot triggered, skip sending`)
// 			return NextResponse.json({ ok: true, skipped: 'HONEYPOT' })
// 		}

// 		const pkgName =
// 			packages.find(p => p.slug === data.packageSlug)?.name ?? data.packageSlug
// 		const subject = `ახალი ჯავშანი — ${data.eventType}${
// 			data.date ? ' · ' + data.date : ''
// 		}`

// 		const html =
// 			`<b>La Fiesta — ახალი ჯავშანი</b><br/>` +
// 			line('ივენთის ტიპი', data.eventType) +
// 			line('პაკეტი', pkgName) +
// 			line('სახელი', data.name) +
// 			line('ტელეფონი', data.phone) +
// 			line('თარიღი', data.date) +
// 			line('სტუმრები', data.guests ?? '') +
// 			(data.message
// 				? `<b>შეტყობინება:</b><br/>${data.message.replace(/\n/g, '<br/>')}`
// 				: '')

// 		const tg = await sendTelegram(html, subject)

// 		//  Email
// 		const email = await sendEmail(subject, html)

// 		console.log(`[API ${reqId}] result`, { tg, email })
// 		if (!tg.ok) {
// 			return NextResponse.json(
// 				{ ok: false, channel: { tg, email } },
// 				{ status: 500 }
// 			)
// 		}

// 		return NextResponse.json({ ok: true, channel: { tg, email } })
// 	} catch (e: any) {
// 		console.error(`[API ${reqId}] server error`, e)
// 		return NextResponse.json(
// 			{ ok: false, error: 'SERVER_ERROR' },
// 			{ status: 500 }
// 		)
// 	}
// }

// app/api/route.ts (Next App Router)
import { NextRequest, NextResponse } from 'next/server'
import { packages } from '@/lib/content'

export const runtime = 'nodejs'

function pkgName(slug: string) {
	return packages.find(p => p.slug === slug)?.name ?? slug
}
type BookingPayload = {
	eventType: string
	packageSlug: string
	name: string
	phone: string
	date?: string
	guests?: number
	message?: string
}

function buildTgText(payload: BookingPayload) {
	const lines = [
		`📩 ახალი ჯავშანი — ${payload.eventType}${
			payload.date ? ' · ' + payload.date : ''
		}`,
		'',
		`ივენთის ტიპი: ${payload.eventType}`,
		`პაკეტი: ${pkgName(payload.packageSlug)}`,
		`სახელი: ${payload.name}`,
		`ტელეფონი: ${payload.phone}`,
		payload.date ? `თარიღი: ${payload.date}` : '',
		payload.guests ? `სტუმრები: ${payload.guests}` : '',
		payload.message ? 'შეტყობინება:\n' + String(payload.message) : '',
	].filter(Boolean)
	return lines.join('\n')
}

async function sendTelegram(text: string) {
	const token = process.env.TELEGRAM_BOT_TOKEN
	const chatId = process.env.TELEGRAM_CHAT_ID
	if (!token || !chatId) {
		console.warn('[TG] missing TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID')
		return { ok: false, error: 'TELEGRAM_ENV_MISSING' as const }
	}
	const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			chat_id: chatId,
			text,
			disable_web_page_preview: true,
			// без parse_mode — чтобы не мудрить с экранированием
		}),
	})
	const data = await res.json().catch(() => ({}))
	if (!res.ok || !data?.ok) {
		console.error('[TG] sendMessage failed', res.status, data)
		return { ok: false as const, status: res.status, data }
	}
	return { ok: true as const }
}

export async function POST(req: NextRequest) {
	try {
		const base = process.env.NEXT_PUBLIC_API_URL
		if (!base) {
			return NextResponse.json(
				{ ok: false, error: 'API_URL_MISSING' },
				{ status: 500 }
			)
		}

		const payload = await req.json()

		// Проксируем в Nest /bookings
		const r = await fetch(`${base}/bookings`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(payload),
			cache: 'no-store',
		})
		const data = await r.json().catch(() => ({}))

		// Шлём TG только при успешном создании и если это не honeypot
		let tg = { ok: false }
		if (data?.ok === true && data?.skipped !== 'HONEYPOT') {
			const text = buildTgText(payload)
			tg = await sendTelegram(text)
		}

		return NextResponse.json({ ...data, channel: { tg } }, { status: 200 })
	} catch (e: unknown) {
		return NextResponse.json(
			{ ok: false, error: 'PROXY_ERROR', detail: (e as Error)?.message },
			{ status: 500 }
		)
	}
}
