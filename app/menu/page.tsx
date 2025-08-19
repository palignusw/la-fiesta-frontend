import Section from '@/components/Section/Section'
import PackageGrid from '@/components/Menu/PackageGrid'
import { packages, texts } from '@/lib/content'

export default function MenuPage() {
	return (
		<Section
			title={texts.MenuPackages.title}
			subtitle={texts.MenuPackages.subtitle}
		>
			<PackageGrid items={packages} />
			<p style={{ marginTop: 14, color: 'var(--muted)' }}>
				{texts.MenuPackages.note}
			</p>
		</Section>
	)
}
