'use client'
import ErrorModal from '@/components/Common/ErrorModal/ErrorModal'
import ReservationModal from '@/components/Common/ReservationModal/ReservationModal'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import WarningModal from '@/components/Common/WarningModal/WarningModal'
import { useState } from 'react'

export default function ModalTest() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [isWarningModalOpen,setIsWarningModalOpen] = useState(false)
  const name = "Enoteca Italian restaurant"
  const address = "Soi Sukhumvit 27, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon"
  const tel = "081-234-5678"

  return (
    <>
      <SuccessModal
        type={'CREATE'}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ReservationModal
        address={address}
        tel={tel}
        name={name}
        isVisible={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
      <ErrorModal
        isVisible={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
      <WarningModal
        type={'DELETE'}
        isVisible={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
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
      <button
        className="ml-3 bg-yellow-400 w-fit h-fit p-2 rounded-md text-center"
        onClick={() => setIsWarningModalOpen(true)}
      >
        OPEN Error Modal
      </button>
    </>
  )
}
