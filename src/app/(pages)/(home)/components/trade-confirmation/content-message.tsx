type Props = {
  children: React.ReactNode
}

export function ContentMessage({ children }: Props) {
  const Proceed = () => (
    <div className="mt-3">Are you sure you want to proceed?</div>
  )

  return (
    <>
      <div className="leading-6">{children}</div>
      <Proceed />
    </>
  )
}
