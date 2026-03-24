import { useMutation } from "@tanstack/react-query"
import { register } from "@/shared/services/auth-service"
import { RegisterHttpProps } from "@/shared/interface/http/register"

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpProps) => register(userData),
    onSuccess: (response) => {
      console.log(response)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return mutation
}
