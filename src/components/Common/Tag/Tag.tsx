export default function Tag({ label }: { label: string }) {
  return (
    <div
      className="bg-gray-200 text-gray-700 text-xs px-4 py-[5px] w-fit rounded-2xl font-bold"
      role="button"
    >
      {label}
    </div>
  )
}
