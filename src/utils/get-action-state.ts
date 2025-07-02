import { ActionStatus } from "../types/action-status"

export function getActionStatus(
  status: "error" | "idle" | "pending" | "success"
): ActionStatus | undefined {
  switch (status) {
    case "error":
      return "error"
    case "pending":
      return "loading"
    case "success":
      return "success"
    default:
      return
  }
}
