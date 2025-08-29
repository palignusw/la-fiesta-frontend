'use client'

import { useEffect, useRef } from 'react'
import s from './WeddingsCounter.module.scss'

export default function WeddingsCounter({
	initial,
	initialText,
	className,
	animate = true,
}: {
	initial: number
	initialText: string
	className?: string
	animate?: boolean
}) {
	const ref = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		const prefersReduce =
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (!ref.current || !animate || prefersReduce) return

		const el = ref.current
		const start = performance.now()
		const from = 0
		const to = initial
		const duration = 900
		const fmt = new Intl.NumberFormat('ka-GE')

		const step = (t: number) => {
			const p = Math.min(1, (t - start) / duration)
			const v = Math.floor(from + (to - from) * (1 - Math.pow(1 - p, 3)))
			el.textContent = fmt.format(v)
			if (p < 1) requestAnimationFrame(step)
		}

		el.textContent = fmt.format(from)
		requestAnimationFrame(step)
	}, [initial, animate])

	return (
		<div className={`${s.card} ${className ?? ''}`} aria-live='polite'>
			<div className={s.badge}>La&nbsp;Fiesta</div>
			<div className={s.row}>
				{/* Печатаем число сразу как текст, чтобы не было пустоты */}
				<span className={s.number} ref={ref}>
					{'0'}
				</span>
				<span className={s.unit}>ქორწილი</span>
			</div>
			<div className={s.caption}>უკვე გამართულა ჩვენს დარბაზში</div>
		</div>
	)
}
