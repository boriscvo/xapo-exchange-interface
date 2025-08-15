import { ActionStatus } from "@/types/action-status"
import { TransitionState } from "./transition-state"

type Props = {
  actionStatus?: ActionStatus
  successText?: string
  loadingText?: string
  errorText?: string
  handleDone: () => void
  children: React.ReactNode
}

export function DialogContent({
  actionStatus,
  successText,
  loadingText,
  errorText,
  handleDone,
  children,
}: Props) {
  if (
    actionStatus === "loading" ||
    actionStatus === "success" ||
    actionStatus === "error"
  ) {
    return (
      <TransitionState
        status={actionStatus}
        loadingText={loadingText}
        successText={successText}
        errorText={errorText}
        handleClose={handleDone}
      />
    )
  }
  return <div className="flex flex-col">{children}</div>
}
