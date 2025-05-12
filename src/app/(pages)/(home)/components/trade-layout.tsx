type Props = {
  children: React.ReactNode
}

export function TradeLayout({ children }: Props) {
  return (
    <div className="flex max-md:flex-col md:mx-auto px-4 py-4 md:px-5 lg:px-8 md:py-7 w-full md:max-w-[62.5rem] h-full sm:h-fit sm:rounded-2xl bg-sectionDark">
      {children}
    </div>
  )
}
