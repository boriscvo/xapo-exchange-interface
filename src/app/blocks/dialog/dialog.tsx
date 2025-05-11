"use client"
import { Button } from "@/app/atoms/button"
import { Background, Container } from "./components"
import { useDialogVisibility } from "./hooks/use-dialog-visibility"
import { DialogContent } from "./components/dialog-content"

type Props = {
  isOpen: boolean
  title: React.ReactNode
  content: React.ReactNode
  yesLabel?: string
  noLabel?: string
  loadingText?: string
  successText?: string
  handleClose: () => void
  handleConfirm: () => void
}

export function Dialog({
  isOpen,
  title,
  content,
  yesLabel,
  noLabel,
  loadingText,
  successText,
  handleClose,
  handleConfirm,
}: Props) {
  const { isMountingOn, isDialogMounted } = useDialogVisibility(isOpen)

  if (!isOpen && !isDialogMounted) return null

  return (
    <>
      <Container isMountingOn={isMountingOn}>
        <DialogContent
          loadingText={loadingText}
          successText={successText}
          handleClose={handleClose}
        >
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
        </DialogContent>
      </Container>
      <Background isMountingOn={isMountingOn} onClose={handleClose} />
    </>
  )
}
