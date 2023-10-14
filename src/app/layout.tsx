import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Prosto_One } from 'next/font/google'
import { Header } from '@/components/Header'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Portafolio Joel Rivera',
  description: 'Portafolio animado ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={prosto.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
