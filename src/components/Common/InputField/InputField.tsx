'use client'

type InputFieldArrangement = 'horizontal' | 'vertical'
type InputFieldType = 'text' | 'password'

const ArrangementClass: Record<InputFieldArrangement, string> = {
  horizontal: ' flex-row items-center justify-between gap-3',
  vertical: ' flex-col w-full gap-[6px]',
}

const errorClass = 'focus:ring-red-500 focus:border-red-500 border-red-300'

export default function InputField({
  name,
  placeholder,
  label,
  arrange = 'horizontal',
  required = false,
  isError = false,
  errorMessage = '',
  type = 'text',
  onChange = (value) => {},
}: {
  name: string
  placeholder?: string
  label: string
  arrange?: InputFieldArrangement
  required?: boolean
  isError?: boolean
  errorMessage?: string
  type?: InputFieldType
  onChange?: (value: string) => void
}) {
  const arrangementClass = ArrangementClass[arrange]

  return (
    <div className={`flex ${arrangementClass} mb-[6px] w-full`}>
      <label
        className={`text-base/normal ${
          arrange === 'horizontal' ? 'w-[15%]' : ''
        } ${arrange === 'horizontal' && isError && 'break-words mt-[-25px]'}`}
        htmlFor={name}
      >
        {label}
      </label>

      <div className={`${arrange === 'horizontal' ? 'w-[85%]' : ''}`}>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 
          text-sm rounded-[4px] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5
          focus-visible:outline-none ${isError && errorClass}`}
          required={required}
          onChange={(e) => onChange(e.target.value)}
        />
        {isError && (
          <span className="text-red-500 text-xs italic">{errorMessage}</span>
        )}
      </div>
    </div>
  )
}
