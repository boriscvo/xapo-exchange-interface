export type ButtonType = {
  variant?: ButtonVariant
  icon?: React.ReactNode
  isDisabled?: boolean
  children?: React.ReactNode
  onClick: () => void
}

export type ButtonVariant = "primary" | "rounded-icon"
