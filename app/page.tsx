
import Hero from '@/components/Hero/Hero'
import PackageGrid from '@/components/Menu/PackageGrid'
import Section from '@/components/Section/Section'
import { packages } from '@/lib/content'

export default function HomePage() {
	return (
		<>
			<Hero />
			<Section
				title='ბანკეტის პაკეტები'
				subtitle='აირჩიეთ შესაბამისი შეთავაზება'
			>
				<PackageGrid items={packages} />
			</Section>
		</>
	)
}
