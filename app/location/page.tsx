import type { Metadata } from 'next'
import Link from 'next/link'
import s from './page.module.scss'

const LAT = 42.43033
const LNG = 42.38122

const MAP_EMBED = `https://www.google.com/maps?&q=${LAT},${LNG}&z=16&hl=ka&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`

export const metadata: Metadata = {
	title: 'ლოკაცია — ლა ფიესტა (La Fiesta)',
	description: 'ჩვენი მისამართი და ლოკაცია რუკაზე. მარტვილი, La Fiesta.',
	alternates: { canonical: '/location' },
	openGraph: {
		type: 'website',
		url: 'https://lafiesta.ge/location',
		siteName: 'ლა ფიესტა (La Fiesta)',
		title: 'ლოკაცია — ლა ფიესტა (La Fiesta)',
		description: 'მისამართი და რუკა — La Fiesta, მარტვილი.',
		images: [
			{ url: 'https://lafiesta.ge/hero/hall.png', width: 1200, height: 630 },
		],
		locale: 'ka_GE',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ლოკაცია — ლა ფიესტა (La Fiesta)',
		description: 'მისამართი და რუკა — La Fiesta, მარტვილი.',
		images: ['https://lafiesta.ge/hero/hall.png'],
	},
	robots: { index: true, follow: true },
}

export default function LocationPage() {
	return (
		<section className={s.page}>
			<div className='container'>
				<h1 className={s.title}>ლოკაცია</h1>
				<p className={s.subtitle}>
					La Fiesta — საქორწილო/ბანკეტის დარბაზი, მარტვილი. რუკაზე მონიშნულია
					ჩვენი ზუსტი მისამართი.
				</p>
			</div>

			<div className='container'>
				<div className={s.mapWrap} aria-label='Google Map'>
					<iframe
						className={s.map}
						src={MAP_EMBED}
						loading='lazy'
						allowFullScreen
						referrerPolicy='no-referrer-when-downgrade'
						title='La Fiesta Location on Google Maps'
					/>
				</div>
			</div>

			<div className='container'>
				<div className={s.info}>
					<div className={s.card}>
						<h3 className={s.cardTitle}>მისამართი</h3>
						<p className={s.text}>მარტვილი, საქართველო</p>
					</div>

					<div className={s.card}>
						<h3 className={s.cardTitle}>ტელეფონი</h3>
						<p className={s.text}>
							<a href='tel:+995599435644' className={s.link}>
								+995 599 43 56 44
							</a>
						</p>
					</div>

					<div className={s.card}>
						<h3 className={s.cardTitle}>მარშრუტი</h3>
						<Link
							href={MAP_LINK}
							target='_blank'
							rel='noopener noreferrer'
							className={`btn ${s.btnShine} ${s.submit}`}
						>
							გახსენი Google Maps-ში
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
