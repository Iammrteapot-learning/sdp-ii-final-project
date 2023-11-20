'use client'
import DateNumberReserve from './DateNumberReserve'
import InfoPanel from './RestaurantInfoPanel'
import ShowUserInfoPanel from './ShowUserInfoPanel'
import { useEffect, useState } from 'react'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import dayjs, { Dayjs } from 'dayjs'
import { BookingRequestBody } from '@/services/BookingService'

type ReservationModalProps = {
  name: string
  address: string
  tel: string
  isVisible: boolean
  onConfirm: (request: BookingRequestBody) => void
  onClose: () => void
  onDateNumberChange?: (date: Dayjs, number: number) => void
}

export default function ReservationModal(props: ReservationModalProps) {
  const {
    name,
    address,
    tel,
    isVisible,
    onConfirm,
    onClose,
    onDateNumberChange = (date: Dayjs, number: number) => {},
  } = props

  const [bookingDate, setBookingDate] = useState<Dayjs>(dayjs())
  const [guestNumber, setGuestNumber] = useState<number>(1)
  const [error, setError] = useState(false)

  //remain POST data & Redux at onClick button
  useEffect(() => {
    setGuestNumber(1)
    setBookingDate(dayjs())
  }, [props.isVisible])

  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div
        className="w-[680px] max-h-[450px] overflow-auto no-scrollbar bg-zinc-100 rounded-[30px] shadow 
      flex-col justify-start items-center flex py-6"
      >
        <div className="flex-col justify-center items-center text-center">
          <div className="px-3 w-fit bg-red-500 rounded-[20px] shadow-inner">
            <div className="text-center text-white text-4xl font-medium font-['Helvetica-Neue'] leading-[72px]">
              {name}
            </div>
          </div>
          <div className="mb-6 text-center text-red-500 text-4xl font-bold font-['Helvetica-Neue'] underline leading-[72px]">
            Reservation
          </div>
        </div>
        <InfoPanel location={address} tel={tel} />
        <ShowUserInfoPanel username={name} tel={tel} />
        <DateNumberReserve
          setupNumber={guestNumber}
          setupDate={bookingDate}
          onDateChange={(value: Dayjs) => {
            setError(false)
            setBookingDate(value)
          }}
          onNumberChange={(value: number) => {
            setGuestNumber(value)
          }}
          isError={error}
          isReset={isVisible}
        />
        <div className="mt-8 flex gap-8">
          <button
            className="px-4 py-2 bg-sky-400 hover:bg-sky-500 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium"
            onClick={async () => {
              onDateNumberChange(bookingDate, guestNumber)
              await onConfirm({
                bookingDate: dayjs(bookingDate).format(),
                numOfGuests: guestNumber,
                createdAt: dayjs().format(),
              })
            }}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium"
            onClick={() => {
              setError(false)
              setGuestNumber(1)
              setBookingDate(dayjs())
              onClose()
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}
