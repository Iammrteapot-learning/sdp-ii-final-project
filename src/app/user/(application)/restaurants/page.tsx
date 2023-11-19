'use client'
import RestaurantResult from '@/components/UserPage/RestaurantResult/RestaurantResult'
import SearchBar from '@/components/UserPage/SearchBar/SearchBar'
import searchFilter from '@/services/RestaurantService/searchFilter'
import Link from 'next/link'
import { useState } from 'react'

export default function UserRestaurantsPage() {
  //mock data
  const res_1 = {
    id: '001',
    name: 'Enoteca Italian restaurant',
    img: '/images/italian.png',
    foodType: 'Italian cuisine',
    province: 'Bangkok',
  }
  const res_2 = {
    id: '001',
    name: 'Enoteca Italian restaurant',
    img: '/images/italian.png',
    foodType: 'Italian cuisine',
    province: 'Krabi',
  }
  const res_3 = {
    id: '001',
    name: 'Enoteca Italian restaurant',
    img: '/images/italian.png',
    foodType: 'Italian cuisine',
    province: 'Phuket',
  }
  const res_4 = {
    id: '001',
    name: 'Enoteca Italian restaurant',
    img: '/images/italian.png',
    foodType: 'Italian cuisine',
    province: 'Chiangmai',
  }
  const res_list = [res_1, res_2, res_3, res_4]
  const [filterList,setFilterList] = useState<object[]>(res_list)

  return (
    <div className="w-full flex flex-col justify-center items-center mt-32">
      <div
        className="flex text-red-500 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[64px] font-bold font-['Helvetica Neue'] leading-[96px]"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }}
      >
        FIND YOUR RESTAURANTS
      </div>
      <SearchBar onChange={(searchWord:string) => setFilterList(searchFilter({res_list,searchWord}))}/>
      <div className="flex flex-row w-[1000px] justify-around flex-wrap content-around p-4 m-4">
        {filterList.map((res: Object) => (
          <Link
            href={`/user/restaurants/${res.id}`}
            className="w-[51%] sm:w-[58%] md:w-[35%] lg:w-[30%] p-1 sm:p-2 md:p-2 lg:p-4"
          >
            <RestaurantResult
              name={res.name}
              foodType={res.foodType}
              province={res.province}
              img={res.img}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
