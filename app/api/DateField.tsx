/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useRef } from 'react'
import s from '../../components/Booking/BookingForm.module.scss'

type Props = {
	name: string // имя поля (в форму уйдёт YYYY-MM-DD)
	placeholder?: string
	defaultValue?: string // формата 'YYYY-MM-DD'
	minDate?: Date
	error?: string | false
	onChange?: (value: string) => void
}

export default function DateField({
	name,
	placeholder = 'თარიღი',
	defaultValue,
	minDate = new Date(),
	error,
	onChange,
}: Props) {
	const inputRef = useRef<HTMLInputElement>(null)
	const hiddenRef = useRef<HTMLInputElement>(null)
	const destroyRef = useRef<(() => void) | null>(null)

	useEffect(() => {
		let mounted = true

		;(async () => {
			// ВАЖНО: именно так достаём default, чтобы он был «вызываемым»
			const [{ default: flatpickr }, { Georgian }] = await Promise.all([
				import('flatpickr'),
				import('flatpickr/dist/l10n/ka.js'),
			])

			if (!mounted || !inputRef.current) return

			// локаль
			flatpickr.localize(Georgian)

			const inst = flatpickr(inputRef.current, {
				disableMobile: true,
				dateFormat: 'Y-m-d', // значение, которое уходит на сервер
				altInput: true, // красивый видимый input
				altFormat: 'd.m.Y', // формат для пользователя
				altInputClass: s.dateAlt, // класс на alt-input из CSS-модуля
				defaultDate: defaultValue,
				minDate,
				clickOpens: true,
				allowInput: false,
				onChange: (dates: Date[]) => {
					const d = dates[0]
					const ymd = d
						? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
								2,
								'0'
						  )}-${String(d.getDate()).padStart(2, '0')}`
						: ''
					if (hiddenRef.current) hiddenRef.current.value = ymd
					onChange?.(ymd)
				},
			})

			destroyRef.current = () => inst.destroy()
		})()

		return () => {
			mounted = false
			destroyRef.current?.()
			destroyRef.current = null
		}
	}, [defaultValue, minDate, onChange])

	return (
		<div className={s.field}>
			{/* «настоящий» инпут, на который навешиваем flatpickr */}
			<input ref={inputRef} type='text' placeholder={placeholder} />
			{/* скрытый инпут, который реально уходит в FormData */}
			<input
				ref={hiddenRef}
				type='hidden'
				name={name}
				defaultValue={defaultValue}
			/>
			{error ? <div className={s.errorText}>{error}</div> : null}
		</div>
	)
}
