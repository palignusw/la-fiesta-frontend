import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BASIC_PREFIX = 'Basic '

function unauthorized() {
	const res = new NextResponse('Authentication required', { status: 401 })
	res.headers.set('WWW-Authenticate', 'Basic realm="Admin UI"')
	return res
}

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl
	if (!pathname.startsWith('/admin')) return NextResponse.next()

	const header = req.headers.get('authorization')
	if (!header || !header.startsWith(BASIC_PREFIX)) return unauthorized()

	const base64 = header.slice(BASIC_PREFIX.length)
	// middleware = edge runtime → используем atob
	const decoded = typeof atob === 'function' ? atob(base64) : ''
	const [user, pass] = decoded.split(':')

	const ok = user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS
	return ok ? NextResponse.next() : unauthorized()
}

export const config = { matcher: ['/admin/:path*'] }
