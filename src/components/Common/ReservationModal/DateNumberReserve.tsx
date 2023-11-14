'use client'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput'

export default function DateNumberReserve({
  onDateChange,
  onNumberChange,
}: {
  onDateChange: Function
  onNumberChange: Function
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null)
  const [reserveNumber, setReserveNumber] = useState<number>(1)
  return (
    <div className="w-[500px] h-[130px] relative ">
      <div className="w-[500px] h-40 left-0 absolute opacity-50 bg-zinc-200 rounded-[30px]" />
      <div className="w-[439px] h-auto left-[63px] top-[11px] absolute flex flex-row justify-center space-x-32">
        <div className="left-0 top-[10px] absolute text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
          Reservation Date
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-white"
            value={reserveDate}
            onChange={(value) => {
              setReserveDate(value)
              onDateChange(value)
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="w-auto h-auto left-[31px] top-[65px] absolute flex flex-row justify-start">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='mt-8'
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 6C7.79565 6 8.55871 5.68393 9.12132 5.12132C9.68393 4.55871 10 3.79565 10 3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3C4 3.79565 4.31607 4.55871 4.87868 5.12132C5.44129 5.68393 6.20435 6 7 6ZM0 15C-1.36979e-08 14.0807 0.18106 13.1705 0.532843 12.3212C0.884626 11.4719 1.40024 10.7003 2.05025 10.0503C2.70026 9.40024 3.47194 8.88463 4.32122 8.53284C5.1705 8.18106 6.08075 8 7 8C7.91925 8 8.8295 8.18106 9.67878 8.53284C10.5281 8.88463 11.2997 9.40024 11.9497 10.0503C12.5998 10.7003 13.1154 11.4719 13.4672 12.3212C13.8189 13.1705 14 14.0807 14 15H0Z"
            fill="#38BDF8"
          />
        </svg>

        <div className="left-0 mt-8  ml-3 top-[10px] text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
          Number of Guests
        </div>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          className="mt-4 ml-10"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: 1, max: 100, steps: 1 }}
          value={reserveNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value
            const numericValue = parseInt(inputValue, 10)

            if (!isNaN(numericValue)) {
              setReserveNumber(numericValue)
              onNumberChange(numericValue)
            }
          }}
        />
      </div>
    </div>
  )
}
