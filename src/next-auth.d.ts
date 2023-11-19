import NextAuth from 'next-auth'

export type AppRole = 'user' | 'admin'
declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: AppRole
      token: string
    }
  }
}
