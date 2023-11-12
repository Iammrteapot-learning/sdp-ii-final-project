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
    <div className="w-[545px] h-[160px] relative mt-3 ">
      <div className="w-[545px] h-40 left-0 top-0 absolute opacity-50 bg-zinc-200 rounded-[30px]" />
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
        <img
          src="images/user.png"
          width="20px"
          className="mt-8"
          style={{ height: '20px' }}
        />
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
