"use client"

type Props = {
  ref?: React.RefObject<HTMLInputElement | null>
  customClass?: string
  value: string
  isDisabled?: boolean
  isAutoFocus?: boolean
  onFocus?: () => void
  onChange: (value: string) => void
}

export function Input({
  ref,
  value,
  customClass,
  isDisabled,
  isAutoFocus,
  onFocus,
  onChange,
}: Props) {
  return (
    <input
      ref={ref}
      autoFocus={isAutoFocus}
      disabled={isDisabled}
      type="text"
      className={`border border-gray-300 rounded-md p-2 font-semibold text-dark transition-all duration-500 bg-softWhite focus:bg-white ${
        customClass ? ` ${customClass}` : ""
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
      placeholder="0.00"
    />
  )
}
