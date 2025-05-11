import { ActionStatus } from "@/app/types/action-status"
import { Loading } from "./loading"

type Props = {
  actionStatus: ActionStatus
  children: React.ReactNode
}

export function DialogContent({ actionStatus, children }: Props) {
  if (actionStatus === "loading") {
    return <Loading />
  }
  return <>{children}</>
}
