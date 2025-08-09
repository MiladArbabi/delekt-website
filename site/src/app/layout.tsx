import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700','800'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Delekt — Sweden-wide vending',
  description: '24/7 vending. Zero capex. Shared revenue.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-paper text-ink`}>{children}</body>
    </html>
  )
}
