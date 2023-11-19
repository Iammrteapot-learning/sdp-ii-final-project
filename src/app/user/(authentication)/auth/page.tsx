'use client'
import SignInForm from '@/components/Common/SignInForm/SignInForm'
import SignUpForm from '@/components/Common/SignUpForm/SignUpForm'
import { AuthService } from '@/services/AuthService'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function UserAuthPage() {
  const [isSignInFormDisplayed, setIsSignInFormDisplayed] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex p-[100px] justify-center items-center bg-orange-300 min-h-[101vh] overflow-hidden">
      {isSignInFormDisplayed && (
        <SignInForm
          handleSignIn={async (email, password) => {
            setIsLoading(true)
            try {
              signIn('credentials', {
                email,
                password,
                redirect: true,
                callbackUrl: '/user/restaurants',
              })
            } catch (error) {
              alert(error)
            }
            setIsLoading(false)
          }}
          handleCreateNewAccount={() => setIsSignInFormDisplayed(false)}
          isLoading={isLoading}
        />
      )}
      {!isSignInFormDisplayed && (
        <SignUpForm
          handleSignUp={async ({ username, tel, email, password }) => {
            setIsLoading(true)
            try {
              const response = await AuthService.register({
                email,
                password,
                tel,
                role: 'user',
                name: username,
              })
              if (response.success) {
                signIn('credentials', {
                  email,
                  password,
                  redirect: true,
                  callbackUrl: '/user/restaurants',
                })
              }
            } catch (error) {
              alert(error)
            }
            setIsLoading(false)
          }}
          handleBackToSignIn={() => setIsSignInFormDisplayed(true)}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
