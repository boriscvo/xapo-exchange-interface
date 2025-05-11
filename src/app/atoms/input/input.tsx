type Props = {
  customClass?: string
  value: string
  isDisabled?: boolean
  isAutoFocus?: boolean
  onChange: (value: string) => void
}

export function Input({
  value,
  customClass,
  isDisabled,
  isAutoFocus,
  onChange,
}: Props) {
  return (
    <input
      autoFocus={isAutoFocus}
      disabled={isDisabled}
      type="text"
      className={`border border-gray-300 rounded-md p-2 font-semibold text-dark${
        customClass ? ` ${customClass}` : ""
      }${isDisabled ? " cursor-not-allowed bg-softWhite" : " bg-white"}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="0.00"
    />
  )
}
