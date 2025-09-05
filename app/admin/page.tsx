import { headers } from "next/headers"

export const dynamic = 'force-dynamic'
export const metadata = {
	title: 'Admin — Брони',
	robots: { index: false, follow: false },
}

type Booking = {
	id: number
	name: string
	phone: string
	date: string | null
	guests: number | null
	message: string | null
	packageSlug: string
	eventType: 'ქორწილი' | 'ნათლობა' | 'ბანკეტი' | 'გასვენების სუფრა'
	status: 'pending' | 'confirmed' | 'cancelled'
	notes: string | null
	createdAt: string
}


async function baseUrl() {
	const h = headers()
	const proto = (await h).get('x-forwarded-proto') ?? 'http'
	const host = (await h).get('x-forwarded-host') ?? (await h).get('host')
	return `${proto}://${host}`
}

async function getBookings() {
	const r = await fetch(`${baseUrl()}/api/admin/bookings`, {
		cache: 'no-store',
	})
	if (!r.ok) throw new Error(await r.text())
	return r.json()
}
export default async function AdminPage() {
	const bookings = await getBookings()

	return (
		<main className='mx-auto max-w-6xl p-6 space-y-6'>
			<h1 className='text-2xl font-bold'>ბрони</h1>

			<div className='rounded-2xl border overflow-x-auto'>
				<table className='w-full text-sm'>
					<thead className='bg-gray-50 text-left'>
						<tr>
							<th className='p-3'>თარიღი</th>
							<th className='p-3'>სახელი</th>
							<th className='p-3'>ტელეფონი</th>
							<th className='p-3'>სტუმრები</th>
							<th className='p-3'>პაკეტი</th>
							<th className='p-3'>ტიპი</th>
							<th className='p-3'>სტატუსი</th>
							<th className='p-3'>შენიშვნა</th>
							<th className='p-3'></th>
						</tr>
					</thead>
					<tbody>
						{bookings.map((b: Booking) => (
							<tr key={b.id} className='border-t align-top'>
								<td className='p-3'>{b.date ?? '—'}</td>
								<td className='p-3'>{b.name}</td>
								<td className='p-3'>
									<a className='underline' href={`tel:${b.phone}`}>
										{b.phone}
									</a>
								</td>
								<td className='p-3'>{b.guests ?? '—'}</td>
								<td className='p-3'>{b.packageSlug}</td>
								<td className='p-3'>{b.eventType}</td>
								<td className='p-3'>
									<span className='rounded-full border px-2 py-0.5 text-xs'>
										{b.status}
									</span>
								</td>
								<td className='p-3 whitespace-pre-wrap'>{b.notes ?? '—'}</td>
								<td className='p-3'>
									{/* форма обновления для каждой строки */}
									<form
										action={`/api/admin/bookings/${b.id}`}
										method='post'
										className='flex gap-2'
									>
										<select
											name='status'
											className='border rounded px-2 py-1'
											defaultValue={b.status}
										>
											<option value='pending'>pending</option>
											<option value='confirmed'>confirmed</option>
											<option value='cancelled'>cancelled</option>
										</select>
										<input
											name='notes'
											className='border rounded px-2 py-1'
											placeholder='შენიშვნა'
											defaultValue={b.notes ?? ''}
										/>
										<button className='rounded border px-3 py-1 hover:bg-gray-50'>
											შენახვა
										</button>
									</form>
								</td>
							</tr>
						))}
						{bookings.length === 0 && (
							<tr>
								<td className='p-6 text-center text-gray-500' colSpan={9}>
									ჯერ არ არის ჯავშნები.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</main>
	)
}
