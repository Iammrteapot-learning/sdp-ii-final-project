'use client'
import ModalOverlay from '@/components/Common/ModalOverlay/ModalOverlay'
import SuccessIcon from '../Icon/SuccessIcon'

type SuccessModalType = 'CREATE' | 'DELETE' | 'UPDATE'

const SuccessModalMessage: Record<SuccessModalType, string> = {
  CREATE: 'has successfully been created',
  DELETE: 'has successfully been deleted',
  UPDATE: 'has successfully been modified',
}

type SuccessModalProps = {
  restaurantName: string
  type: SuccessModalType
  isVisible: boolean
  onClose: () => void
}

export default function RestaurantSuccessModal(props: SuccessModalProps) {
  const { restaurantName, type, isVisible, onClose } = props

  const message = SuccessModalMessage[type]
  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div className="w-fit h-auto p-4 relative bg-zinc-100 rounded-[30px] shadow flex flex-col items-center">
        <SuccessIcon />
        <div className=" w-[600px] h-8 relative text-center text-sky-400 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {restaurantName}
        </div>
        <div className=" w-[600px] h-8 relative text-center text-sky-400 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {message}
        </div>
        <button
          className="mt-3 px-4 py-2 bg-gray-400 rounded justify-start 
        items-center gap-2 inline-flex text-white text-base font-medium 
        font-['Helvetica Neue'] leading-normal hover:bg-gray-500"
          onClick={onClose}
        >
          Accept
        </button>
      </div>
    </ModalOverlay>
  )
}
