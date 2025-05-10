import { SwitchDual } from "./types"
import "./style.css"

type Props<T extends string> = {
  activeState: T
  options: SwitchDual<T>
  onChange: (value: T) => void
}

export function Switch<T extends string>({
  activeState,
  options,
  onChange,
}: Props<T>) {
  const { option1, option2 } = options
  const isOption1 = activeState === option1.value
  return (
    <div className="flex relative w-full max-w-[22.5rem] border-2 border-white overflow-hidden items-center rounded-2xl">
      <button
        className={`switch-option-default ${
          isOption1 ? "text-dark" : "text-white"
        }`}
        disabled={isOption1}
        onClick={() => onChange(option1.value)}
      >
        {option1.label}
      </button>
      <button
        className={`switch-option-default ${
          !isOption1 ? "text-dark" : "text-white"
        }`}
        disabled={!isOption1}
        onClick={() => onChange(option2.value)}
      >
        {option2.label}
      </button>
      <div
        className={`absolute h-full w-1/2 z-0 bg-white ${
          isOption1 ? "left-0" : "left-1/2"
        } transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  )
}
