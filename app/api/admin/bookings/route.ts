import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const base = process.env.NEXT_PUBLIC_API_URL

function basic() {
	const u = process.env.ADMIN_USER
	const p = process.env.ADMIN_PASS
	if (!u || !p) return null
	return 'Basic ' + Buffer.from(`${u}:${p}`).toString('base64')
}

export async function GET() {
	if (!base) {
		return NextResponse.json({ error: 'API_URL_MISSING' }, { status: 500 })
	}
	const auth = basic()
	if (!auth) {
		return NextResponse.json({ error: 'ADMIN_CREDS_MISSING' }, { status: 500 })
	}

	const r = await fetch(`${base}/admin/bookings`, {
		headers: { authorization: auth },
		cache: 'no-store',
	})

	const ct = r.headers.get('content-type') || ''
	const body = ct.includes('application/json')
		? await r.json().catch(() => ({}))
		: await r.text().catch(() => '')

	if (!r.ok) {
		return NextResponse.json(
			{
				error: 'UPSTREAM_ERROR',
				status: r.status,
				detail: typeof body === 'string' ? body : body?.message ?? null,
			},
			{ status: r.status }
		)
	}

	// успех — возвращаем массив броней
	return NextResponse.json(body, { status: 200 })
}
