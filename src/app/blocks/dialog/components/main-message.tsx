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
      <h2 className=" text-2xl sm:text-xl text-center font-semibold max-sm:mt-2 mb-6 sm:mb-4">
        {title}
      </h2>
      <div className="mb-4 max-sm:text-lg">{content}</div>
      <div className="flex gap-x-2 max-sm:mt-auto">
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
