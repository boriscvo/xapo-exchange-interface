import { Button } from "@/app/atoms/button"

type Props = {
  title: React.ReactNode
  content: React.ReactNode
  yesLabel?: string
  noLabel?: string
  handleClose: () => void
  handleConfirm: () => void
}

export function MainMessage({
  title,
  content,
  yesLabel,
  noLabel,
  handleClose,
  handleConfirm,
}: Props) {
  return (
    <>
      <h2 className="text-xl text-center font-semibold mb-4">{title}</h2>
      <div className="mb-4">{content}</div>
      <div className="flex gap-x-2">
        <Button
          variant="secondary"
          customClass="w-1/2 h-10"
          onClick={handleClose}
          isAutoFocused
        >
          {noLabel || "Cancel"}
        </Button>
        <Button
          variant="primary"
          customClass="w-1/2 h-10"
          onClick={handleConfirm}
        >
          {yesLabel || "Confirm"}
        </Button>
      </div>
    </>
  )
}
