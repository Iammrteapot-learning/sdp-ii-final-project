'use client'
import WarningModal from '@/components/Common/WarningModal/WarningModal'
import ReservationCard from '@/components/UserPage/ReservationCard/ReservationCard'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import dayjs, { Dayjs } from 'dayjs'
import { Booking, BookingService } from '@/services/BookingService'

export default function UserReservationsPage() {
  //add DELETE api on onClose_Confirm (warning delete modal)
  const [reservations, setReservations] = useState<Booking[]>([])
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [type, setType] = useState<'CREATE' | 'UPDATE' | 'DELETE'>('UPDATE')
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [focusReserve, setFocusReserve] = useState(0)
  const [pickDate, setPickDate] = useState<Dayjs>(dayjs())
  const [participants, setParticipants] = useState(0)
  const { data: session } = useSession()
  if (!session) {
    return
  }
  useEffect(() => {
    const fetchReservations = async () => {
      const reserves = await BookingService.getAllBookings(session.user.token)
      setReservations(reserves)
    }
    fetchReservations()
  }, [
    session,
    setReservations,
    BookingService.getAllBookings(session.user.token),
  ])

  const handleConfirmDelete = async (bookingId: string, token: string) => {
    try {
      await BookingService.deleteBookingByBookingId(bookingId, token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-10">
      <div className="relative flex flex-col items-center justify-center">
        <div
          className="text-red-500 text-[64px] font-bold font-['Helvetica Neue'] leading-[96px]"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }}
        >
          MY RESERVATION
        </div>
        <div className="text-zinc-600 text-3xl font-medium font-['Helvetica Neue'] leading-[45px]">
          Total : {reservations.length}{' '}
          {reservations?.length > 1 ? 'Reservations' : 'Reservation'}
        </div>
      </div>
      <div className="w-fit py-5 px-16 relative  bg-zinc-100 rounded-xl shadow items-center justify-center space-y-5">
        {reservations.map((res: Booking, index: number) => (
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
      {/* <ReservationModal
        name={reservations[focusReserve].restaurant.name}
        address={
          reservations[focusReserve].restaurant.address +
          ' ' +
          reservations[focusReserve].restaurant.province +
          ' ' +
          reservations[focusReserve].restaurant.postalcode
        }
        tel={reservations[focusReserve].restaurant.tel}
        isVisible={isReservationModalOpen}
        onConfirm={() => {
          setIsReservationModalOpen(false)
          setIsWarningModalOpen(true)
        }}
        onClose={() => setIsReservationModalOpen(false)}
        onDateNumberChange={(date: Dayjs, number: number) => {
          setPickDate(date)
          setParticipants(number)
        }}
      /> */}
      <WarningModal
        type={type === 'CREATE' ? 'UPDATE' : type}
        isVisible={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
        onConfirm={async () => {
          //if delete DELETE using myReserve[focusReserve].reserve_id
          //if update POST using update date pickDate and participants
          setIsWarningModalOpen(false)
          await handleConfirmDelete(
            reservations[focusReserve]._id ?? '',
            session.user.token
          )
          setIsSuccessModalOpen(true)
        }}
        id={reservations[focusReserve]?._id}
      />
      <SuccessModal
        type={type}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  )
}
