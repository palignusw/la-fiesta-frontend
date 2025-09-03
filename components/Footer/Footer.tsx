import s from './Footer.module.scss'
import { SocialIcons } from './SocialIcons'

export default function Footer() {
	const year = new Date().getFullYear()
	const rights = `ყველა უფლება დაცულია © ${year} La Fiesta`

	return (
		<footer className={s.footer}>
			<div className={s.inner}>
				<SocialIcons />
			</div>

			<div className={s.rights}>{rights}</div>
		</footer>
	)
}
