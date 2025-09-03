export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

declare global {
	interface Window {
		dataLayer?: unknown[]
		gtag?: (...args: [string, string, Record<string, unknown>?]) => void
	}
}
export const event = (action: string, params: Record<string, unknown> = {}) => {
	if (!GA_ID || typeof window.gtag === 'undefined') return
	window.gtag('event', action, params)
}

export const pageview = (url: string) => {
	if (!GA_ID) return
	if (typeof window.gtag !== 'undefined') {
		window.gtag('config', GA_ID, { page_path: url })
	}
}
