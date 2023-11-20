'use client'
type InputFieldType = 'text' | 'password'

const errorClass = 'focus:ring-red-500 focus:border-red-500 border-red-300'

export default function InputFieldWithOutLabel({
  name,
  placeholder,
  isError = false,
  errorMessage = '',
  type = 'text',
  onChange = (value: string) => {},
  defaultValue,
}: {
  name: string
  placeholder?: string
  isError?: boolean
  errorMessage?: string
  type?: InputFieldType
  onChange?: (value: string) => void
  defaultValue?: string
}) {
  return (
    <div className="w-full">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-[4px] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5
    focus-visible:outline-none ${isError && errorClass}`}
        onChange={(e) => onChange(e.target.value)}
        value={defaultValue}
      />
      {isError && (
        <span className="text-red-500 text-xs italic">{errorMessage}</span>
      )}
    </div>
  )
}
