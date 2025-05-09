import "../style.css"
import { ButtonType } from "../types"

type Props = Pick<ButtonType, "variant" | "isDisabled" | "onClick"> & {
  children: React.ReactNode
}

export function Container({
  variant = "primary",
  isDisabled = false,
  onClick,
  children,
}: Props) {
  switch (variant) {
    case "rounded-icon":
      return (
        <button
          disabled={isDisabled}
          className={`default-button w-8 h-8 bg-softWhite p-1 text-center rounded-full shadow`}
          onClick={onClick}
        >
          {children}
        </button>
      )
    case "primary":
    default:
      return (
        <button
          disabled={isDisabled}
          className={`default-button w-24 h-fit py-2 font-semibold text-sm bg-primary rounded-2xl text-center`}
          onClick={onClick}
        >
          {children}
        </button>
      )
  }
}
