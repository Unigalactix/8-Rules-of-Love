import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '8 Rules of Love | Interactive Infographic',
  description: 'Discover Jay Shetty\'s 8 Rules of Love through an interactive and beautifully designed infographic experience.',
  keywords: 'Jay Shetty, 8 Rules of Love, relationships, love advice, interactive infographic',
  authors: [{ name: 'Based on Jay Shetty\'s work' }],
  openGraph: {
    title: '8 Rules of Love | Interactive Infographic',
    description: 'Discover Jay Shetty\'s 8 Rules of Love through an interactive experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}