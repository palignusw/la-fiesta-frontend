/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import s from './BookingForm.module.scss'
import { z } from 'zod'
import { packages } from '@/lib/content'
import DateResponsive from './DateResponsive'
import Select from '@/components/UI/Select/Select'

const EVENT_TYPES = [
	'ქორწილი',
	'ნათლობა',
	'ბანკეტი',
	'გასვენების სუფრა',
] as const
type EventType = (typeof EVENT_TYPES)[number]

type FormPayload = {
	name: string
	phone: string
	date?: string
	guests?: number
	message?: string
	company?: string
	packageSlug: string
	eventType: EventType
}

type Errors = Partial<Record<keyof FormPayload, string>>

const isValidGEPhone = (raw: string) => {
	const v = (raw || '').replace(/\s|-/g, '')
	const mobileLocal = /^0?5\d{8}$/
	const mobileIntl = /^\+?9955\d{8}$/
	const cityLocal = /^0?(?:32|\d{2})\d{7}$/
	const cityIntl = /^\+?995(?:32|\d{2})\d{7}$/
	return (
		mobileLocal.test(v) ||
		mobileIntl.test(v) ||
		cityLocal.test(v) ||
		cityIntl.test(v)
	)
}
const isFutureDate = (d?: string) => {
	if (!d) return false
	const dt = new Date(d + 'T00:00:00')
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	return dt.getTime() >= today.getTime()
}

const PACKAGE_SLUGS = packages.map(p => p.slug) as [string, ...string[]];

const ClientSchema = z.object({
	name: z.string().min(2, 'შეიყვანეთ სრული სახელი'),
	phone: z
		.string()
		.refine(isValidGEPhone, 'ნომერი დაწერეთ სწორი ფორმატით მაგ:599435644'),
	date: z
		.string()
		.min(1, 'აირჩიეთ თარიღი')
		.refine(isFutureDate, 'აირჩიეთ მომავალი თარიღი'),
	guests: z.coerce
		.number()
		.int('მხოლოდ მთელი რიცხვი')
		.min(1, 'სტუმრების მინ. 1')
		.max(1200, 'ძალიან ბევრი სტუმარი'),
	message: z.string().max(1000, 'მაქსიმუმ 1000 სიმბოლო').optional(),
	company: z.string().max(0).optional(),
	packageSlug: z.enum(PACKAGE_SLUGS, { message: 'აირჩიეთ პაკეტი' }),
	eventType: z.enum(EVENT_TYPES, {
		message: 'აირჩიეთ ტიპი',
	}),
})

export default function BookingForm() {
	const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
	const [errMsg, setErrMsg] = useState('')
	const [errors, setErrors] = useState<Errors>({})

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setErrMsg('')
		setErrors({})
		setState('sending')

		const form = e.currentTarget
		const fd = new FormData(form)
		const payload: any = Object.fromEntries(fd.entries())
		payload.guests = payload.guests ? Number(payload.guests) : undefined

		const parsed = ClientSchema.safeParse(payload)
		if (!parsed.success) {
			const map: Errors = {}
			parsed.error.issues.forEach(i => {
				const key = i.path[0] as keyof FormPayload
				if (!map[key]) map[key] = i.message
			})
			setErrors(map)
			setState('idle')
			const firstKey = Object.keys(map)[0]
			if (firstKey)
				(
					form.querySelector(`[name="${firstKey}"]`) as HTMLElement | null
				)?.focus()
			return
		}

		try {
			const res = await fetch('/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(parsed.data),
				
			})
			if (!res.ok) {
				console.log('okkkk')
				const txt = await res.text()
				setState('err')
				setErrMsg(`HTTP ${res.status}: ${txt.slice(0, 120)}`)
				return
			}
			const data = await res.json()
			if (!data.ok) {
				setState('err')
				setErrMsg(data?.error ?? 'Server error')
			} else {
				setState('ok')
				form.reset()
				setTimeout(() => setState('idle'), 10000)
			}
		} catch (err: any) {
			setState('err')
			setErrMsg(err?.message ?? 'Network error')
		}
	}

	return (
		<form className={s.form} onSubmit={onSubmit} noValidate>
			{/* honeypot */}
			<input
				type='text'
				name='company'
				className={s.honey}
				tabIndex={-1}
				autoComplete='off'
			/>

			{state === 'ok' && (
				<div className={`${s.alert} ${s.success}`}>
					<span className={s.icon}>✓</span> თქვენი ჯავშანი წარმატებით გაიგზავნა
				</div>
			)}
			{state === 'err' && (
				<div className={`${s.alert} ${s.danger}`}>
					<span className={s.icon}>!</span> შეცდომა: {errMsg}
				</div>
			)}

			{/* Имя */}
			<div className={s.field}>
				<input
					name='name'
					placeholder='სახელი და გვარი'
					aria-invalid={!!errors.name}
					className={errors.name ? s.inputError : ''}
				/>
				{errors.name && <div className={s.errorText}>{errors.name}</div>}
			</div>

			{/* Пакет + дата */}
			<div className={s.row2}>
				<div className={s.field}>
					<Select
						name='packageSlug'
						placeholder='აირჩიეთ პაკეტი'
						options={packages.map(p => ({ value: p.slug, label: p.name }))}
						error={errors.packageSlug}
					/>
				</div>
				<Select
					name='eventType'
					placeholder='ივენთის ტიპი'
					options={EVENT_TYPES.map(t => ({ value: t, label: t }))}
					error={errors.eventType}
				/>
			</div>

			{/* Телефон + тип события */}
			<div className={s.row2}>
				<div className={s.field}>
					<input
						type='tel'
						name='phone'
						placeholder='ტელეფონი'
						aria-invalid={!!errors.phone}
						className={errors.phone ? s.inputError : ''}
					/>
					{errors.phone && <div className={s.errorText}>{errors.phone}</div>}
				</div>

				<div className={s.field}>
					<DateResponsive
						name='date'
						label='თარიღი'
						error={errors.date}
						note='სამუშაო საათები: 11:00–23:00'
					/>
				</div>
			</div>

			{/* Гости */}
			<div className={s.field}>
				<input
					type='number'
					name='guests'
					min={1}
					placeholder='სტუმრების რაოდენობა'
					aria-invalid={!!errors.guests}
					className={errors.guests ? s.inputError : ''}
				/>
				{errors.guests && <div className={s.errorText}>{errors.guests}</div>}
			</div>

			{/* Сообщение */}
			<div className={s.field}>
				<textarea
					name='message'
					placeholder='დამატებითი ინფორმაცია'
					rows={5}
					aria-invalid={!!errors.message}
					className={errors.message ? s.inputError : ''}
				/>
				{errors.message && <div className={s.errorText}>{errors.message}</div>}
			</div>

			<button
				className={`btn ${s.btnShine} ${s.submit}`}
				disabled={state === 'sending'}
			>
				{state === 'sending' ? '...' : 'გაგზავნა'}
			</button>
		</form>
	)
}
