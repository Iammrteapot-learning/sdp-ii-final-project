'use client'
import { useSession } from 'next-auth/react'
import LogOutButton from './LogOutButton'
import Link from 'next/link'

export default function NavigationBar() {
  const { data: session } = useSession()
  if (!session) {
    return null
  }

  return (
    <div
      className="w-full h-[56px] bg-yellow-400 flex 
    justify-between items-center fixed top-0 left-0 z-[10000]
    px-4 text-white"
    >
      <div className="flex gap-6">
        <div>ICON</div>
        <Link
          href={
            session.user.role === 'user'
              ? '/user/restaurants'
              : '/admin/restaurants'
          }
        >
          Restaurant
        </Link>
        <Link
          href={
            session.user.role === 'user'
              ? '/user/reservations'
              : '/admin/reservations'
          }
        >
          My Reservation
        </Link>
      </div>
      <div className="flex gap-3">
        <LogOutButton role={session.user.role} />
      </div>
    </div>
  )
}
