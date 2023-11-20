'use client'
import ModalOverlay from '@/components/Common/ModalOverlay/ModalOverlay'
import SuccessIcon from '../Icon/SuccessIcon'

const ReservationInfo = ({
  name,
  date,
  number,
}: {
  name: string
  date: string
  number: number
}) => {
  //TODO: recheck the format of date, should it be DayJs or Date or just string?
  return (
    <div className="flex flex-col items-center">
      <div className=" w-fit h-16  px-8 mt-4 relative flex flex-col items-center bg-sky-400 rounded-[30px] text-center text-white text-xl font-normal font-['Helvetica Neue'] leading-[30px]">
        <p className="text-center text-white text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {name}
        </p>
        <div className="flex space-x-5">
          <p>{date}</p>
          <p>|</p>
          <p>
            {number} {number > 1 ? 'Guests' : 'Guest'}
          </p>
        </div>
      </div>
      <div className="w-[] mt-3 relative text-center text-red-500 text-sm font-bold font-['Helvetica Neue'] leading-[21px]">
        *You may cancel or reschedule your reservation within 4 hours before
        your appointment
      </div>
    </div>
  )
}

type SuccessModalType = 'CREATE' | 'DELETE' | 'UPDATE'

const SuccessModalMessage: Record<SuccessModalType, string> = {
  CREATE: 'Reservation Completed !',
  DELETE: 'Your Reservation has successfully been canceled',
  UPDATE: 'Your Reservation has successfully been modified',
}

type SuccessModalProps = {
  type: SuccessModalType
  isVisible: boolean
  onClose: () => void
  name?: string
  date?: string
  number?: number
}

export default function SuccessModal(props: SuccessModalProps) {
  //remain add "ReservationID" as a prop and IF CREATE fetch res_info
  //add onClick Button Accept
  const { type, isVisible, onClose } = props

  const message = SuccessModalMessage[type]

  //fetch res info from reserveID
  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div className="w-fit h-auto p-4 relative bg-zinc-100 rounded-[30px] shadow flex flex-col items-center">
        <SuccessIcon />
        <div className=" w-[600px] h-8 relative text-center text-sky-400 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {message}
        </div>
        {type === 'CREATE' ? (
          <ReservationInfo
            name={props.name ?? 'Enoteca Italian restuarant'}
            date={props.date ?? 'Feb 14 , 2024'}
            number={props.number ?? 2}
          />
        ) : null}
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
