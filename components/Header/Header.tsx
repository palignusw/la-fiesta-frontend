'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import s from './Header.module.scss'

export default function Header() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		setOpen(false)
	}, [pathname])

	useEffect(() => {
		if (open) {
			const prev = document.body.style.overflow
			document.body.style.overflow = 'hidden'
			return () => {
				document.body.style.overflow = prev
			}
		}
	}, [open])

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	return (
		<header className={s.header}>
			<div className={`container ${s.inner}`}>
				<Link href='/' className={s.brand}>
					<Image
						src='/brand/la-fiesta-logo.png'
						alt='La Fiesta'
						width={100}
						height={60}
						priority
					/>
				</Link>

				{/* Десктоп-меню */}
				<nav className={s.nav} aria-label='Primary'>
					<Link href='/'>{'მთავარი'}</Link>
					<Link href='/menu'>{'მენიუ'}</Link>
					<Link href='/gallery'>{'გალერეა'}</Link>
					<Link href='/about'>{'ჩვენ შესახებ'}</Link>
					<Link href='/location'>{'ლოკაცია'}</Link>
				</nav>

				{/* Десктоп-кнопка */}
				<Link href='/contacts' className={`btn ${s.contactBtn}`}>
					{'კონტაქტი'}
				</Link>

				{/* Бургер — только мобилка */}
				<button
					type='button'
					className={s.burger}
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-controls='mobile-nav'
					aria-expanded={open}
					onClick={() => setOpen(v => !v)}
				>
					<span className={s.burgerIcon} aria-hidden />
					<span className={s.srOnly}>Menu</span>
				</button>
			</div>

			{/* Подложка */}
			<div
				className={s.backdrop}
				data-open={open}
				onClick={() => setOpen(false)}
			/>

			{/* Мобильная панель */}
			<aside
				id='mobile-nav'
				className={s.mobileNav}
				data-open={open}
				role='dialog'
				aria-modal='true'
				aria-label='Mobile navigation'
			>
				<div className={s.mobileTitle}>ლა ფიესტა</div>
				<nav className={s.mobileLinks}>
					<Link href='/' onClick={() => setOpen(false)}>
						{'მთავარი'}
					</Link>
					<Link href='/menu' onClick={() => setOpen(false)}>
						{'მენიუ'}
					</Link>
					<Link href='/gallery' onClick={() => setOpen(false)}>
						{'გალერეა'}
					</Link>
					<Link href='/about' onClick={() => setOpen(false)}>
						{'ჩვენ შესახებ'}
					</Link>
					<Link href='/contacts' onClick={() => setOpen(false)}>
						{'კონტაქტი'}
					</Link>
					<Link href='/location' onClick={() => setOpen(false)}>
						{'ლოკაცია'}
					</Link>
				</nav>
				<div className={s.mobileFooter}>
					<Link href='tel:+995599435644' className='btn'>
						დარეკვა
					</Link>
					<Link href='https://wa.me/995599435644' className='btn btn--outline'>
						WhatsApp
					</Link>
				</div>
			</aside>
		</header>
	)
}
