import { baseURL, fluxorApiClient } from "../api/fluxor-api"
import { AuthResponseProps } from "../interface/http/auth-response"
import { RegisterHttpProps } from "../interface/http/register"

export const register = async (userData: RegisterHttpProps) => {
  const { data } = await fluxorApiClient.post<AuthResponseProps>(
    "/auth/register",
    userData,
  )

  return data
}
