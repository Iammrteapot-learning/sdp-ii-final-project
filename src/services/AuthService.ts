import { ContentType } from './ContentType'
import { serviceConfig } from './serviceConfig'

type RegisterRequestBody = {
  name: string
  email: string
  tel: string
  role: string
  password: string
}

export type RegisterResponseBody = {
  success: boolean
  _id: string
  name: string
  email: string
  token: string
}

type LoginRequestBody = {
  email: string
  password: string
}

export type LoginResponseBody = {
  success: boolean
  _id: string
  name: string
  email: string
  token: string
}

export type AuthMeResponseBody = {
  success: boolean
  data: {
    _id: string
    name: string
    email: string
    tel: string
    role: string
    createdAt: string
    __v: number
  }
}

export const AuthService = {
  register: async (
    registerRequestBody: RegisterRequestBody
  ): Promise<RegisterResponseBody> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/auth/register`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': ContentType.JSON,
      },
      body: JSON.stringify(registerRequestBody),
    })

    if (response.ok) {
      return await response.json()
    } else {
      throw new Error(response.statusText)
    }
  },
  login: async (
    loginRequestBody: LoginRequestBody
  ): Promise<LoginResponseBody> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/auth/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': ContentType.JSON,
      },
      body: JSON.stringify(loginRequestBody),
    })

    if (response.ok) {
      return await response.json()
    } else {
      throw new Error(response.statusText)
    }
  },
  getUserProfile: async (token: string): Promise<AuthMeResponseBody> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/auth/me`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': ContentType.JSON,
        authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      return await response.json()
    } else {
      throw new Error(response.statusText)
    }
  },
}
