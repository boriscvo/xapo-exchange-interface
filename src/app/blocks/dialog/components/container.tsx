type Props = {
  isMountingOn: boolean
  children: React.ReactNode
}

export function Container({ isMountingOn, children }: Props) {
  return (
    <div
      className={`fixed top-[30%] left-[40%] min-h-[14.5rem] p-6 w-[25rem] rounded-3xl bg-white flex items-center justify-center shadow-lg z-50 transition-all duration-500 ease-in-out ${
        isMountingOn ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
