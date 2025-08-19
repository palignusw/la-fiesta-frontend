import type { Metadata } from 'next'
import Hero from '@/components/Hero/Hero'
import PackageGrid from '@/components/Menu/PackageGrid'
import Section from '@/components/Section/Section'
import { packages } from '@/lib/content'

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

export default function HomePage() {
	return (
		<>
			<Hero />
			<Section
				title='ბანკეტის პაკეტები'
				subtitle='აირჩიეთ შესაბამისი შეთავაზება'
			>
				<PackageGrid items={packages} />
			</Section>
		</>
	)
}
