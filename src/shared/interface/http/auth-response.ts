import { UserInterface } from "../user"

export interface AuthResponseProps {
  user: UserInterface
  token: string
  refreshToken: string
}
