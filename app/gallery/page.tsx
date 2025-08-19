/* eslint-disable @typescript-eslint/no-explicit-any */
import { media, albums } from '@/lib/content'
import GalleryGrid from '@/components/Gallery/GalleryGrid'

export default function GalleryPage() {
	const t = {
		title: 'გალერეა',
		subtitle: 'ფოტოები და ვიდეოები ჩვენი დარბაზიდან, დეკორები და კერძები',
	}

	return (
		<section style={{ padding: '28px 0 40px' }}>
			<div className='container'>
				<h1 style={{ margin: '0 0 14px' }}>{t.title}</h1>
				<p style={{ margin: '0 0 18px', opacity: 0.75 }}>{t.subtitle}</p>
				<GalleryGrid items={media} albums={albums as any} />
			</div>
		</section>
	)
}
