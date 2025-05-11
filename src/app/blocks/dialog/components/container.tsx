type Props = {
  isMountingOn: boolean
  children: React.ReactNode
}

export function Container({ isMountingOn, children }: Props) {
  return (
    <div
      className={`fixed top-[calc(50%-9.25rem)] left-[calc(50%-12.5rem)] min-h-[14.5rem] p-6 w-[25rem] rounded-3xl bg-white flex justify-center shadow-lg z-50 transition-all duration-500 ease-in-out ${
        isMountingOn ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
