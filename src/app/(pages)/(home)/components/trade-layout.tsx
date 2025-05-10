type Props = {
  children: React.ReactNode
}

export function TradeLayout({ children }: Props) {
  return (
    <div className="flex flex-col md:mx-auto px-5 md:px-7 py-5 w-full md:max-w-[36rem] rounded-2xl bg-sectionDark">
      {children}
    </div>
  )
}
