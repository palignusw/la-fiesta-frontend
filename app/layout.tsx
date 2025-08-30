import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL('https://lafiesta.ge'),
	title: {
		default: 'ლა ფიესტა (La Fiesta) — საქორწილო/ბანკეტის დარბაზი მარტვილში',
		template: '%s | ლა ფიესტა (La Fiesta)',
	},
	description:
		'ელეგანტური ბანკეტები, ქორწილები და უმაღლესი მომსახურება მარტვილში — ლა ფიესტა (La Fiesta).',
	keywords: [
		'ლა ფიესტა',
		'La Fiesta',
		'ბანკეტი',
		'საქორწილო დარბაზი',
		'მარტვილი',
		'ქორწილი',
		'ნათლობა',
		'გასვენების სუფრა',
		'ორმოცის სუფრა',
		'წლისთავის სუფრა',
		'წლისთავი',
		'ორმოცი',
	],
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		url: 'https://lafiesta.ge',
		siteName: 'ლა ფიესტა (La Fiesta)',
		title: 'ლა ფიესტა (La Fiesta) — საქორწილო/ბანკეტის დარბაზი მარტვილში',
		description:
			'ელეგანტური ბანკეტები, ქორწილები და უმაღლესი მომსახურება მარტვილში.',
		images: [
			{
				url: 'https://lafiesta.ge/hero/hall.png',
				width: 1200,
				height: 630,
				alt: 'ლა ფიესტა (La Fiesta)',
			},
		],
		locale: 'ka_GE',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ლა ფიესტა (La Fiesta) — ბანკეტის დარბაზი მარტვილში',
		description: 'ელეგანტური ბანკეტები და უმაღლესი მომსახურება.',
		images: ['/hero/hall.png'],
	},
	robots: { index: true, follow: true },
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': ['EventVenue', 'Restaurant'],
	name: 'La Fiesta',
	url: 'https://lafiesta.ge',
	telephone: '+995599435644',
	priceRange: '₾₾',
	acceptsReservations: true,
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'მარტვილი',
		addressRegion: 'Samegrelo-Zemo Svaneti',
		addressCountry: 'GE',
	},
	geo: { '@type': 'GeoCoordinates', latitude: 42.43033, longitude: 42.38122 }, // если знаешь, подставь точные
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday',
			],
			opens: '11:00',
			closes: '02:00',
		},
	],
	sameAs: [
		'https://www.tiktok.com/@la_fiesta2022',
		'https://www.facebook.com/profile.php?id=100083011586797',
	],
	image: ['https://lafiesta.ge/hero/hall.png'],
	menu: 'https://lafiesta.ge/menu',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ka'>
			<head>
				<script
					type='application/ld+json'
					suppressHydrationWarning
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
