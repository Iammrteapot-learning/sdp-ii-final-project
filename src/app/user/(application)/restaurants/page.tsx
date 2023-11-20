'use client'
import RestaurantResult from '@/components/UserPage/RestaurantResult/RestaurantResult'
import SearchBar from '@/components/UserPage/SearchBar/SearchBar'
import { RestaurantService } from '@/services/RestaurantService'
import searchFilter from '@/services/RestaurantService/searchFilter'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function UserRestaurantsPage() {
  const [restaurants, setRestaurants] = useState<object[]>([])
  const [filterList, setFilterList] = useState<object[]>(restaurants)
  
  useEffect(() => {
    const fetchRestaurantList = async () => {
      const restaurants = await RestaurantService.getAllRestaurants()
      setRestaurants(restaurants)
      setFilterList(restaurants)
    }
    fetchRestaurantList()
  }, [setRestaurants, RestaurantService.getAllRestaurants])
  // const tags = foodtype.split(',').filter((tag) => tag.trim())

  return (
    <div className="w-full flex flex-col justify-center items-center mt-8">
      <div
        className="flex text-red-500 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[64px] font-bold font-['Helvetica Neue'] leading-[96px]"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }}
      >
        FIND YOUR RESTAURANTS
      </div>
      <SearchBar
        onChange={(searchWord: string) =>
          setFilterList(searchFilter({ res_list: restaurants, searchWord }))
        }
      />
      <div className="flex flex-row w-[1000px] justify-around flex-wrap content-around p-4 m-4">
        {filterList.map((res: Object) => (
          <Link
            href={`/user/restaurants/${res.id}`}
            className="w-[51%] sm:w-[58%] md:w-[35%] lg:w-[30%] p-1 sm:p-2 md:p-2 lg:p-4"
          >
            <RestaurantResult
              name={res.name}
              foodType={res.foodtype.split(',').filter((tag) => tag.trim())}
              province={res.province}
              img={res.picture}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
