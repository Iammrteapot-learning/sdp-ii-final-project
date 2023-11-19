import { ContentType } from './ContentType'
import { serviceConfig } from './serviceConfig'

export type RestaurantInformation = {
  name: string
  address: string
  foodtype: string
  province: string
  postalcode: string
  tel: string
  picture: string
  id?: string
  __v?: string
  _id?: string
}

export const RestaurantService = {
  createRestaurant: async (
    requestBody: RestaurantInformation,
    token: string
  ): Promise<RestaurantInformation> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/restaurants`
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
      if (responseJson.success) {
        return responseJson.data
      }
      throw new Error('Create restaurant failed')
    } else {
      throw new Error('Create restaurant failed')
    }
  },
  getAllRestaurants: async (): Promise<RestaurantInformation[]> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/restaurants`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': ContentType.JSON,
      },
    })

    if (response.ok) {
      const responseJson = await response.json()
      if (responseJson.success) {
        return responseJson.data
      }
      throw new Error('Get all restaurants failed')
    } else {
      throw new Error('Get all restaurants failed')
    }
  },
  getRestaurantById: async (
    restaurantId: string
  ): Promise<RestaurantInformation> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/restaurants/${restaurantId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': ContentType.JSON,
      },
    })

    if (response.ok) {
      const responseJson = await response.json()
      if (responseJson.success) {
        return responseJson.data
      }
      throw new Error('Get restaurant by id failed')
    } else {
      throw new Error('Get restaurant by id failed')
    }
  },
  editRestaurantById: async (
    requestBody: RestaurantInformation,
    token: string
  ): Promise<RestaurantInformation> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/restaurants/${requestBody.id}`
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
      if (responseJson.success) {
        return responseJson.data
      }
      throw new Error('Edit restaurant failed')
    } else {
      throw new Error('Edit restaurant failed')
    }
  },
  deleteRestaurantById: async (
    restaurantId: string,
    token: string
  ): Promise<boolean> => {
    const url = `${serviceConfig.backendBaseUrl}/api/v1/restaurants/${restaurantId}`
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
      throw new Error('Delete restaurant failed')
    }
  },
}
