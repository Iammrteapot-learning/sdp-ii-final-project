'use client'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

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

export default function SuccessModal({
  type,
  isVisible,
  onClose,
}: {
  type: SuccessModalType
  isVisible: boolean
  onClose: () => void
}) {
  //remain add "ReservationID" as a prop and IF CREATE fetch res_info
  //add onClick Button Accept
  const message = SuccessModalMessage[type]

  //fetch res info from reserveID
  //mockData
  const name = 'Enoteca Italian restuarant'
  const date = 'Feb 14 , 2024'
  const number = 2

  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div className="w-fit h-auto p-4 relative bg-zinc-100 rounded-[30px] shadow flex flex-col items-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 90C60.6087 90 70.7828 85.7857 78.2843 78.2843C85.7857 70.7828 90 60.6087 90 50C90 39.3913 85.7857 29.2172 78.2843 21.7157C70.7828 14.2143 60.6087 10 50 10C39.3913 10 29.2172 14.2143 21.7157 21.7157C14.2143 29.2172 10 39.3913 10 50C10 60.6087 14.2143 70.7828 21.7157 78.2843C29.2172 85.7857 39.3913 90 50 90ZM68.535 43.535C69.4458 42.592 69.9498 41.329 69.9384 40.018C69.927 38.707 69.4011 37.4529 68.4741 36.5259C67.5471 35.5989 66.293 35.073 64.982 35.0616C63.671 35.0502 62.408 35.5542 61.465 36.465L45 52.93L38.535 46.465C37.592 45.5542 36.329 45.0502 35.018 45.0616C33.707 45.073 32.4529 45.5989 31.5259 46.5259C30.5989 47.4529 30.073 48.707 30.0616 50.018C30.0502 51.329 30.5542 52.592 31.465 53.535L41.465 63.535C42.4026 64.4724 43.6742 64.9989 45 64.9989C46.3258 64.9989 47.5974 64.4724 48.535 63.535L68.535 43.535Z"
            fill="#38BDF8"
          />
        </svg>

        <div className=" w-[600px] h-8 relative text-center text-sky-400 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {message}
        </div>
        {type === 'CREATE' ? ReservationInfo({ name, date, number }) : null}
        <button
          className="mt-3 px-4 py-2 bg-gray-400 rounded justify-start 
        items-center gap-2 inline-flex text-white text-base font-medium 
        font-['Helvetica Neue'] leading-normal"
          onClick={onClose}
        >
          Accept
        </button>
      </div>
    </ModalOverlay>
  )
}
