// components/Footer/SocialIcons.tsx
'use client'
import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { trackLink } from '@/lib/trackLink'
import s from './Footer.module.scss'

export function SocialIcons() {
	return (
		<div className={s.socials}>
			<a
				href='https://www.tiktok.com/@la_fiesta2022'
				target='_blank'
				rel='noopener noreferrer'
				className={s.iconLink}
				aria-label='TikTok'
				onClick={() =>
					trackLink('click_social', { platform: 'tiktok', place: 'footer' })
				}
			>
				<FaTiktok />
			</a>

			<a
				href='https://www.facebook.com/profile.php?id=100083011586797'
				target='_blank'
				rel='noopener noreferrer'
				className={s.iconLink}
				aria-label='Facebook'
				onClick={() =>
					trackLink('click_social', { platform: 'facebook', place: 'footer' })
				}
			>
				<FaFacebookF />
			</a>

			<a
				href='https://wa.me/995599435644'
				target='_blank'
				rel='noopener noreferrer'
				className={s.iconLink}
				aria-label='WhatsApp'
				onClick={() =>
					trackLink('click_social', { platform: 'whatsapp', place: 'footer' })
				}
			>
				<FaWhatsapp />
			</a>
		</div>
	)
}
