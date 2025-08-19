
import type { MetadataRoute } from 'next'

const site = 'https://lafiesta.ge' // ← твой прод-домен

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: `${site}/sitemap.xml`,
		host: site,
	}
}
