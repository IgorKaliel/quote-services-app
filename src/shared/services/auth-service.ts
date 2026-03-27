import { baseURL, fluxorApiClient } from "../api/fluxor-api"
import { AuthResponseProps } from "../interface/http/auth-response"
import { RegisterHttpProps } from "../interface/http/register"
import { LoginHttpProps } from "../interface/http/login"

export const register = async (userData: RegisterHttpProps) => {
  const { data } = await fluxorApiClient.post<AuthResponseProps>(
    "/auth/register",
    userData,
  )

  return data
}

export const login = async (userData: LoginHttpProps) => {
  const { data } = await fluxorApiClient.post<AuthResponseProps>(
    "/auth/login",
    userData,
  )

  return data
}
