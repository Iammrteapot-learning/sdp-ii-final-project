import ReservationImage from '../ReservationImage/ReservationImage'
import CancelReservationButton from './CancelReservationButton'
import dayjs, { Dayjs } from 'dayjs'

const getDayOfWeek = (date: string): string => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayIndex = new Date(date).getDay();
  return daysOfWeek[dayIndex];
};

export default function ReservationCard({onCancel,onEdit,reservation}:{onCancel:Function,onEdit:Function,reservation:Object}) {
  const dayOfWeek = getDayOfWeek(reservation.date);
  //for map color
  const dayColor: Record<string, string> = {
    SUN: 'bg-red-600',
    MON: 'bg-yellow-400',
    TUE: 'bg-pink-400',
    WED: 'bg-green-400',
    THU: 'bg-orange-400',
    FRI: 'bg-sky-400',
    SAT: 'bg-purple-400',
  };
  return (
    <div className="w-fit flex flex-row relative bg-neutral-50 rounded-xl shadow items-center p-3 space-x-5 hover:border-2 hover:border-slate-200">
      <ReservationImage img={reservation.restaurant.img} res_id={reservation.restaurant.res_id} />
      <div className="space-y-1 p-2 w-fit">
        <div className="flex flex-row justify-start items-center space-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 7V3M16 7V3M7 11H17M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z"
              stroke="#EF4444"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={"w-fit px-2 relative rounded-[30px] text-white text-lg font-bold " + dayColor[dayOfWeek]}>
            {dayOfWeek}
          </div>
          <div className="text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
            {dayjs(reservation.date).format('MMM D, YYYY')}
          </div>
        </div>
        <div className="w-fit flex items-center justify-center p-3 h-7 relative bg-red-500 rounded-[20px]">
          <div className="w-fit text-white text-xl font-bold font-['Helvetica Neue'] leading-[30px]">
            {reservation.restaurant.res_name}
          </div>
        </div>
        <div className="w-fit relative flex flex-row space-x-4">
          <div className="text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
            Name : {reservation.name}
          </div>
          <div className="text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
            Tel : {reservation.tel}
          </div>
        </div>
        <div className="w-fit relative flex flex-row space-x-2 justfy-center">
          <svg
            className="mt-1"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 6C7.79565 6 8.55871 5.68393 9.12132 5.12132C9.68393 4.55871 10 3.79565 10 3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3C4 3.79565 4.31607 4.55871 4.87868 5.12132C5.44129 5.68393 6.20435 6 7 6ZM0 15C-1.36979e-08 14.0807 0.18106 13.1705 0.532843 12.3212C0.884626 11.4719 1.40024 10.7003 2.05025 10.0503C2.70026 9.40024 3.47194 8.88463 4.32122 8.53284C5.1705 8.18106 6.08075 8 7 8C7.91925 8 8.8295 8.18106 9.67878 8.53284C10.5281 8.88463 11.2997 9.40024 11.9497 10.0503C12.5998 10.7003 13.1154 11.4719 13.4672 12.3212C13.8189 13.1705 14 14.0807 14 15H0Z"
              fill="#38BDF8"
            />
          </svg>

          <div className="text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
            Number of Guests: {reservation.participants}
          </div>
        </div>
      </div>
      <div className="h-[110px] flex flex-col justify-between items-end">
        <button onClick={() => {onEdit()}}>
          <svg
            className='hover:bg-sky-200 hover:rounded-full'
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.172 7.17202C27.541 6.78998 27.9824 6.48525 28.4704 6.27561C28.9584 6.06598 29.4833 5.95563 30.0144 5.95102C30.5455 5.9464 31.0722 6.04761 31.5638 6.24873C32.0554 6.44986 32.502 6.74687 32.8776 7.12244C33.2532 7.49801 33.5502 7.94462 33.7513 8.4362C33.9524 8.92779 34.0536 9.45451 34.049 9.98562C34.0444 10.5167 33.934 11.0416 33.7244 11.5296C33.5148 12.0177 33.21 12.459 32.828 12.828L31.242 14.414L25.586 8.75802L27.172 7.17202ZM22.758 11.586L6 28.344V34H11.656L28.416 17.242L22.756 11.586H22.758Z"
              fill="#3F3F46"
            />
          </svg>
        </button>
        <CancelReservationButton onClickHandler={() => {onCancel()}}/>
      </div>
    </div>
  )
}
