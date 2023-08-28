import { SideBar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { ClientOnly } from '@/components/ClientOnly'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/useProvider'
import { ModalProvider } from '@/providers/modalProvider'
import { ToasterProvider } from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId()

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ClientOnly>
              <ModalProvider />
              <SideBar songs={userSongs}>
                {children}
              </SideBar>
            </ClientOnly>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
