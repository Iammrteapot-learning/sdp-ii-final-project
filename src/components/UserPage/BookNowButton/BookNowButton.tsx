import { Button } from '@mui/material'

export default function BookNowButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="w-fit grow shrink basis-0 self-stretch px-4 py-2 bg-sky-400 rounded-xl justify-start items-center gap-2 inline-flex"
      onClick={onClick}
    >
      <div className="text-white text-xl font-bold font-['Helvetica Neue'] leading-9">
        BOOK NOW !
      </div>
    </Button>
  )
}
