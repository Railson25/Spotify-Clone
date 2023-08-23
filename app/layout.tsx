import { SideBar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { ClientOnly } from '@/components/ClientOnly'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ClientOnly>
          <SideBar>
            {children}
          </SideBar>
        </ClientOnly>
      </body>
    </html>
  )
}
