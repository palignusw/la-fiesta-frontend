import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
	title: 'La Fiesta — საქორწილო დარბაზი',
	description: 'ელეგანტური ბანკეტები და უმაღლესი მომსახურება',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ka'>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
