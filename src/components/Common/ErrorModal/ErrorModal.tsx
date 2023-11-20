'use client'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

export default function ErrorModal({
  isVisible,
  onClose,
  message,
}: {
  isVisible: boolean
  onClose: () => void
  message: string
}) {
  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div className="w-fit h-auto p-4 relative bg-zinc-100 rounded-[30px] shadow flex flex-col items-center">
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.5 22.5C40.5 27.2739 38.6036 31.8523 35.2279 35.2279C31.8523 38.6036 27.2739 40.5 22.5 40.5C17.7261 40.5 13.1477 38.6036 9.77208 35.2279C6.39642 31.8523 4.5 27.2739 4.5 22.5C4.5 17.7261 6.39642 13.1477 9.77208 9.77208C13.1477 6.39642 17.7261 4.5 22.5 4.5C27.2739 4.5 31.8523 6.39642 35.2279 9.77208C38.6036 13.1477 40.5 17.7261 40.5 22.5ZM24.75 31.5C24.75 32.0967 24.5129 32.669 24.091 33.091C23.669 33.5129 23.0967 33.75 22.5 33.75C21.9033 33.75 21.331 33.5129 20.909 33.091C20.4871 32.669 20.25 32.0967 20.25 31.5C20.25 30.9033 20.4871 30.331 20.909 29.909C21.331 29.4871 21.9033 29.25 22.5 29.25C23.0967 29.25 23.669 29.4871 24.091 29.909C24.5129 30.331 24.75 30.9033 24.75 31.5ZM22.5 11.25C21.9033 11.25 21.331 11.4871 20.909 11.909C20.4871 12.331 20.25 12.9033 20.25 13.5V22.5C20.25 23.0967 20.4871 23.669 20.909 24.091C21.331 24.5129 21.9033 24.75 22.5 24.75C23.0967 24.75 23.669 24.5129 24.091 24.091C24.5129 23.669 24.75 23.0967 24.75 22.5V13.5C24.75 12.9033 24.5129 12.331 24.091 11.909C23.669 11.4871 23.0967 11.25 22.5 11.25Z"
            fill="#EF4444"
          />
        </svg>

        <div className=" w-fit h-8 relative text-center text-red-500 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {message}
        </div>
        <button
          className="mt-3 px-4 py-2 bg-gray-400 rounded justify-start 
            items-center gap-2 inline-flex text-white text-base font-medium 
            font-['Helvetica Neue'] leading-normal"
          onClick={onClose}
        >
          Dismiss
        </button>
      </div>
    </ModalOverlay>
  )
}
