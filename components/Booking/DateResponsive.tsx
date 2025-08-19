'use client'

import { useEffect, useState } from 'react'
import s from './DateResponsive.module.scss'
import DateFancy from './DateFancy'

type Props = {
	name?: string
	label?: string // например: 'თარიღი'
	min?: string // YYYY-MM-DD
	max?: string // YYYY-MM-DD
	error?: string
	note?: string // подсказка (покажем только на мобиле)
	defaultValue?: string
	onChange?: (value: string) => void
}

function NativeDate({ name = 'date', min, max, error, defaultValue }: Props) {
	return (
		<div className={s.nativeBlock}>
			<input
				type='date'
				name={name}
				lang='ka' // всегда грузинский
				min={min}
				max={max}
				defaultValue={defaultValue}
				className={`${s.nativeInput} ${error ? s.inputError : ''}`}
			/>
			{error && <div className={s.errorText}>{error}</div>}
		</div>
	)
}

export default function DateResponsive(props: Props) {
	const [isMobile, setIsMobile] = useState<boolean | null>(null)

	useEffect(() => {
		const mq = window.matchMedia('(max-width: 640px)')
		const onChange = () => setIsMobile(mq.matches)
		onChange() // сразу установим текущее состояние
		mq.addEventListener?.('change', onChange)
		mq.addListener && mq.addListener(onChange) // для старых браузеров
		return () => {
			mq.removeEventListener?.('change', onChange)
			mq.removeListener && mq.removeListener(onChange)
		}
	}, [])

	if (isMobile === null) return <NativeDate {...props} />

	return isMobile ? <DateFancy {...props} /> : <NativeDate {...props} />
}
