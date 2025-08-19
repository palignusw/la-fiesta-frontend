import { notFound } from 'next/navigation'
import Link from 'next/link'
import { packages } from '@/lib/content'
import SectionSpy from '@/components/SectionSpy/SectionSpy'
import s from './page.module.scss'
import type { Metadata } from 'next' // ← добавили только этот импорт

type Params = { slug: string }
type Search = { [key: string]: string | string[] | undefined }

/* === ДОБАВКА: пер-страничные метаданные, остальное не трогаем === */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const pkg = packages.find(p => p.slug === slug)

	if (!pkg) {
		return {
			title: 'პაკეტი ვერ მოიძებნა | ლა ფიესტა (La Fiesta)',
			description: 'საჩვენებელი პაკეტი ვერ მოიძებნა.',
			alternates: { canonical: `/menu/${slug}` },
			openGraph: {
				title: 'პაკეტი ვერ მოიძებნა | ლა ფიესტა (La Fiesta)',
				description: 'საჩვენებელი პაკეტი ვერ მოიძებნა.',
				url: `/menu/${slug}`,
				images: [
					{
						url: '/og/cover.jpg',
						width: 1200,
						height: 630,
						alt: 'ლა ფიესტა (La Fiesta)',
					},
				],
				type: 'article',
				locale: 'ka_GE',
				siteName: 'ლა ფიესტა (La Fiesta)',
			},
			// можно и keywords тут опустить — не обязательно
		}
	}

	const title = `${pkg.name} — ლა ფიესტა (La Fiesta)`
	const description = `${pkg.name} · ${pkg.price} ₾ · ${pkg.perPersonLabel}`

	return {
		title,
		description,
		alternates: { canonical: `/menu/${slug}` },
		openGraph: {
			title,
			description,
			url: `/menu/${slug}`,
			images: [
				{
					url: '/og/cover.jpg',
					width: 1200,
					height: 630,
					alt: 'ლა ფიესტა (La Fiesta)',
				},
			],
			type: 'article',
			locale: 'ka_GE',
			siteName: 'ლა ფიესტა (La Fiesta)',
		},
		keywords: ['ბანკეტი', 'მენიუ', 'საქორწილო დარბაზი', 'თბილისი', pkg.name],
	}
}
/* === КОНЕЦ ДОБАВКИ === */

export default async function PackagePage({
	params,
}: {
	params: Promise<Params>
	searchParams?: Promise<Search>
}) {
	const { slug } = await params

	const t = {
		back: 'დაბრუნება პაკეტებში',
		book: 'დაჯავშნა',
	}

	const pkg = packages.find(p => p.slug === slug)
	if (!pkg) notFound()

	const ids = pkg.sections.map(
		(sec, i) =>
			'sec-' +
			(sec.title || 'section').toLowerCase().replace(/\s+/g, '-') +
			'-' +
			i
	)

	return (
		<div className='container'>
			<div className={s.wrap}>
				<Link href='/menu' className={`btn outline ${s.back}`}>
					← {t.back}
				</Link>

				<div className={s.head}>
					<h1 className={s.title}>{pkg.name}</h1>
					<div className={s.price}>{pkg.price} ₾</div>
				</div>
				<p className={s.meta}>{pkg.perPersonLabel}</p>

				<div className={s.grid}>
					<main className={s.main}>
						<SectionSpy ids={ids} />
						<nav className={s.toc}>
							{pkg.sections.map((sec, i) => (
								<a key={i} href={`#${ids[i]}`}>
									{sec.title}
								</a>
							))}
						</nav>

						{pkg.sections.map((sec, i) => {
							const dense = sec.items.length >= 14
							return (
								<section
									key={i}
									id={ids[i]}
									className={`${s.card} ${dense ? s.dense : ''}`}
								>
									<h3 className={s.fancyTitle}>{sec.title}</h3>
									<ul className={s.luxList}>
										{sec.items.map((x, idx) => (
											<li key={idx} className={s.luxItem}>
												{x}
											</li>
										))}
									</ul>
								</section>
							)
						})}

						<div className={s.actions}>
							<Link href='/contacts' className={`btn ${s.btnShine}`}>
								{t.book}
							</Link>
							<Link href='/menu' className='btn outline'>
								{t.back}
							</Link>
						</div>
					</main>

					<aside>
						<div className={s.sticky}>
							<nav className={s.toc}>
								{pkg.sections.map((sec, i) => (
									<a key={i} href={`#${ids[i]}`}>
										{sec.title}
									</a>
								))}
							</nav>
							<Link href='/contacts' className={`btn ${s.btnShine}`}>
								{t.book}
							</Link>
						</div>
					</aside>
				</div>
			</div>
		</div>
	)
}
