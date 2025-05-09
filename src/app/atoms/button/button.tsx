"use client"
import { Container } from "./components/container"
import { ButtonType } from "./types"

export function Button({
  variant,
  icon,
  children,
  isDisabled,
  onClick,
}: ButtonType) {
  return (
    <Container variant={variant} isDisabled={isDisabled} onClick={onClick}>
      {icon}
      {children}
    </Container>
  )
}
