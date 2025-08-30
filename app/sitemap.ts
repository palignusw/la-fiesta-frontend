import type { MetadataRoute } from 'next'
const site = 'https://lafiesta.ge'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: `${site}/`, changeFrequency: 'weekly', priority: 1.0 },
		{ url: `${site}/menu`, changeFrequency: 'weekly', priority: 0.9 },
		{ url: `${site}/gallery`, changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${site}/about`, changeFrequency: 'monthly', priority: 0.6 },
		{ url: `${site}/contacts`, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${site}/menu/65gel`, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${site}/menu/85gel`, changeFrequency: 'monthly', priority: 0.8 },
	]
}
