'use client'

import s from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
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

				<nav className={s.nav}>
					<Link href='/'>{'მთავარი'}</Link>
					<Link href='/menu'>{'მენიუ'}</Link>
					<Link href='/gallery'>{'გალერეა'}</Link>
					<Link href='/about'>{'ჩვენ შესახებ'}</Link>
				</nav>

				<Link href='/contacts' className='btn'>
					{'კონტაქტი'}
				</Link>
			</div>
		</header>
	)
}
