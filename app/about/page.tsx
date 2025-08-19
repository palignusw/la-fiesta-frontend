import Section from '@/components/Section/Section'
import s from './About.module.scss'
import Link from 'next/link'
import { texts } from '@/lib/content'

export default function AboutPage() {
	const t = texts.About

	const features = t.featuresList
	const why = t.whyList

	return (
		<div className={s.wrap}>
			<Section title={t.title} subtitle={t.introTitle}>
				<p className={s.intro}>{t.introText}</p>

				<div className={s.block}>
					<h3>{t.missionTitle}</h3>
					<p>{t.missionText}</p>
				</div>

				<div className={s.block}>
					<h3>{t.featuresTitle}</h3>
					<ul className={s.list}>
						{features.map((f, i) => (
							<li key={i}>{f}</li>
						))}
					</ul>
				</div>

				<div className={s.block}>
					<h3>{t.whyTitle}</h3>
					<ul className={s.list}>
						{why.map((w, i) => (
							<li key={i}>{w}</li>
						))}
					</ul>
				</div>

				<div className={s.cta}>
					<h4 className={s.ctaTitle}>{t.ctaTitle}</h4>
					<p className={s.ctaText}>{t.ctaText}</p>
					<Link href='/booking' className={s.btn}>
						{t.ctaButton}
					</Link>
				</div>
			</Section>
		</div>
	)
}
