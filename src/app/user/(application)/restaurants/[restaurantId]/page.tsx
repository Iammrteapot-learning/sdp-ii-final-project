'use client'
import BackButton from '@/components/Common/BackButton/BackButton'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import Tag from '@/components/Common/Tag/Tag'
import Address from '@/components/UserPage/AddressComponent/Address'
import BookNowButton from '@/components/UserPage/BookNowButton/BookNowButton'
import ReservationNoti from '@/components/UserPage/ReservationNotification/ReservationNoti'
import RestaurantImage from '@/components/UserPage/RestaurantImage/RestaurantImage'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

export default function UserRestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string }
}) {
  //mock data
  const name = "Enoteca Italian restaurant"
  const foodType = "Italian"
  const province = "Bangkok"
  const address = "Soi Sukhumvit 27, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon"
  const postalcode = "10101"
  const tel = "081-234-5678"
  const img = "/images/Italian.png"
  //modal control
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [pickDate,setPickDate] = useState<Dayjs | null>(null)
  const [participants,setparticipants] = useState(0)
  return (
    <div className='flex justify-center items-center mt-8'>
      <div className="w-fit flex flex-col p-3 justify-center justify-self-center">
        <div className="relative flex items-start">
          <BackButton />
        </div>
        <div className="w-fit flex flex-row space-x-20 mt-12">
          <div className="p-3">
            <RestaurantImage img={img} />
          </div>
          <div className="p-3 space-y-4">
            <div className="text-5xl text-red-500 font-medium font-['Helvetica Neue'] leading-[72px]">
              {name}
            </div>
            <div className="flex flex-row space-x-2">
              <Tag label={foodType} />
              <Tag label={province} />
            </div>
            <Address
              address={address}
              tel={tel}
              province={province}
              postalcode={postalcode}
            />
            <ReservationNoti />
            <div className="flex flex-row space-x-4 w-fit justify-center items-center">
              <div className="text-zinc-500 text-xl font-medium font-['Helvetica Neue'] leading-[30px]">
                want to make a reservation ?
              </div>
              <BookNowButton onClick={() => setIsReservationModalOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <ReservationModal
        name = {name}
        address={address + " " + province + " " + postalcode}
        tel={tel}
        isVisible={isReservationModalOpen}
        onClose_Confirm={() => {setIsReservationModalOpen(false); setIsSuccessModalOpen(true);}}
        onClose_Cancel={() => setIsReservationModalOpen(false)}
        onDateNumberChange={(date:Dayjs|null,number:number) => {setPickDate(date); setparticipants(number);}}
      />
      <SuccessModal
        type={'CREATE'}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        name={name}
        date={dayjs(pickDate).format("YYYY/MM/DD")}
        number={participants}
      />
    </div>
  )
}
