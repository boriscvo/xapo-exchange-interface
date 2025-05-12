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
          className={`cursor-pointer select-none bg-white transition-all p-1 text-center rounded-full shadow-sm border-1 border-primary ${
            customClass ? ` ${customClass}` : ""
          }`}
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
          className={`font-semibold bg-btnGray transition-all rounded-xl text-center${
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
          className={`flex items-center text-center justify-center font-semibold select-none text-white bg-primary hover:bg-primaryHover transition-all duration-500 rounded-lg text-center${
            customClass ? ` ${customClass}` : ""
          }${
            isDisabled
              ? " opacity-50 cursor-default pointer-events-none"
              : " cursor-pointer"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )
  }
}
