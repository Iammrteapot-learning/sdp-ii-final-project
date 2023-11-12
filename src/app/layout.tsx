import type { Metadata } from 'next'
import './globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import NextAuthProvider from '@/providers/NextAuthProvider'

export const metadata: Metadata = {
  title: 'Restaurant App',
  description: 'By GGK Team',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nextAuthSession = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className="">
        <NextAuthProvider session={nextAuthSession}>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
