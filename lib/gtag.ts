export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

declare global {
	interface Window {
		dataLayer?: unknown[] 
		gtag?: (...args: [string, string, Record<string, unknown>?]) => void
	}
}

export const pageview = (url: string) => {
	if (!GA_ID) return
	if (typeof window.gtag !== 'undefined') {
		window.gtag('config', GA_ID, { page_path: url })
	}
}
