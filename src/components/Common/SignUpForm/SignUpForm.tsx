'use client'
import { useState } from 'react'
import InputField from '../InputField/InputField'

const errorMessage = {
  password: 'Please fill in your password',
  email: 'Email does not match',
  tel: 'Please fill in your phone number',
  name: 'Username is required',
  retypePassword: 'Password does not match',
}

export default function SignUpForm({
  handleSignUp,
  handleBackToSignIn,
}: {
  handleSignUp: ({
    username,
    tel,
    email,
    password,
  }: {
    username: string
    tel: string
    email: string
    password: String
  }) => void
  handleBackToSignIn: () => void
}) {
  const [username, setUsername] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [isUsernameError, setIsUsernameError] = useState(false)
  const [isTelError, setIsTelError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isRetypePasswordError, setIsRetypePasswordError] = useState(false)

  const validation = ({
    username,
    tel,
    email,
    password,
    retypePassword,
  }: {
    username: string
    tel: string
    email: string
    password: string
    retypePassword: string
  }): boolean => {
    const isUsernameValid = username !== ''
    const isTelValid = tel !== ''
    const isEmailValid =
      email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) !== null
    const isPasswordValid = password !== ''
    const isRetypePasswordValid = retypePassword === password

    setIsUsernameError(!isUsernameValid)
    setIsTelError(!isTelValid)
    setIsEmailError(!isEmailValid)
    setIsPasswordError(!isPasswordValid)
    setIsRetypePasswordError(!isRetypePasswordValid)
    return isUsernameValid && isTelValid && isEmailValid && isPasswordValid
  }

  return (
    <form
      className="
    bg-white w-[350px] rounded-[4px] py-[22px] px-[32px]
    flex flex-col items-center justify-between"
    >
      <div className="flex flex-col w-full">
        <InputField
          label="Name"
          name={'signOut/username'}
          placeholder="Username"
          arrange="vertical"
          isError={isUsernameError}
          errorMessage={errorMessage.name}
          type="text"
          onChange={(value) => setUsername(value)}
        />
        <InputField
          label="Tel"
          name={'signOut/tel'}
          placeholder="Tel. Number"
          arrange="vertical"
          isError={isTelError}
          errorMessage={errorMessage.tel}
          type="text"
          onChange={(value) => setTel(value)}
        />
        <InputField
          label="Email"
          name={'signOut/email'}
          placeholder="Email"
          arrange="vertical"
          isError={isEmailError}
          errorMessage={errorMessage.email}
          onChange={(value) => setEmail(value)}
        />
        <InputField
          label="Password"
          name={'signOut/password'}
          placeholder="Password"
          arrange="vertical"
          isError={isPasswordError}
          errorMessage={errorMessage.password}
          type="password"
          onChange={(value) => setPassword(value)}
        />
        <InputField
          label="Re-type Password"
          name={'signOut/re-password'}
          placeholder="Password"
          arrange="vertical"
          isError={isRetypePasswordError}
          errorMessage={errorMessage.retypePassword}
          type="password"
          onChange={(value) => setRetypePassword(value)}
        />
      </div>
      <div className="flex flex-col w-full">
        <button
          className="mt-4 px-4 py-2 w-full bg-[#38BDF8] text-white text-base/normal rounded-md"
          type="button"
          onClick={() => {
            if (
              validation({ username, tel, email, password, retypePassword })
            ) {
              handleSignUp({ username, tel, email, password })
            }
          }}
        >
          Sign Up
        </button>
        <div className="flex flew-row text-gray-500 text-xs w-full gap-1 py-1">
          <div>Already has an account?</div>
          <div
            className="underline cursor-pointer hover:text-blue-400"
            onClick={handleBackToSignIn}
          >
            Sign In
          </div>
        </div>
      </div>
    </form>
  )
}
