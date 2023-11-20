import { ContentType } from './ContentType'
import { RestaurantInformation } from './RestaurantService'
import { serviceConfig } from './serviceConfig'

type User = {
  _id: string
  name: string
  email: string
  tel: string
}

export type Booking = {
  _id: string
  bookingDate: string
  numOfGuests: number
  user: User
  restaurant: RestaurantInformation
  createdAt: string
  __v: number
}

export type BookingRequestBody = {
  bookingDate: string
  numOfGuests: number
  createdAt: string
}

export const BookingService = {
  getAllBookings: async (
    token: string,
    restaurantId?: string
  ): Promise<Booking[]> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/bookings${
      restaurantId ? `?restaurantId=${restaurantId}` : ''
    }`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': ContentType.JSON,
        authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const responseJson = await response.json()
      if (responseJson.success) {
        return responseJson.data
      }
      throw new Error('Get bookings failed')
    } else {
      throw new Error('Get bookings failed')
    }
  },
  getBookingsByBookingId: async (
    bookingId: string,
    token: string
  ): Promise<Booking> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/bookings/${bookingId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': ContentType.JSON,
        authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const responseJson = await response.json()
      if (responseJson.success) {
        return responseJson.data
      }
      throw new Error('Get bookings failed')
    } else {
      throw new Error('Get bookings failed')
    }
  },
  editBookingByBookingId: async (
    bookingId: string,
    requestBody: BookingRequestBody,
    token: string
  ): Promise<boolean> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/bookings/${bookingId}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': ContentType.JSON,
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (response.ok) {
      const responseJson = await response.json()
      return responseJson.success
    } else {
      throw new Error('Edit booking failed')
    }
  },
  deleteBookingByBookingId: async (
    bookingId: string,
    token: string
  ): Promise<boolean> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/bookings/${bookingId}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': ContentType.JSON,
        authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const responseJson = await response.json()
      return responseJson.success
    } else {
      throw new Error('Delete booking failed')
    }
  },
  createBooking: async (
    requestBody: BookingRequestBody,
    restaurantId: string,
    token: string
  ): Promise<boolean> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/restaurants/${restaurantId}/bookings`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': ContentType.JSON,
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (response.ok) {
      const responseJson = await response.json()
      return responseJson.success
    } else {
      throw new Error('Create booking failed')
    }
  },
}
