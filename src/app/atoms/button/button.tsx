"use client"
import { Container } from "./components/container"
import { ButtonType } from "./types"

export function Button({
  variant,
  customClass,
  icon,
  children,
  isDisabled,
  isAutoFocused,
  onClick,
}: ButtonType) {
  return (
    <Container
      customClass={customClass}
      variant={variant}
      isDisabled={isDisabled}
      onClick={onClick}
      isAutoFocused={isAutoFocused}
    >
      {icon}
      {children}
    </Container>
  )
}
