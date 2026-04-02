import { LoginHttpProps } from "@/shared/interface/http/login"
import { login } from "@/shared/services/auth-service"
import { useUserStore } from "@/shared/store/user-store"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useLoginMutation = () => {
  const { user, setSession } = useUserStore()
  console.log(user)
  const mutation = useMutation({
    mutationFn: (userData: LoginHttpProps) => login(userData),
    onSuccess: (response) => {
      setSession(response)
    },
    onError: () => {
      Toast.error("A senha está invalida!", "top")
    },
  })

  return mutation
}
