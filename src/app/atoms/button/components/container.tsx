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
          className={`cursor-pointer w-8 h-8 bg-softWhite transition-all p-1 text-center rounded-full shadow`}
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
          className={`font-semibold text-sm bg-btnGray transition-all rounded-xl text-center${
            customClass ? ` ${customClass}` : ""
          }${isDisabled ? " opacity-50 cursor-default" : " cursor-pointer"}`}
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
          className={`font-semibold text-sm text-white bg-primary transition-all rounded-lg text-center${
            customClass ? ` ${customClass}` : ""
          }${isDisabled ? " opacity-50 cursor-default" : " cursor-pointer"}`}
          onClick={onClick}
        >
          {children}
        </button>
      )
  }
}
