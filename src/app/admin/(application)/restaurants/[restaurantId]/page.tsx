'use client'
import ReservationCard from '@/components/AdminPage/ReservationCard/ReservationCard'
import BackButton from '@/components/Common/BackButton/BackButton'
import AddIcon from '@/components/Common/Icon/AddIcon'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import WarningModal from '@/components/Common/WarningModal/WarningModal'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

export default function AuthRestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string }
}) {
  //mock data
  const res_1 = {
    date: '2023-12-13',
    id: '001',
    name: 'Tinna Chuaykoblap',
    tel: '081-234-5678',
    participants: '2',
    createdAt: '2023-12-12',
  }
  const res_3 = {
    date: '2023-12-13',
    id: '003',
    name: 'Kim Tae Rae',
    tel: '081-234-5678',
    participants: '2',
    createdAt: '2023-12-12',
  }
  const res_2 = {
    date: '2023-12-14',
    id: '002',
    name: 'Tinna Chuaykoblap',
    tel: '081-234-5678',
    participants: '2',
    createdAt: '2023-12-12',
  }
  const eachDateReserves = [res_1, res_1, res_3, res_2, res_2]
  const restaurant = {
    img: '/images/italian.png',
    res_id: '001',
    res_name: 'Enoteca Italian restaurant',
    foodType: 'Italian',
    province: 'Bangkok',
    address:
      'Soi Sukhumvit 27, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon',
    postalcode: '10101',
    res_tel: '081-234-5678',
  }
  // group by date
  const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
      ;(groups[key(item)] ||= []).push(item)
      return groups
    }, {} as Record<K, T[]>)

  const results = groupBy(eachDateReserves, (i) => i.date)

  //
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [pickDate, setPickDate] = useState<Dayjs | null>(null)
  const [participants, setparticipants] = useState(0)
  const [focusReserve, setFocusReserve] = useState<Object>()
  const [type, setType] = useState('CREATE')

  return (
    <div className="mt-8 flex flex-col justify-center items-center px-12">
      <div className="w-full flex items-start">
        <BackButton />
      </div>
      <div className="px-3 w-fit bg-red-500 rounded-[20px] shadow-inner">
        <div className="text-center text-white text-4xl font-medium font-['Helvetica Neue'] leading-[72px]">
          {restaurant.res_name}
        </div>
      </div>
      <div
        className="text-red-500 text-5xl font-bold font-['Helvetica Neue'] leading-[96px]"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }}
      >
        Reservation Management
      </div>
      <div>
        <div
          className="w-full cursor-pointer flex items-end justify-end"
          onClick={() => {
            setType('CREATE')
            setIsReservationModalOpen(true)
          }}
        >
          <AddIcon />
        </div>
        <div className="space-y-5">
          {Object.entries(results).map(([date, reservations]) => (
            <ReservationCard
              date={date}
              res_list={reservations}
              onDelete={() => {
                setType('DELETE')
                setIsWarningModalOpen(true)
              }}
              onEdit={() => {
                setType('UPDATE')
                setIsReservationModalOpen(true)
              }}
              onFocus={(reserve:object) => {setFocusReserve(reserve)}}
            />
          ))}
        </div>
      </div>

      <WarningModal
        type={type}
        isVisible={isWarningModalOpen}
        onClose_Dismiss={() => setIsWarningModalOpen(false)}
        onClose_Confirm={() => {
          setIsWarningModalOpen(false)
          setIsSuccessModalOpen(true)
        }}
        id={!!focusReserve ? focusReserve.id : ""}
      />
      <SuccessModal
        type={type}
        name={restaurant.res_name}
        date={dayjs(pickDate).format('YYYY/MM/DD')}
        number={participants}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ReservationModal
        name={restaurant.res_name}
        address={
          restaurant.address +
          ' ' +
          restaurant.province +
          ' ' +
          restaurant.postalcode
        }
        tel={restaurant.res_tel}
        isVisible={isReservationModalOpen}
        reserve_number ={type == 'UPDATE' ? focusReserve.participants:null}
        reserve_date={type=='UPDATE' ? dayjs(focusReserve.date, 'YYYY-MM-DD') : null}
        onClose_Confirm={() => {
          setIsReservationModalOpen(false)
          if (type == 'UPDATE') {
            setIsWarningModalOpen(true)
          } else if (type == 'CREATE') {
            setIsSuccessModalOpen(true)
          }
        }}
        onClose_Cancel={() => setIsReservationModalOpen(false)}
        onDateNumberChange={(date: Dayjs | null, number: number) => {
          setPickDate(date)
          setparticipants(number)
        }}
      />
    </div>
  )
}
