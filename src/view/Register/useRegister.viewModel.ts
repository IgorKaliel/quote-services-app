import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation"
import { useUserStore } from "@/shared/store/user-store"

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { user, setSession } = useUserStore()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "Jack Sparrow",
      email: "jacksparrow@gmail.com",
      phone: "11989480625",
      password: "12345678",
      confirmPassword: "12345678",
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData
    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData)
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    })
  })

  console.log(`SetSession: ${JSON.stringify(user)}`)

  return { control, errors, onSubmit }
}
