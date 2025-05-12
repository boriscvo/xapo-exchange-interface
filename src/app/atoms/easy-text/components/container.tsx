type Props = {
  isMountingOn?: boolean
  children: React.ReactNode
}

export function Container({ isMountingOn, children }: Props) {
  return (
    <div
      className={`transition-all duration-200 ${
        isMountingOn ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
