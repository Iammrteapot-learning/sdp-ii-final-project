'use client'
import Tag from '@/components/Common/Tag/Tag'
import DeleteRestaurantButton from './DeleteRestaurantButton'
import RestaurantImage from './RestaurantImage'
import ViewAllReservationButton from './ViewAllReservationButton'
import EditIcon from '@/components/Common/Icon/EditIcon'
import LocationIcon from '@/components/Common/Icon/LocationIcon'
import PhoneIcon from '@/components/Common/Icon/PhoneIcon'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import RestaurantModal from '../RestaurantModal/RestaurantModal'
import WarningModal from '@/components/Common/WarningModal/WarningModal'

export default function RestaurantCard({
  name,
  id,
  tags,
  location,
  tel,
}: {
  name: string
  id: string
  tags: string[]
  location: string
  tel: string
}) {
  const router = useRouter()

  const handleViewAllReservation = () => {
    router.push(`/admin/restaurants/${id}`)
  }

  const handleDelete = () => {}

  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [isShowConfirmDeleteModal, setIsShowConfirmDeleteModal] =
    useState(false)

  return (
    <div
      className="w-[820px] bg-gray-50 rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      py-4 px-6 flex justify-between 
    "
    >
      <div>
        <RestaurantImage img={'/images/italian.png'} res_id={''} />
      </div>
      <div className="flex flex-col gap-1 w-[75%]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div
                className="w-fit flex items-center justify-center px-3 relative bg-red-500 rounded-[20px]
            text-white text-xl font-bold font-['Helvetica Neue'] leading-[30px]"
              >
                {name}
              </div>
              <div className="text-sm font-['Helvetica Neue'] font-medium text-gray-500 leading-[150%]">
                ID: {id}
              </div>
            </div>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <Tag label={tag} />
              ))}
            </div>
          </div>
          <div
            className="cursor-pointer h-fit w-fit"
            onClick={() => setIsShowEditModal(true)}
          >
            <EditIcon />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex gap-2 w-max">
            <LocationIcon />
            <div className="text-xs line max-w-[275px]">{location}</div>
          </div>
          <div className="flex gap-2">
            <PhoneIcon />
            <div className="text-sm font-['Helvetica Neue'] font-light">
              {tel}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <ViewAllReservationButton onClick={handleViewAllReservation} />
          <DeleteRestaurantButton onClick={handleDelete} />
        </div>
      </div>
      <RestaurantModal
        isVisible={isShowEditModal}
        onClose={() => setIsShowEditModal(false)}
        modalType={'edit'}
        restaurantId={id}
      />
      <WarningModal
        type={'DELETE'}
        isVisible={isShowConfirmDeleteModal}
        onClose_Dismiss={() => setIsShowConfirmDeleteModal(false)}
        onClose_Confirm={() => {}}
        id={id}
      />
    </div>
  )
}
