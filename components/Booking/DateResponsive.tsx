'use client'

import { useEffect, useState } from 'react'
import s from './DateResponsive.module.scss'
import DateFancy from './DateFancy'

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

function NativeDate({ name = 'date', min, max, error, defaultValue }: Props) {
	return (
		<div className={s.nativeBlock}>
			<input
				type='date'
				name={name}
				lang='ka'
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
		onChange() 
		mq.addEventListener?.('change', onChange)
		mq.addListener && mq.addListener(onChange)
		return () => {
			mq.removeEventListener?.('change', onChange)
			mq.removeListener && mq.removeListener(onChange)
		}
	}, [])

	if (isMobile === null) return <NativeDate {...props} />

	return isMobile ? <DateFancy {...props} /> : <NativeDate {...props} />
}
