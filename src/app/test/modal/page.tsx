'use client'
import ErrorModal from '@/components/Common/ErrorModal/ErrorModal'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import { useState } from 'react'

export default function ModalTest() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isErrorModalOpen,setIsErrorModalOpen] = useState(false)
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
      <ErrorModal
        isVisible={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
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
      <button
        className="ml-3 bg-red-400 w-fit h-fit p-2 rounded-md text-center"
        onClick={() => setIsErrorModalOpen(true)}
      >
        OPEN Error Modal
      </button>
    </>
  )
}
