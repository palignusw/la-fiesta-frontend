
import type { MetadataRoute } from 'next'

const site = 'https://lafiesta.ge' 

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: `${site}/sitemap.xml`,
		host: site,
	}
}
