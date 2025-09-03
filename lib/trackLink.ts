// lib/trackLink.ts
'use client'
import { event } from './gtag'

export function trackLink(action: string, params: Record<string, unknown>) {
	// синхронно и очень быстро — не мешает переходу
	event(action, params)
}
