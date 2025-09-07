import BookingForm from '@/components/Booking/BookingForm'

export default function ContactsPage() {
	const t = {
		title: 'ჯავშანი',
		address: 'მისამართი: მარტვილი, საქართველო',
		hours: 'სამუშაო საათები: 14:00–01:00',
	}

	return (
		<section style={{ padding: '28px 0' }}>
			<div className='container'>
				<h2 style={{ margin: '0 0 12px', textAlign: 'center' }}>{t.title}</h2>
				<p style={{ textAlign: 'center' }}>{t.address}</p>
				<p style={{ textAlign: 'center' }}>{t.hours}</p>

				<div style={{ marginTop: 12 }}>
					<BookingForm />
				</div>
			</div>
		</section>
	)
}
