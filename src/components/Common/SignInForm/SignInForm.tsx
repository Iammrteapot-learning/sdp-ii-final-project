'use client'
import { useState } from 'react'
import InputField from '../InputField/InputField'

const errorMessage = {
  password: 'Please fill in your password',
  username: 'Username is required',
}

export default function SignInForm({
  handleSignIn,
  handleCreateNewAccount,
}: {
  handleSignIn: (username: string, password: string) => void
  handleCreateNewAccount: () => void
}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameError, setIsUsernameError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const validation = (username: string, password: string): boolean => {
    setIsUsernameError(username === '')
    setIsPasswordError(password === '')
    return username !== '' && password !== ''
  }

  return (
    <form
      className="
    bg-white w-[350px] h-[320px] rounded-[4px] py-[22px] px-[32px]
    flex flex-col items-center justify-between"
    >
      <div className="flex flex-col w-full">
        <InputField
          label="Username"
          name={'signIn/username'}
          placeholder="Username"
          arrange="vertical"
          isError={isUsernameError}
          errorMessage={errorMessage.username}
          onChange={(value) => setUsername(value)}
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
            if (validation(username, password)) {
              handleSignIn(username, password)
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
