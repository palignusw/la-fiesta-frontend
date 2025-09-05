import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
const base = process.env.NEXT_PUBLIC_API_URL!

function basic() {
	const token = Buffer.from(
		`${process.env.ADMIN_USER}:${process.env.ADMIN_PASS}`
	).toString('base64')
	return `Basic ${token}`
}

export async function GET() {
	const r = await fetch(`${base}/admin/bookings`, {
		headers: { authorization: basic() },
		cache: 'no-store',
	})
	const data = await r.json().catch(() => [])
	return NextResponse.json(data, { status: r.status })
}
