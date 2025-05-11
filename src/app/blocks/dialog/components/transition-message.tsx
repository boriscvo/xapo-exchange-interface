import { ActionStatus } from "@/app/types/action-status"

type Props = {
  actionStatus: ActionStatus
  loadingText?: string
  successText?: string
}

export function TransitionMessage({
  actionStatus,
  loadingText,
  successText,
}: Props) {
  if (actionStatus === "loading") {
    return <p className="mt-6 text-sm font-semibold">{loadingText}</p>
  }
  if (actionStatus === "success") {
    return <p className="mt-6 text-sm font-semibold">{successText}</p>
  }
  return ""
}
