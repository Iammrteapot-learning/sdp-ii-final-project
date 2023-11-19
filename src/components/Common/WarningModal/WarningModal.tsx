'use client'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

type WarningModalType = 'DELETE' | 'UPDATE'
const WarningModalMessage: Record<WarningModalType, string> = {
  DELETE: 'Do you want to cancel your reservation ?',
  UPDATE: 'Do you want to change your reservation ?',
}

export default function WarningModal({
  type,
  isVisible,
  onClose_Dismiss,
  onClose_Confirm,
  id,
}: {
  type: WarningModalType
  isVisible: boolean
  onClose_Dismiss: () => void
  onClose_Confirm: () => void
  id:string
}) {
  const message = WarningModalMessage[type]
  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose_Dismiss}>
      <div className="w-fit h-auto p-4 relative bg-zinc-100 rounded-[30px] shadow flex flex-col items-center">
        <svg
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5782 2.97273C15.2994 -0.0872657 19.7027 -0.0872657 21.4217 2.97273L33.9766 25.2927C35.6641 28.2942 33.4974 31.9977 30.0572 31.9977H4.9449C1.5024 31.9977 -0.664347 28.2942 1.02315 25.2927L13.5782 2.97273ZM19.7499 25.25C19.7499 25.8467 19.5128 26.419 19.0909 26.841C18.6689 27.2629 18.0966 27.5 17.4999 27.5C16.9032 27.5 16.3309 27.2629 15.9089 26.841C15.487 26.419 15.2499 25.8467 15.2499 25.25C15.2499 24.6532 15.487 24.081 15.9089 23.659C16.3309 23.237 16.9032 23 17.4999 23C18.0966 23 18.6689 23.237 19.0909 23.659C19.5128 24.081 19.7499 24.6532 19.7499 25.25V25.25ZM17.4999 7.24998C16.9032 7.24998 16.3309 7.48704 15.9089 7.90899C15.487 8.33095 15.2499 8.90325 15.2499 9.49998V16.25C15.2499 16.8467 15.487 17.419 15.9089 17.841C16.3309 18.2629 16.9032 18.5 17.4999 18.5C18.0966 18.5 18.6689 18.2629 19.0909 17.841C19.5128 17.419 19.7499 16.8467 19.7499 16.25V9.49998C19.7499 8.90325 19.5128 8.33095 19.0909 7.90899C18.6689 7.48704 18.0966 7.24998 17.4999 7.24998Z"
            fill="#EF4444"
          />
        </svg>

        <div className=" relative text-center text-red-500 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {message} <br/> Reservation ID : {id}
        </div>
        <div className="w-[230px] h-10 mt-3 relative space-x-10">
          <button
            className="px-4 py-2 bg-sky-400 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium"
            onClick={onClose_Confirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-red-500 rounded justify-start items-center gap-2 inline-flex text-white text-base font-medium"
            onClick={onClose_Dismiss}
          >
            Dismiss
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}
