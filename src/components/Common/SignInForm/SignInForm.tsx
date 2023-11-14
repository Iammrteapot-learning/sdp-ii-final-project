'use client'
import { useState } from 'react'
import InputField from '../InputField/InputField'

const errorMessage = {
  password: 'Please fill in your password',
  email: 'Email is required',
}

export default function SignInForm({
  handleSignIn,
  handleCreateNewAccount,
}: {
  handleSignIn: (email: string, password: string) => void
  handleCreateNewAccount: () => void
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const validation = (email: string, password: string): boolean => {
    setIsEmailError(email === '')
    setIsPasswordError(password === '')
    return email !== '' && password !== ''
  }

  return (
    <form
      className="
    bg-white w-[350px] h-[320px] rounded-[4px] py-[22px] px-[32px]
    flex flex-col items-center justify-between"
    >
      <div className="flex flex-col w-full">
        <InputField
          label="Email"
          name={'signIn/email'}
          placeholder="Email"
          arrange="vertical"
          isError={isEmailError}
          errorMessage={errorMessage.email}
          onChange={(value) => setEmail(value)}
        />
        <InputField
          label="Password"
          name={'signIn/password'}
          placeholder="Password"
          arrange="vertical"
          isError={isPasswordError}
          errorMessage={errorMessage.password}
          type="password"
          onChange={(value) => setPassword(value)}
        />
      </div>
      <div className="flex flex-col w-full">
        <button
          className="px-4 py-2 w-full bg-[#38BDF8] text-white text-base/normal rounded-md"
          type="button"
          onClick={() => {
            if (validation(email, password)) {
              handleSignIn(email, password)
            }
          }}
        >
          Sign In
        </button>
        <div className="flex flew-row text-gray-500 text-xs w-full gap-1 py-1">
          <div>Don't have an account?</div>
          <div
            className="underline cursor-pointer hover:text-blue-400"
            onClick={handleCreateNewAccount}
          >
            Create new one
          </div>
        </div>
      </div>
    </form>
  )
}
