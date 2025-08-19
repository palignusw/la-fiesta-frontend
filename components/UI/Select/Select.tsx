'use client'

import clsx from 'clsx'
import s from './Select.module.scss'

export type Option = { value: string; label: string; disabled?: boolean }

type Props = {
	name: string
	options: Option[]
	placeholder?: string
	value?: string
	defaultValue?: string
	onChange?: (val: string) => void
	error?: string
	disabled?: boolean
	className?: string
	required?: boolean
}

export default function Select({
	name,
	options,
	placeholder,
	value,
	defaultValue,
	onChange,
	error,
	disabled,
	className,
	required,
}: Props) {
	// если есть placeholder и селект неконтролируемый — показываем его как дефолт
	const computedDefault =
		value === undefined && defaultValue === undefined && placeholder
			? ''
			: defaultValue

	const common = {
		name,
		disabled,
		required,
		'aria-invalid': !!error,
		className: s.select,
		onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
			onChange?.(e.target.value),
	} as const

	return (
		<div className={clsx(s.wrap, error && s.error, className)}>
			<select
				{...common}
				{...(value !== undefined
					? { value }
					: { defaultValue: computedDefault })}
			>
				{placeholder && (
					<option value='' disabled hidden>
						{placeholder}
					</option>
				)}
				{options.map(o => (
					<option key={o.value} value={o.value} disabled={o.disabled}>
						{o.label}
					</option>
				))}
			</select>
			<span className={s.caret} aria-hidden />
			{error && <div className={s.errorText}>{error}</div>}
		</div>
	)
}
