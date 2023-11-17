'use client'
import WarningModal from '@/components/Common/WarningModal/WarningModal'
import ReservationCard from '@/components/UserPage/ReservationCard/ReservationCard'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import { useState } from 'react'

export default function UserReservationsPage() {
  //add DELETE api on onClose_Confirm
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const reserve_1 = {
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
  return (
    <div>
      <ReservationCard
        onCancel={() => setIsWarningModalOpen(true)}
        onEdit={() => setIsReservationModalOpen(true)}
        reservation={reserve_1}
      />
      <WarningModal
        type={'DELETE'}
        isVisible={isWarningModalOpen}
        onClose_Dismiss={() => setIsWarningModalOpen(false)}
        onClose_Confirm={() => {
          setIsWarningModalOpen(false)
          setIsSuccessModalOpen(true)
        }}
      />
      <SuccessModal
        type={'DELETE'}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  )
}
