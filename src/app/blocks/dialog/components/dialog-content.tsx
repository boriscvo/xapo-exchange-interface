import { ActionStatus } from "@/app/types/action-status"
import { TransitionState } from "./transition-state"

type Props = {
  actionStatus?: ActionStatus
  successText?: string
  loadingText?: string
  handleDone: () => void
  children: React.ReactNode
}

export function DialogContent({
  actionStatus,
  successText,
  loadingText,
  handleDone,
  children,
}: Props) {
  if (actionStatus === "loading" || actionStatus === "success") {
    return (
      <TransitionState
        status={actionStatus}
        loadingText={loadingText}
        successText={successText}
        handleClose={handleDone}
      />
    )
  }
  return <div className="flex flex-col">{children}</div>
}
