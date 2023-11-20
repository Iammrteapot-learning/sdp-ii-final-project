
import { Button } from '@mui/material'

export default function BookNowButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="w-fit px-4 py-2 bg-sky-400 rounded-xl justify-start items-center hover:bg-sky-500"
      onClick={onClick}
    >
      <div className="text-white text-xl font-bold font-['Helvetica Neue'] leading-9">
        BOOK NOW !
      </div>
    </button>
  )
}
