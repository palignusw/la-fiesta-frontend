'use client'

import { useEffect, useId, useState } from 'react'
import s from './DateFancy.module.scss'

type Props = {
	name?: string
	label?: string 
	min?: string 
	max?: string
	error?: string
	note?: string
	defaultValue?: string
	onChange?: (value: string) => void
}

export default function DateFancy({
	name = 'date',
	label = 'თარიღი',
	min,
	max,
	error,
	note,
	defaultValue = '',
	onChange,
}: Props) {
	const [value, setValue] = useState(defaultValue)
	const id = useId()

	useEffect(() => {
		setValue(defaultValue || '')
	}, [defaultValue])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const v = e.target.value
		setValue(v)
		onChange?.(v)
	}

	const hasValue = Boolean(value)

	return (
		<div className={s.block}>
			{/* Скрытая для глаз метка — для доступности */}
			<label htmlFor={id} className={s.visuallyHidden}>
				{label}
			</label>

			<div
				className={`${s.field} ${hasValue ? s.hasValue : ''} ${
					error ? s.inputError : ''
				}`}
			>
				<input
					id={id}
					type='date'
					lang='ka'
					name={name}
					min={min}
					max={max}
					value={value}
					onChange={handleChange}
					className={s.input}
				/>

				{/* Внутренний «плейсхолдер» и иконка — скрываются, когда есть value */}
				<span className={s.placeholder}>{label}</span>
				<span aria-hidden className={s.icon} />
			</div>

			{note && <div className={s.note}>{note}</div>}
			{error && <div className={s.errorText}>{error}</div>}
		</div>
	)
}
