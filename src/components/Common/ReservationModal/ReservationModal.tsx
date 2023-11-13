'use client'
import { Dayjs } from 'dayjs'
import DateNumberReserve from './DateNumberReserve'
import InfoPanel from './RestaurantInfoPanel'
import ShowUserInfoPanel from './ShowUserInfoPanel'
import { useState } from 'react'

export default function ReservationModal() {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
  const [guestNumber, setGuestNumber] = useState<number>()
  //mock user session data 
  const username = 'Thanakrit Yingwatthanakul'
  const tel_user = '081-234-5678'
  //mock restaurant data
  const location =
    'Soi Sukhumvit 27, Khwaeng Khlong Toei Nuea,Khet Watthana, Krung Thep Maha Nakhon 10110.'
  const tel_res = '081-234-5678'
  //remain POST data & Redux at onClick button
  return (
    <div className="w-[733px] h-[632px] relative bg-zinc-100 rounded-[30px] shadow flex-col justify-start items-center inline-flex py-4">
      <div className="w-[610px] h-[140px] relative">
        <div className="w-[610px] h-[71px] left-0 top-0 absolute bg-red-500 rounded-[20px] shadow-inner" />
        <div className="w-[568px] h-[71px] left-[23px] top-0 absolute text-white text-5xl font-medium font-['Helvetica Neue'] leading-[72px]">
          Enoteca Italian restaurant
        </div>
        <div className="w-[568px] h-[71px] left-[11px] top-[69px] absolute text-center text-red-500 text-5xl font-bold font-['Helvetica Neue'] underline leading-[72px]">
          Reservation
        </div>
      </div>
      <InfoPanel location={location} tel={tel_res}/>
      <ShowUserInfoPanel username={username} tel={tel_user} />
      <DateNumberReserve
        onDateChange={(value: Dayjs) => {
          setBookingDate(value)
        }}
        onNumberChange={(value: number) => {
          setGuestNumber(value)
        }}
      />
      <div className="w-[230px] h-10 mt-8 relative space-x-10">
        <button className="px-4 py-2 bg-sky-400 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium">
          Confirm
        </button>
        <button className="px-4 py-2 bg-red-500 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium">
          Cancel
        </button>
      </div>
    </div>
  )
}
