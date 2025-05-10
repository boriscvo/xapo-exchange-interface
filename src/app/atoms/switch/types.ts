export type SwitchOption<T extends string> = {
  label: string
  value: T
}

export type SwitchDual<T extends string> = {
  option1: SwitchOption<T>
  option2: SwitchOption<T>
}
