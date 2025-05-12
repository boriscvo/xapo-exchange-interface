import { ActionStatus } from "@/app/types/action-status"

type Props = {
  actionStatus: ActionStatus
  loadingText?: string
  successText?: string
  errorText?: string
}

export function TransitionMessage({
  actionStatus,
  loadingText,
  successText,
  errorText,
}: Props) {
  if (actionStatus === "error") {
    return (
      <p className="mt-12 sm:mt-6 max-sm:px-10 max-sm:text-center text-lg sm:text-sm font-semibold">
        {errorText}
      </p>
    )
  }
  if (actionStatus === "loading") {
    return (
      <p className="mt-12 sm:mt-6 max-sm:px-10 max-sm:text-center text-lg sm:text-sm font-semibold">
        {loadingText}
      </p>
    )
  }
  if (actionStatus === "success") {
    return (
      <p className="mt-12 sm:mt-6 max-sm:px-10 max-sm:text-center text-xl sm:text-sm font-semibold">
        {successText}
      </p>
    )
  }
  return ""
}
