export type ButtonType = {
  variant?: ButtonVariant
  customClass?: string
  icon?: React.ReactNode
  isDisabled?: boolean
  isAutoFocused?: boolean
  children?: React.ReactNode
  onClick: () => void
}

export type ButtonVariant = "primary" | "secondary" | "rounded-icon"
