import { ActionStatus } from "@/app/types/action-status"
import { TransitionState } from "./transition-state"

type Props = {
  actionStatus?: ActionStatus
  successText?: string
  loadingText?: string
  handleClose: () => void
  children: React.ReactNode
}

export function DialogContent({
  actionStatus,
  successText,
  loadingText,
  handleClose,
  children,
}: Props) {
  if (actionStatus === "loading" || actionStatus === "success") {
    return (
      <TransitionState
        status={actionStatus}
        loadingText={loadingText}
        successText={successText}
        handleClose={handleClose}
      />
    )
  }
  return <div className="flex flex-col">{children}</div>
}
