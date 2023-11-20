'use client'
import ReservationCard from '@/components/AdminPage/ReservationCard/ReservationCard'
import BackButton from '@/components/Common/BackButton/BackButton'
import AddIcon from '@/components/Common/Icon/AddIcon'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import WarningModal from '@/components/Common/WarningModal/WarningModal'
import { useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import {
  RestaurantInformation,
  RestaurantService,
} from '@/services/RestaurantService'
import {
  Booking,
  BookingRequestBody,
  BookingService,
} from '@/services/BookingService'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { SuccessModalType } from '@/components/Common/SuccessModal/RestaurantSuccessModal'
import { WarningModalType } from '@/components/Common/WarningModal/RestaurantWarningModal'
import ErrorModal from '@/components/Common/ErrorModal/ErrorModal'

const defaultRestaurant: RestaurantInformation = {
  name: '',
  address: '',
  foodtype: '',
  province: '',
  postalcode: '',
  tel: '',
  picture: '',
}

const defaultReservation: Booking = {
  _id: '',
  bookingDate: '',
  numOfGuests: 0,
  user: {
    _id: '',
    name: '',
    email: '',
    tel: '',
  },
  restaurant: {
    name: '',
    address: '',
    foodtype: '',
    province: '',
    postalcode: '',
    tel: '',
    picture: '',
    id: undefined,
    __v: undefined,
    _id: undefined,
  },
  createdAt: '',
  __v: 0,
}

export default function AuthRestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string }
}) {
  const router = useRouter()
  const { data: session } = useSession()
  if (!session || session.user.role !== 'admin') {
    alert('Please login to access this page')
    router.push('/admin/auth')
    return
  }

  const [restaurantInfo, setRestaurantInfo] =
    useState<RestaurantInformation>(defaultRestaurant)
  const [reservationList, setReservationList] = useState<Booking[]>([])
  const [results, setResults] = useState<Record<string, Booking[]>>({})
  const [focusReservation, setFocusReservation] =
    useState<Booking>(defaultReservation)

  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [pickDate, setPickDate] = useState<Dayjs | null>(null)
  const [participants, setParticipants] = useState(0)
  const [successType, setSuccessType] = useState<SuccessModalType>('CREATE')
  const [warningType, setWarningType] = useState<WarningModalType>('DELETE')

  const [editFunction, setEditFunction] = useState<() => void>(() => () => {})

  const handleConfirmCreate = async (
    requestBody: BookingRequestBody,
    restaurantId: string,
    token: string
  ): Promise<boolean> => {
    try {
      return await BookingService.createBooking(
        requestBody,
        restaurantId,
        token
      )
    } catch (error) {
      console.log(error)
    }
    return false
  }

  const handleConfirmEdit = async (
    bookingId: string,
    requestBody: BookingRequestBody,
    token: string
  ): Promise<boolean> => {
    try {
      return await BookingService.editBookingByBookingId(
        bookingId,
        requestBody,
        token
      )
    } catch (error) {
      console.log(error)
    }
    return false
  }

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      try {
        const response = await RestaurantService.getRestaurantById(
          params.restaurantId
        )
        setRestaurantInfo(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRestaurantInfo()
  }, [
    params.restaurantId,
    RestaurantService.getRestaurantById,
    setRestaurantInfo,
  ])

  useEffect(() => {
    const fetchReservationList = async () => {
      try {
        const response = await BookingService.getAllBookings(
          session.user.token,
          params.restaurantId
        )
        setReservationList(
          response.map((reservation) => {
            return {
              ...reservation,
              bookingDate: reservation.bookingDate.substring(0, 10),
              createdAt: reservation.createdAt.substring(0, 10),
            }
          })
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchReservationList()
  }, [
    params.restaurantId,
    session,
    setReservationList,
    BookingService.getAllBookings,
  ])

  useEffect(() => {
    const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
      arr.reduce((groups, item) => {
        ;(groups[key(item)] ||= []).push(item)
        return groups
      }, {} as Record<K, T[]>)

    setResults(
      groupBy(reservationList, (reservation) => reservation.bookingDate)
    )
  }, [reservationList, setResults])

  return (
    <div className="mt-8 flex flex-col justify-center items-center px-12 pb-16">
      <div className="w-full flex items-start">
        <BackButton />
      </div>
      <div className="px-3 w-fit bg-red-500 rounded-[20px] shadow-inner">
        <div className="text-center text-white text-4xl font-medium font-['Helvetica Neue'] leading-[72px]">
          {restaurantInfo.name}
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
            setSuccessType('CREATE')
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
                setSuccessType('DELETE')
                setWarningType('DELETE')
                setIsWarningModalOpen(true)
              }}
              onEdit={() => {
                setSuccessType('UPDATE')
                setWarningType('UPDATE')
                setIsReservationModalOpen(true)
              }}
              onFocus={(reserve: Booking) => {
                setFocusReservation(reserve)
              }}
            />
          ))}
        </div>
      </div>
      <ReservationModal
        name={restaurantInfo.name}
        address={
          restaurantInfo.address +
          ' ' +
          restaurantInfo.province +
          ' ' +
          restaurantInfo.postalcode
        }
        tel={restaurantInfo.tel}
        isVisible={isReservationModalOpen}
        onConfirm={async function ({
          bookingDate,
          numOfGuests,
          createdAt,
        }: BookingRequestBody) {
          if (successType == 'UPDATE') {
            setEditFunction(() => async () => {
              if (
                await handleConfirmEdit(
                  focusReservation._id,
                  { bookingDate, numOfGuests, createdAt },
                  session.user.token
                )
              ) {
                setIsSuccessModalOpen(true)
              } else {
                setIsErrorModalOpen(true)
              }
            })
            setIsWarningModalOpen(true)
          } else if (successType == 'CREATE') {
            if (
              await handleConfirmCreate(
                { bookingDate, numOfGuests, createdAt },
                params.restaurantId,
                session.user.token
              )
            ) {
              setIsSuccessModalOpen(true)
            } else {
              setIsErrorModalOpen(true)
            }
          }
        }}
        onClose={() => setIsReservationModalOpen(false)}
      />
      <WarningModal
        type={warningType}
        isVisible={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
        onConfirm={async () => {
          if (warningType == 'UPDATE') {
            await editFunction()
          } else if (warningType == 'DELETE') {
            //to be implement in delete
          }
        }}
        id={focusReservation._id}
      />
      <SuccessModal
        type={successType}
        name={restaurantInfo.name}
        date={dayjs(pickDate).format('YYYY/MM/DD')}
        number={participants}
        isVisible={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false)
          setIsReservationModalOpen(false)
          setIsWarningModalOpen(false)
          window.location.reload()
        }}
      />
      <ErrorModal
        isVisible={isErrorModalOpen}
        onClose={() => {
          setIsErrorModalOpen(false)
          setIsReservationModalOpen(false)
        }}
        message={'You have reached the maximum number of reservations.'}
      />
    </div>
  )
}
