import NavigationBar from '@/components/Common/NavigationBar/NavigationBar'
import React from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="pt-[56px]">
      <NavigationBar />
      {children}
    </main>
  )
}
