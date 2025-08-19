
import type { MetadataRoute } from 'next'

const site = 'https://la-fiesta-frontend.vercel.app/' // ← твой прод-домен

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: `${site}/sitemap.xml`,
		host: site,
	}
}
