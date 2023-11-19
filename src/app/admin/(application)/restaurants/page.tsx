'use client'
import RestaurantCard from '@/components/AdminPage/RestaurantCard/RestaurantCard'
import AddIcon from '@/components/Common/Icon/AddIcon'
import SearchIcon from '@/components/Common/Icon/SearchIcon'
import InputFieldWithOutLabel from '@/components/Common/InputFieldWithOutLabel/InputFieldWithOutLabel'
import PageTopicText from '@/components/Common/PageTopicText/PageTopicText'
import {
  RestaurantInformation,
  RestaurantService,
} from '@/services/RestaurantService'
import { useEffect, useState } from 'react'

type RestaurantWithFlag = RestaurantInformation & { isShow: boolean }

export default function AdminRestaurantsPage() {
  const [searchInput, setSearchInput] = useState('')
  const [restaurantList, setRestaurantList] = useState<RestaurantWithFlag[]>([])
  const [triggerSearch, setTriggerSearch] = useState(false)

  useEffect(() => {
    const fetchRestaurantList = async () => {
      const restaurants = await RestaurantService.getAllRestaurants()
      const restaurantListWithFlag = restaurants.map((restaurant) => ({
        ...restaurant,
        isShow: true,
      }))
      setRestaurantList(restaurantListWithFlag)
    }
    fetchRestaurantList()
  }, [setRestaurantList, RestaurantService.getAllRestaurants])

  useEffect(() => {
    if (triggerSearch) {
      const filteredRestaurantList = restaurantList.map((restaurant) => {
        const isMatch =
          restaurant.name.includes(searchInput) ||
          restaurant.foodtype.includes(searchInput) ||
          restaurant.address.includes(searchInput) ||
          restaurant.province.includes(searchInput) ||
          restaurant.postalcode.includes(searchInput) ||
          restaurant.tel.includes(searchInput) ||
          restaurant.id?.includes(searchInput)
        return {
          ...restaurant,
          isShow: isMatch,
        } as RestaurantWithFlag
      })
      setRestaurantList(filteredRestaurantList)
    }
  }, [triggerSearch, searchInput, restaurantList])

  useEffect(() => {
    if (triggerSearch) {
      setTimeout(() => setTriggerSearch(false), 1000)
    }
  }, [triggerSearch, setTriggerSearch])

  return (
    <main className="flex w-full justify-center pb-24">
      <div className="flex flex-col gap-4 items-center w-[68%] pt-9">
        <PageTopicText label="Restaurant Management" />
        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-2 items-center w-full">
            <div
              className="cursor-pointer"
              onClick={() => setTriggerSearch(true)}
            >
              <SearchIcon />
            </div>
            <div className="w-[40%]">
              <InputFieldWithOutLabel
                name={'search'}
                placeholder="Search Your Restaurant"
                onChange={(value) => setSearchInput(value)}
              />
            </div>
          </div>
          <div className="cursor-pointer">
            <AddIcon />
          </div>
        </div>
        <div
          className="flex flex-col gap-4 py-4 bg-gray-100 min-h-[350px] w-full rounded-xl
          items-center
        "
        >
          {restaurantList.map((restaurant) => {
            return (
              restaurant.isShow && (
                <RestaurantCard
                  name={restaurant.name}
                  id={restaurant.id ?? ''}
                  tags={restaurant.foodtype
                    .split(',')
                    .filter((tag) => tag.trim())}
                  location={restaurant.address}
                  tel={restaurant.tel}
                />
              )
            )
          })}
        </div>
      </div>
    </main>
  )
}
