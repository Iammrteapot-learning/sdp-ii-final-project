'use client'
import SignInForm from '@/components/Common/SignInForm/SignInForm'
import SignUpForm from '@/components/Common/SignUpForm/SignUpForm'
import { useState } from 'react'

export default function UserAuthPage() {
  const [isSignInFormDisplayed, setIsSignInFormDisplayed] = useState(true)

  return (
    <div className="flex p-[100px] justify-center items-center bg-orange-300 min-h-[101vh] overflow-hidden">
      {isSignInFormDisplayed && (
        <SignInForm
          handleSignIn={function (email: string, password: string): void {
            throw new Error('Function not implemented.')
          }}
          handleCreateNewAccount={() => setIsSignInFormDisplayed(false)}
        />
      )}
      {!isSignInFormDisplayed && (
        <SignUpForm
          handleSignUp={function ({
            username,
            tel,
            email,
            password,
          }: {
            username: string
            tel: string
            email: string
            password: String
          }): void {
            throw new Error('Function not implemented.')
          }}
          handleBackToSignIn={() => setIsSignInFormDisplayed(true)}
        />
      )}
    </div>
  )
}
