import NextAuth from 'next-auth'

export type AppRole = 'user' | 'admin'
declare module 'next-auth' {
  interface Session {
    user: {
      _id: string
      email: string
      name: string
      role: AppRole
      token: string
    }
  }
}
