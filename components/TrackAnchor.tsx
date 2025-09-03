'use client'

import { trackLink } from '@/lib/trackLink'
import React from 'react'

type Props = React.ComponentProps<'a'> & {
	action: string
	params?: Record<string, unknown>
}

export default function TrackAnchor({
	action,
	params = {},
	onClick,
	...rest
}: Props) {
	const handle = (e: React.MouseEvent<HTMLAnchorElement>) => {
		trackLink(action, params)
		onClick?.(e)
	}
	return <a {...rest} onClick={handle} />
}
