'use client'
import RestaurantCard from '@/components/AdminPage/RestaurantCard/RestaurantCard'
import AddIcon from '@/components/Common/Icon/AddIcon'
import SearchIcon from '@/components/Common/Icon/SearchIcon'
import InputFieldWithOutLabel from '@/components/Common/InputFieldWithOutLabel/InputFieldWithOutLabel'
import PageTopicText from '@/components/Common/PageTopicText/PageTopicText'
import { useState } from 'react'

export default function AdminRestaurantsPage() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <main className="flex w-full justify-center pb-24">
      <div className="flex flex-col gap-4 items-center w-[68%] pt-9">
        <PageTopicText label="Restaurant Management" />
        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-2 items-center w-full">
            <div className="cursor-pointer">
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
          className="flex flex-col gap-4 py-4 bg-gray-100 w-full rounded-xl
          items-center
        "
        >
          <RestaurantCard
            name={'Test Restaurant'}
            id={'6431313121'}
            tags={['Final', 'Crisis']}
            location={
              'Bangkok, Thailand and also some long long longggg text here as an example of the location'
            }
            tel={'0812345678'}
          />
          <RestaurantCard
            name={'Test Restaurant'}
            id={'6431313121'}
            tags={['Final', 'Crisis']}
            location={
              'Bangkok, Thailand and also some long long longggg text here as an example of the location'
            }
            tel={'0812345678'}
          />
          <RestaurantCard
            name={'Test Restaurant'}
            id={'6431313121'}
            tags={['Final', 'Crisis']}
            location={
              'Bangkok, Thailand and also some long long longggg text here as an example of the location'
            }
            tel={'0812345678'}
          />
        </div>
      </div>
    </main>
  )
}
