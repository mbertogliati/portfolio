export default interface Message{
  text: string,
  type: "success" | "error" | "info" | "warning"
}
export const globalMessage = {
  message: undefined as Message | undefined,
}
