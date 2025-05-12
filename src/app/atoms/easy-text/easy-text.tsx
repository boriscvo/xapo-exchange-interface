"use client"

import React from "react"
import { Container } from "./components/container"
import { useEasyText } from "./hooks/use-easy-text"

type Props = {
  isVisible?: boolean
  children: React.ReactNode
}

export function EasyText({ isVisible, children }: Props) {
  const { isTextMounted, isMountingOn } = useEasyText(isVisible)

  if (!isVisible && !isTextMounted) return null
  return <Container isMountingOn={isMountingOn}>{children}</Container>
}
