export default function PageTopicText({ label }: { label: string }) {
  return (
    <div
      className="text-5xl leading-[150%] [text-shadow:2px_2px_4px_rgba(0,0,0,0.25)]
        [font-family:Helvetica-Neue] font-bold text-[#EF4444] uppercase tracking-wider"
    >
      {label}
    </div>
  )
}
