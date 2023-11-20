'use client'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { DateValidationError } from '@mui/x-date-pickers/models'

import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput'
import NumberOfGuestIcon from '../Icon/NumberOfGuestIcon'

export default function DateNumberReserve({
  onDateChange,
  onNumberChange,
  isError,
  setupNumber,
  setupDate,
  isReset,
}: {
  onDateChange: Function
  onNumberChange: Function
  isError: boolean
  setupNumber: number
  setupDate: Dayjs | null
  isReset: boolean
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null)
  const [reserveNumber, setReserveNumber] = useState<number>(1)
  useEffect(() => {
    setReserveNumber(setupNumber)
  }, [setupNumber])
  useEffect(() => {
    setReserveDate(setupDate)
  }, [setupDate])
  useEffect(() => {
    setReserveNumber(setupNumber)
    setReserveDate(setupDate)
  }, [isReset])

  return (
    <div className="w-[500px] p-4">
      <div className="w-full bg-gray-200 rounded-[30px] flex flex-col gap-4 py-4">
        <div className="flex flex-row items-center">
          <div className="w-[40%] text-black text-base text-right tracking-wider pe-4 font-normal font-['Helvetica-Neue'] leading-normal">
            Reservation Date
          </div>
          <div className="flex flex-col">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // className="bg-white"
                className={
                  isError
                    ? 'rounded ring-offset-1 ring-1 ring-red-500 bg-white'
                    : 'bg-white'
                }
                value={reserveDate}
                disablePast={true}
                onChange={(value) => {
                  setReserveDate(value)
                  onDateChange(value)
                }}
              />
              {isError ? (
                <div className="text-xs text-red-500 mt-1">
                  * Please Enter Your Reservation Date
                </div>
              ) : null}
            </LocalizationProvider>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[40%] pe-4 text-right items-center flex gap-2 justify-end">
            <NumberOfGuestIcon />
            <div className="text-black text-base font-normal font-['Helvetica-Neue'] leading-normal">
              Number of Guests
            </div>
          </div>
          <div className="flex h-max items-center justify-start">
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
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
      </div>
    </div>
  )
}
