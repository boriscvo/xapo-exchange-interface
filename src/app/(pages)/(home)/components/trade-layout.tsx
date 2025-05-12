type Props = {
  children: React.ReactNode
}

export function TradeLayout({ children }: Props) {
  return (
    <div className="flex md:mx-auto px-5 md:px-8 py-7 w-full md:max-w-[62.5rem] h-fit rounded-2xl bg-sectionDark">
      {children}
    </div>
  )
}
