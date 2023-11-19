'use client'
import { AppRole } from '@/next-auth'
import { signOut } from 'next-auth/react'

export default function LogOutButton({ role }: { role: AppRole }) {
  return (
    <button
      className="px-4 py-2 bg-sky-400 rounded justify-start 
    items-center gap-2 inline-flex text-white text-base font-medium
    hover:bg-blue-500"
      onClick={() => {
        signOut({
          redirect: true,
          callbackUrl: role === 'admin' ? '/admin/auth' : '/user/auth',
        })
      }}
    >
      Log Out
    </button>
  )
}
