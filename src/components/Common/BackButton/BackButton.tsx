'use client'

export default function BackButton() {
  return (
    <div
      className="flex items-center py-2 px-4 rounded-full 
        bg-red-500 text-white text-center font-medium leading-[150%]
        w-[fit-content] h-[fit-content]
      "
      role="button"
      onClick={() => window.history.back()}
    >
      Back
    </div>
  )
}
