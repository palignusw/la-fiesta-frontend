import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import s from './Footer.module.scss'

export default function Footer() {
	const year = new Date().getFullYear()
	const rights = `ყველა უფლება დაცულია © ${year} La Fiesta`

	return (
		<footer className={s.footer}>
			<div className={s.inner}>
				<div className={s.socials}>
					<a
						href='https://www.tiktok.com/@la_fiesta2022'
						target='_blank'
						rel='noopener noreferrer'
						className={s.iconLink}
						aria-label='TikTok'
					>
						<FaTiktok />
					</a>
					<a
						href='https://www.facebook.com/profile.php?id=100083011586797'
						target='_blank'
						rel='noopener noreferrer'
						className={s.iconLink}
						aria-label='Facebook'
					>
						<FaFacebookF />
					</a>
					<a
						href='https://wa.me/995599435644'
						target='_blank'
						rel='noopener noreferrer'
						className={s.iconLink}
						aria-label='WhatsApp'
					>
						<FaWhatsapp />
					</a>
				</div>

				<div className={s.rights}>{rights}</div>
			</div>
		</footer>
	)
}
