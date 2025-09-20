import type { MetadataRoute } from 'next'
const site = 'https://lafiesta.ge'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${site}/`,
			changeFrequency: 'weekly',
			priority: 1.0,
			lastModified: new Date(),
		},
		{
			url: `${site}/menu`,
			changeFrequency: 'weekly',
			priority: 0.9,
			lastModified: new Date(),
		},
		{
			url: `${site}/gallery`,
			changeFrequency: 'monthly',
			priority: 0.7,
			lastModified: new Date(),
		},
		{
			url: `${site}/about`,
			changeFrequency: 'monthly',
			priority: 0.6,
			lastModified: new Date(),
		},
		{
			url: `${site}/contacts`,
			changeFrequency: 'monthly',
			priority: 0.8,
			lastModified: new Date(),
		},
		{
			url: `${site}/menu/70gel`,
			changeFrequency: 'monthly',
			priority: 0.8,
			lastModified: new Date(),
		},
		{
			url: `${site}/menu/90gel`,
			changeFrequency: 'monthly',
			priority: 0.8,
			lastModified: new Date(),
		},
		{
			url: `${site}/location`,
			changeFrequency: 'monthly',
			priority: 0.8,
			lastModified: new Date(),
		},
	]
}
