'use client'
import SuccessModal from '@/components/Common/SuccessModal/SuccessModal'
import { useState } from 'react'

export default function ModalTest() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  return (
    <>
      <SuccessModal
        type={'CREATE'}
        isVisible={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <button
        className="bg-slate-400 w-fit h-fit p-2 rounded-md text-center"
        onClick={() => setIsSuccessModalOpen(true)}
      >
        OPEN MODAL
      </button>
    </>
  )
}
