'use client'
import { useSession } from 'next-auth/react'
import LogOutButton from './LogOutButton'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function NavigationBar() {
  const router = useRouter()
  const pathPrefix = usePathname().split('/').filter(Boolean)[0]
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    router.push(`/${pathPrefix}/auth`)
    return null
  }

  return (
    <div
      className="w-full h-[56px] bg-yellow-400 flex 
    justify-between items-center fixed top-0 left-0 z-[10000]
    px-4 text-white"
    >
      <div className="flex gap-6 items-center">
        <div>
          <Image
            src={'/images/logo.png'}
            alt="logo"
            width={100}
            height={56}
            objectFit="contain"
          />
        </div>
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
