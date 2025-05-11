type Props = {
  isMountingOn: boolean
  onClose: () => void
}

export function Background({ isMountingOn, onClose }: Props) {
  return (
    <div
      onClick={onClose}
      tabIndex={0}
      className={`fixed inset-0 w-full h-full z-40 bg-dark/80 transition-all duration-500 ease-in-out ${
        isMountingOn ? "opacity-100 backdrop-blur-[3px]" : "opacity-0"
      }`}
    ></div>
  )
}
