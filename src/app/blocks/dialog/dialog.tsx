"use client"
import { Background, Container, DialogContent, MainMessage } from "./components"
import { useDialogVisibility } from "./hooks/use-dialog-visibility"
import { ActionStatus } from "@/app/types/action-status"

type Props = {
  isOpen: boolean
  title: React.ReactNode
  content: React.ReactNode
  yesLabel?: string
  noLabel?: string
  loadingText?: string
  successText?: string
  actionStatus?: ActionStatus
  errorText?: string
  handleClose: () => void
  handleDone: () => void
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
  actionStatus,
  errorText,
  handleClose,
  handleDone,
  handleConfirm,
}: Props) {
  const { isMountingOn, isDialogMounted } = useDialogVisibility(isOpen)

  if (!isOpen && !isDialogMounted) return null

  return (
    <>
      <Container isMountingOn={isMountingOn}>
        <DialogContent
          actionStatus={actionStatus}
          loadingText={loadingText}
          successText={successText}
          errorText={errorText}
          handleDone={handleDone}
        >
          <MainMessage
            title={title}
            content={content}
            yesLabel={yesLabel}
            noLabel={noLabel}
            handleClose={handleClose}
            handleConfirm={handleConfirm}
          />
        </DialogContent>
      </Container>
      <Background
        isMountingOn={isMountingOn}
        onClose={
          actionStatus === "error" || actionStatus === "success"
            ? handleDone
            : handleClose
        }
      />
    </>
  )
}
