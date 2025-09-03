'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/lib/gtag'

export default function Analytics() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (!pathname) return
		const url = searchParams?.toString()
			? `${pathname}?${searchParams.toString()}`
			: pathname
		pageview(url)
	}, [pathname, searchParams])

	return null
}
