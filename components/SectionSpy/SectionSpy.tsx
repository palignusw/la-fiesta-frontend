'use client'

import { useEffect } from 'react'

export default function SectionSpy({ ids }: { ids: string[] }) {
	useEffect(() => {
		const io = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					const link = document.querySelector<HTMLAnchorElement>(
						`a[href="#${entry.target.id}"]`
					)
					if (link) {
						link.setAttribute(
							'aria-current',
							entry.isIntersecting ? 'true' : 'false'
						)
					}
				})
			},
			{
				rootMargin: '-45% 0px -50% 0px',
				threshold: 0.01,
			}
		)

		ids.forEach(id => {
			const el = document.getElementById(id)
			if (el) io.observe(el)
		})

		return () => io.disconnect()
	}, [ids])

	return null
}
