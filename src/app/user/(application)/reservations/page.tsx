'use client'
import WarningModal from '@/components/Common/WarningModal/WarningModal'
import ReservationCard from '@/components/UserPage/ReservationCard/ReservationCard'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import { useState } from 'react'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import dayjs, { Dayjs } from 'dayjs'

export default function UserReservationsPage() {
  //add DELETE api on onClose_Confirm (warning delete modal)
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [type, setType] = useState('UPDATE')
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [focusReserve, setFocusReserve] = useState(0)
  const [pickDate,setPickDate] = useState<Dayjs | null>(null)
  const [participants,setparticipants] = useState(0)
  const reserve_1 = {
    reserve_id: '001',
    restaurant: {
      img: '/images/italian.png',
      res_id: '001',
      res_name: 'Enoteca Italian restaurant',
      foodType: 'Italian',
      province: 'Bangkok',
      address:
        'Soi Sukhumvit 27, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon',
      postalcode: '10101',
      res_tel: '081-234-5678',
    },
    name: 'Kim Tae Rae',
    tel: '081-234-5678',
    date: '2023-11-23',
    participants: 2,
  }
  const reserve_2 = {
    reserve_id: '002',
    restaurant: {
      img: '/images/italian.png',
      res_id: '001',
      res_name: 'Mae som sri Restaurant',
      foodType: 'Thai',
      province: 'Bangkok',
      address:
        'Soi Sukhumvit 27, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon',
      postalcode: '10101',
      res_tel: '081-234-5678',
    },
    name: 'Kim Tae Rae',
    tel: '081-234-5678',
    date: '2023-11-25',
    participants: 5,
  }
  const myReserve = [reserve_1, reserve_2, reserve_1]
  return (
    <div className="mt-32 flex flex-col items-center justify-center space-y-10">
      <div className="relative flex flex-col items-center justify-center">
        <div
          className="text-red-500 text-[64px] font-bold font-['Helvetica Neue'] leading-[96px]"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }}
        >
          MY RESERVATION
        </div>
        <div className="text-zinc-600 text-3xl font-medium font-['Helvetica Neue'] leading-[45px]">
          Total : {myReserve.length}{' '}
          {myReserve.length > 1 ? 'Reservations' : 'Reservation'}
        </div>
      </div>
      <div className="w-fit py-5 px-16 relative  bg-zinc-100 rounded-xl shadow items-center justyfy-center space-y-5">
        {myReserve.map((res: Object, index: number) => (
          <ReservationCard
            onCancel={() => {
              setIsWarningModalOpen(true)
              setFocusReserve(index)
              setType('DELETE')
            }}
            onEdit={() => {
              setIsReservationModalOpen(true)
              setFocusReserve(index)
              setType('UPDATE')
            }}
            reservation={res}
          />
        ))}
      </div>
      <ReservationModal
        name={myReserve[focusReserve].restaurant.res_name}
        address={
          myReserve[focusReserve].restaurant.address +
          ' ' +
          myReserve[focusReserve].restaurant.province +
          ' ' +
          myReserve[focusReserve].restaurant.postalcode
        }
        tel={myReserve[focusReserve].restaurant.res_tel}
        isVisible={isReservationModalOpen}
        reserve_number={myReserve[focusReserve].participants}
        reserve_date={dayjs(myReserve[focusReserve].date, 'YYYY-MM-DD')}
        onClose_Confirm={() => {
          setIsReservationModalOpen(false)
          setIsWarningModalOpen(true)
        }}
        onClose_Cancel={() => setIsReservationModalOpen(false)}
        onDateNumberChange={(date:Dayjs|null,number:number) => {setPickDate(date); setparticipants(number);}}
      />
      <WarningModal
        type={type}
        isVisible={isWarningModalOpen}
        onClose_Dismiss={() => setIsWarningModalOpen(false)}
        onClose_Confirm={() => {
          //if delete DELETE using myReserve[focusReserve].reserve_id
          //if update POST using update date pickDate and participants
          setIsWarningModalOpen(false)
          setIsSuccessModalOpen(true)
        }}
        id={myReserve[focusReserve].reserve_id}
      />
      <SuccessModal
        type={type}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  )
}
