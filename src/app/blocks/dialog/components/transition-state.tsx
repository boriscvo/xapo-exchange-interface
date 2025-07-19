import { Button } from "@/app/atoms/button"
import { ActionStatus } from "@/types/action-status"
import { TransitionMessage } from "./transition-message"
import "../dialog.css"

type Props = {
  status: ActionStatus
  loadingText?: string
  successText?: string
  errorText?: string
  handleClose: () => void
}

export function TransitionState({
  status,
  loadingText,
  successText,
  errorText,
  handleClose,
}: Props) {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex relative border-5 mt-20 sm:mt-5 border-dark rounded-full w-[4rem] h-[4rem] items-center justify-center">
        <div
          className={`rotating-loading transition-all duration-300 ${
            status === "loading" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="static-loading"></div>
        </div>
        <div
          className={`checkmark-success opacity-0 ${
            status === "success" && "checkmark-success-visible"
          }`}
        ></div>
        <div
          className={`x-error opacity-0 ${
            status === "error" && "x-error-visible"
          }`}
        ></div>
      </div>
      <TransitionMessage
        actionStatus={status}
        loadingText={loadingText}
        successText={successText}
        errorText={errorText}
      />
      <Button
        isDisabled={status === "loading"}
        customClass="w-full mt-auto h-10"
        variant="primary"
        onClick={handleClose}
      >
        Close
      </Button>
    </div>
  )
}
