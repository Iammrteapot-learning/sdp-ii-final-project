'use client'
import BackButton from '@/components/Common/BackButton/BackButton'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import Tag from '@/components/Common/Tag/Tag'
import Address from '@/components/UserPage/AddressComponent/Address'
import BookNowButton from '@/components/UserPage/BookNowButton/BookNowButton'
import ReservationNoti from '@/components/UserPage/ReservationNotification/ReservationNoti'
import RestaurantImage from '@/components/UserPage/RestaurantImage/RestaurantImage'
import { Suspense, useEffect, useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import {
  RestaurantInformation,
  RestaurantService,
} from '@/services/RestaurantService'
import { useSession } from 'next-auth/react'
import { BookingRequestBody, BookingService } from '@/services/BookingService'
import ErrorModal from '@/components/Common/ErrorModal/ErrorModal'
import { LinearProgress } from '@mui/material'

const defaultRestaurant: RestaurantInformation = {
  name: '',
  address: '',
  foodtype: '',
  province: '',
  postalcode: '',
  tel: '',
  picture: '',
}

export default function UserRestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string }
}) {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [pickDate, setPickDate] = useState<Dayjs | null>(null)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [participants, setParticipants] = useState(0)
  const [restaurant, setRestaurant] =
    useState<RestaurantInformation>(defaultRestaurant)
  const isImageUrl = (url: string): boolean =>
    /\.(jpeg|jpg|gif|png|bmp)$/i.test(url)

  useEffect(() => {
    const fetchRestaurant = async () => {
      const res = await RestaurantService.getRestaurantById(params.restaurantId)
      setRestaurant(res)
    }
    fetchRestaurant()
  }, [setRestaurant, RestaurantService.getRestaurantById])

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

  const foodType = restaurant.foodtype.split(',').filter((tag) => tag.trim())
  const { data: session } = useSession()
  if(!session){return;}
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-fit flex flex-col p-3 justify-center justify-self-center">
        <div className="relative flex items-start">
          <BackButton />
        </div>
        <div className="w-fit flex flex-row space-x-20 mt-12">
          <div className="p-3">
            <RestaurantImage
              img={
                !!restaurant && isImageUrl(restaurant.picture)
                  ? restaurant.picture
                  : ''
              }
            />
          </div>
          <div className="p-3 space-y-4">
            <div className="text-5xl text-red-500 font-medium font-['Helvetica Neue'] leading-[72px]">
              {restaurant.name}
            </div>
            <div className="flex flex-row space-x-2">
              {foodType.map((food) => (
                <Tag label={food} />
              ))}
              <Tag label={restaurant.province} />
            </div>
            <Address
              address={restaurant.address}
              tel={restaurant.tel}
              province={restaurant.province}
              postalcode={restaurant.postalcode}
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
        name={restaurant.name}
        address={
          restaurant.address +
          ' ' +
          restaurant.province +
          ' ' +
          restaurant.postalcode
        }
        tel={restaurant.tel}
        isVisible={isReservationModalOpen}
        onConfirm={async function ({
          bookingDate,
          numOfGuests,
          createdAt,
        }: BookingRequestBody) {
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
          setIsReservationModalOpen(false)
        }}
        onClose={() => setIsReservationModalOpen(false)}
        onDateNumberChange={(date: Dayjs | null, number: number) => {
          setPickDate(date)
          setParticipants(number)
        }}
      />
      <SuccessModal
        type={'CREATE'}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        name={restaurant.name}
        date={dayjs(pickDate).format('YYYY/MM/DD')}
        number={participants}
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
