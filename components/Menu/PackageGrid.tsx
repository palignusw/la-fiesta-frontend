import s from './PackageGrid.module.scss'
import PackageCard from './PackageCard'
import { MenuPackage } from '@/lib/content'

export default function PackageGrid({ items }: { items: MenuPackage[] }) {
	return (
		<div className={s.grid}>
			{items.map(p => (
				<PackageCard key={p.slug} pkg={p} />
			))}
		</div>
	)
}
