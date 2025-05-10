type Props = {
  customClass?: string
  value: string
  isDisabled?: boolean
  onChange: (value: string) => void
}

export function Input({ value, customClass, isDisabled, onChange }: Props) {
  return (
    <input
      disabled={isDisabled}
      type="text"
      className={`border border-gray-300 rounded-md p-2 bg-white text-dark${
        customClass ? ` ${customClass}` : ""
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="0.00"
    />
  )
}
