'use client'
import DateNumberReserve from './DateNumberReserve'
import InfoPanel from './RestaurantInfoPanel'
import ShowUserInfoPanel from './ShowUserInfoPanel'
import { useEffect, useState } from 'react'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import dayjs, { Dayjs } from 'dayjs'

type ReservationModalProps = {
  name: string
  address: string
  tel: string
  reserve_date?: Dayjs
  reserve_number?: number
  isVisible: boolean
  onClose_Confirm: () => void
  onClose_Cancel: () => void
  onDateNumberChange: (date: Dayjs | null, number: number) => void
}

export default function ReservationModal(param: ReservationModalProps) {
  var initNumber = 1
  var initDate = null
  if (!!param.reserve_number) {
    initNumber = param.reserve_number
  }
  if (!!param.reserve_date) {
    initDate = param.reserve_date
  }
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
  const [guestNumber, setGuestNumber] = useState<number>(1)
  const [error, setError] = useState(false)
  const errorMessage = 'Please fill in your reservation date'
  //mock user session data
  const username = 'Thanakrit Yingwatthanakul'
  const tel_user = '081-234-5678'
  //remain POST data & Redux at onClick button
  useEffect(() => {
    setGuestNumber(initNumber)
    setBookingDate(initDate)
  },[param.isVisible])

  return (
    <ModalOverlay isVisible={param.isVisible} onClose={param.onClose_Cancel}>
      <div className="w-[680px] relative bg-zinc-100 rounded-[30px] shadow flex-col justify-start items-center inline-flex py-4">
        <div className="flex-col justify-center items-center text-center">
          <div className="px-3 w-fit bg-red-500 rounded-[20px] shadow-inner">
            <div className="text-center text-white text-4xl font-medium font-['Helvetica Neue'] leading-[72px]">
              {param.name}
            </div>
          </div>
          <div className="relative text-center text-red-500 text-4xl font-bold font-['Helvetica Neue'] underline leading-[72px]">
            Reservation
          </div>
        </div>
        <InfoPanel location={param.address} tel={param.tel} />
        <ShowUserInfoPanel username={username} tel={tel_user} />
        <DateNumberReserve
          setupNumber={initNumber}
          setupDate={initDate}
          onDateChange={(value: Dayjs) => {
            setError(false)
            setBookingDate(value)
          }}
          onNumberChange={(value: number) => {
            setGuestNumber(value)
          }}
          isError={error}
          isReset={param.isVisible}
        />
        <div className="w-[230px] h-10 mt-10 relative space-x-10">
          <button
            className="px-4 py-2 bg-sky-400 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium"
            onClick={() => {
              if (!!bookingDate) {
                if (param.onDateNumberChange!!) {
                  param.onDateNumberChange(bookingDate, guestNumber)
                }
                param.onClose_Confirm()
              } else {
                setError(true)
              }
            }}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-red-500 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium"
            onClick={() => {
              setError(false)
              setGuestNumber(initNumber)
              setBookingDate(initDate)
              param.onClose_Cancel()
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}
