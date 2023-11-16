'use client'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

const ReservationInfo = ({
  name,
  date,
  number,
}: {
  name: string | undefined
  date: string | undefined
  number: number | undefined
}) => {
  //TODO: recheck the format of date, should it be DayJs or Date or just string?
  // if (!name || !date || !number) return null
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
            {number} {!!number && number > 1 ? 'Guests' : 'Guest'}
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
  type: SuccessModalType;
  isVisible: boolean;
  onClose: () => void;
  name?: string;
  date?: string;
  number?: number;
};


export default function SuccessModal(
  param : SuccessModalProps 
) {
  //remain add "ReservationID" as a prop and IF CREATE fetch res_info
  //add onClick Button Accept
  const message = SuccessModalMessage[param.type]

  //fetch res info from reserveID
  //mockData
  return (
    <ModalOverlay isVisible={param.isVisible} onClose={param.onClose}>
      <div className="w-fit h-auto p-4 relative bg-zinc-100 rounded-[30px] shadow flex flex-col items-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 80C50.6087 80 60.7828 75.7857 68.2843 68.2843C75.7857 60.7828 80 50.6087 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0C29.3913 0 19.2172 4.21427 11.7157 11.7157C4.21427 19.2172 0 29.3913 0 40C0 50.6087 4.21427 60.7828 11.7157 68.2843C19.2172 75.7857 29.3913 80 40 80V80ZM58.535 33.535C59.4458 32.592 59.9498 31.329 59.9384 30.018C59.927 28.707 59.4011 27.4529 58.4741 26.5259C57.5471 25.5989 56.293 25.073 54.982 25.0616C53.671 25.0502 52.408 25.5542 51.465 26.465L35 42.93L28.535 36.465C27.592 35.5542 26.329 35.0502 25.018 35.0616C23.707 35.073 22.4529 35.5989 21.5259 36.5259C20.5989 37.4529 20.073 38.707 20.0616 40.018C20.0502 41.329 20.5542 42.592 21.465 43.535L31.465 53.535C32.4026 54.4724 33.6742 54.9989 35 54.9989C36.3258 54.9989 37.5974 54.4724 38.535 53.535L58.535 33.535V33.535Z"
            fill="#38BDF8"
          />
        </svg>

        <div className=" w-[600px] h-8 relative text-center text-sky-400 text-2xl font-bold font-['Helvetica Neue'] leading-9">
          {message}
        </div>
        {param.type === 'CREATE' ? (
          <ReservationInfo name={param.name} date={param.date} number={param.number} />
        ) : null}
        <button
          className="mt-3 px-4 py-2 bg-gray-400 rounded justify-start 
        items-center gap-2 inline-flex text-white text-base font-medium 
        font-['Helvetica Neue'] leading-normal"
          onClick={param.onClose}
        >
          Accept
        </button>
      </div>
    </ModalOverlay>
  )
}
