import type { Metadata } from 'next'
import Hero from '@/components/Hero/Hero'
import PackageGrid from '@/components/Menu/PackageGrid'
import Section from '@/components/Section/Section'
import { packages } from '@/lib/content'
import { promises as fs } from 'fs'
import path from 'path'

export const metadata: Metadata = {
	title: 'ლა ფიესტა (La Fiesta) — საქორწილო და ბანკეტის დარბაზი მარტვილში',
	description:
		'ქორწილები, ნათლობები და ელეგანტური ბანკეტები მარტვილში. დიდი დარბაზი, გემრიელი მენიუ და უმაღლესი მომსახურება — ლა ფიესტა (La Fiesta).',
	openGraph: {
		title: 'ლა ფიესტა (La Fiesta) — საქორწილო და ბანკეტის დარბაზი მარტვილში',
		description:
			'ქორწილები, ნათლობები და ელეგანტური ბანკეტები მარტვილში. დიდი დარბაზი, გემრიელი მენიუ და უმაღლესი მომსახურება.',
		url: '/',
		siteName: 'ლა ფიესტა (La Fiesta)',
		images: [
			{
				url: '/hero/hall.png',
				width: 1200,
				height: 630,
				alt: 'ლა ფიესტა (La Fiesta)',
			},
		],
		locale: 'ka_GE',
		type: 'website',
	},
	keywords: [
		'ლა ფიესტა',
		'La Fiesta',
		'ბანკეტი',
		'საქორწილო დარბაზი',
		'მარტვილი',
		'ქორწილი',
		'ნათლობა',
		'დარბაზი მარტვილში',
		'საქორწინო დარბაზი მარტვილში',
		'საქორწილო დარბაზი მარტვილში',
		'გასვენების სუფრა',
		'ორმოცის სუფრა',
		'წლისთავის სუფრა',
		'darbazi martvilshi',
		'saqorwilo darbazi martvilshi',
		'წლისთავი',
		'ორმოცი',
	],
}

async function getStats() {
	const raw = await fs.readFile(
		path.join(process.cwd(), 'public', 'stats.json'),
		'utf8'
	)
	const { weddingsTotal = 0 } = JSON.parse(raw)
	// Сразу форматируем как строку для SSR-рендера
	const formatted = weddingsTotal.toLocaleString('ka-GE')
	return { weddingsTotal, formatted }
}

export default async function HomePage() {
	const { weddingsTotal, formatted } = await getStats()
	return (
		<>
			<Hero weddingsTotal={weddingsTotal} weddingsTotalText={formatted} />
			<Section
				title='ბანკეტის პაკეტები'
				subtitle='აირჩიეთ შესაბამისი შეთავაზება'
			>
				<PackageGrid items={packages} />
			</Section>
		</>
	)
}
