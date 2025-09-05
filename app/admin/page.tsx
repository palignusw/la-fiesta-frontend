import { headers } from 'next/headers'
import s from './AdminTable.module.scss'

export const dynamic = 'force-dynamic'

type Booking = {
	id: number
	name: string
	phone: string
	date: string | null
	guests: number | null
	message: string | null
	packageSlug: string
	eventType: 'ქორწილი' | 'ნათლობა' | 'ბანკეტი' | 'გასვენების სუფრა'
	createdAt: string
}

async function getOrigin() {
	const h = await headers()
	const proto = h.get('x-forwarded-proto') ?? 'http'
	const host = h.get('x-forwarded-host') ?? h.get('host')
	if (!host) throw new Error('Host header is missing')
	return `${proto}://${host}`
}

async function getBookings(): Promise<Booking[]> {
	const origin = await getOrigin()
	const url = new URL('/api/admin/bookings', origin)
	const r = await fetch(url, { cache: 'no-store' })

	if (!r.ok) {
		// читаем осмысленное сообщение и просто вернём пусто, чтобы страница не падала
		try {
			const j = await r.json()
			console.error('[admin] API error', j)
		} catch {
			const t = await r.text().catch(() => '')
			console.error('[admin] API error', r.status, t)
		}
		return []
	}
	return r.json()
}

export default async function AdminPage() {
	const bookings = await getBookings()

	return (
		<main className={s.container}>
			<h1 className={s.title}>ჯავშნები</h1>
			<div className={s.card}>
				<div className={s.tableWrap}>
					<table className={s.table}>
						<thead className={s.thead}>
							<tr>
								<th className={s.th}>თარიღი</th>
								<th className={s.th}>სახელი</th>
								<th className={s.th}>ტელეფონი</th>
								<th className={s.th}>სტუმრები</th>
								<th className={s.th}>პაკეტი</th>
								<th className={s.th}>ტიპი</th>
								<th className={s.th}>შეტყობინება</th>
							</tr>
						</thead>
						<tbody>
							{bookings.map(b => (
								<tr key={b.id} className={s.tr}>
									<td className={s.td}>{b.date ?? '—'}</td>
									<td className={s.td}>{b.name}</td>
									<td className={s.td}>
										<a
											href={`tel:${b.phone}`}
											style={{ textDecoration: 'underline' }}
										>
											{b.phone}
										</a>
									</td>
									<td className={s.td}>{b.guests ?? '—'}</td>
									<td className={s.td}>{b.packageSlug}</td>
									<td className={s.td}>{b.eventType}</td>
									<td className={s.td} style={{ whiteSpace: 'pre-wrap' }}>
										{b.message ?? '—'}
									</td>
								</tr>
							))}
							{bookings.length === 0 && (
								<tr>
									<td className={`${s.td} ${s.empty}`} colSpan={7}>
										ვერ ჩაიტვირთა ბრონები ან სია ცარიელია.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	)
}
