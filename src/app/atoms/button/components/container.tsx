import "../style.css"
import { ButtonType } from "../types"

type Props = Pick<
  ButtonType,
  "variant" | "isDisabled" | "onClick" | "isAutoFocused" | "customClass"
> & {
  children: React.ReactNode
}

export function Container({
  variant = "primary",
  customClass,
  isDisabled = false,
  isAutoFocused = false,
  onClick,
  children,
}: Props) {
  switch (variant) {
    case "rounded-icon":
      return (
        <button
          disabled={isDisabled}
          autoFocus={isAutoFocused}
          className={`default-button w-8 h-8 bg-softWhite p-1 text-center rounded-full shadow`}
          onClick={onClick}
        >
          {children}
        </button>
      )
    case "secondary":
      return (
        <button
          disabled={isDisabled}
          autoFocus={isAutoFocused}
          className={`default-button font-semibold text-sm bg-btnGray rounded-xl text-center${
            customClass ? ` ${customClass}` : ""
          }`}
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
          autoFocus={isAutoFocused}
          className={`default-button font-semibold text-sm text-white bg-primary rounded-lg text-center${
            customClass ? ` ${customClass}` : ""
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )
  }
}
