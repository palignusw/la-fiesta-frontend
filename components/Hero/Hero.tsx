import s from './Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import WeddingsCounter from '@/components/WeddingsCounter/WeddingsCounter'

export default function Hero({
	weddingsTotal,
	weddingsTotalText,
}: {
	weddingsTotal: number
	weddingsTotalText: string
}) {
	const t = {
		title: 'La Fiesta — საქორწილო დარბაზი მარტვილში',
		subtitle: 'ელეგანტური ბანკეტები და უმაღლესი მომსახურება',
		seeMenu: 'მენიუს ნახვა',
		book: 'დაჯავშნა',
	}

	return (
		<section className={s.hero}>
			<div className='container'>
				<div className={s.row}>
					<div>
						<h1 className={s.title}>{t.title}</h1>
						<p className={s.subtitle}>{t.subtitle}</p>

						<div className={s.actions}>
							<Link href='/menu' className='btn'>
								{t.seeMenu}
							</Link>
							<Link href='/contacts' className='btn outline'>
								{t.book}
							</Link>
						</div>

						{/* Счётчик сразу под кнопками */}
						<div className={s.stats}>
							<WeddingsCounter
								initial={weddingsTotal}
								initialText={weddingsTotalText}
							/>
						</div>
					</div>

					<div className={s.frame}>
						<Image
							className={s.photo}
							src='/hero/hro.jpg'
							alt='La Fiesta Hall'
							width={900}
							height={600}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
