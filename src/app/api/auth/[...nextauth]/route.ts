import {
  AuthMeResponseBody,
  AuthService,
  LoginResponseBody,
} from '@/services/AuthService'
import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials, req) {
        if (!credentials) return null

        const userWithOutRole: LoginResponseBody = await AuthService.login({
          email: credentials.email,
          password: credentials.password,
        })

        if (userWithOutRole) {
          const role: AuthMeResponseBody = await AuthService.getUserProfile(
            userWithOutRole.token
          )
          const userWithRole = { ...userWithOutRole, role: role.data.role }
          return userWithRole as any
        } else {
          return null
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
