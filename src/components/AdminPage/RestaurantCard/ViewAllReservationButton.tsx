export default function ViewAllReservationButton({
  onClick,
}: {
  onClick?: () => void
}) {
  return (
    <button
      className="bg-[#38BDF8] text-white px-4 rounded-xl text-base font-medium 
      h-fit self-end hover:bg-blue-500"
      role="button"
      onClick={onClick}
    >
      View All Reservations
    </button>
  )
}
