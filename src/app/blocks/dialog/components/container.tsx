type Props = {
  isMountingOn: boolean
  children: React.ReactNode
}

export function Container({ isMountingOn, children }: Props) {
  return (
    <div
      className={`fixed left-0 top-0 sm:top-[calc(50%-9.25rem)] sm:left-[calc(50%-12.5rem)] max-sm:h-full min-h-[14.5rem] p-4 sm:p-6 w-full sm:w-[25rem] sm:rounded-3xl bg-white flex justify-center shadow-lg z-50 transition-all duration-500 ease-in-out ${
        isMountingOn ? "top-0 sm:opacity-100" : "top-[100vh] sm:opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
