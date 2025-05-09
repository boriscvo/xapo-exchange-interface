type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="flex px-5 py-12 w-full h-[100vh] bg-dark text-white">
      {children}
    </div>
  )
}
