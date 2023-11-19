export default function ModalHeaderText({ label }: { label: string }) {
  return (
    <div
      style={{ fontFamily: 'Helvetica-Neue' }}
      className="bg-[#38BDF8] shadow-[0_0_4px_1px_rgba(0,0,0,0.25)] rounded-[20px]
        px-4 w-fit text-white text-[42px] text-center font-['Helvetica Neue'] leading-[150%]
        tracking-wider
    "
    >
      {label}
    </div>
  )
}
