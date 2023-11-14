'use client'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import { useState } from 'react'

export default function ModalTest() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  return (
    <>
      <SuccessModal
        type={'CREATE'}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ReservationModal
        isVisible={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
      <button
        className="bg-slate-400 w-fit h-fit p-2 rounded-md text-center"
        onClick={() => setIsSuccessModalOpen(true)}
      >
        OPEN Success MODAL
      </button>
      <button
        className="ml-3 bg-sky-300 w-fit h-fit p-2 rounded-md text-center"
        onClick={() => setIsReservationModalOpen(true)}
      >
        OPEN Reservation Modal
      </button>
    </>
  )
}
