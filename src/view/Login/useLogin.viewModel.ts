import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginFormData, loginScheme } from "./login.sheme"
import { useLoginMutation } from "@/shared/queries/auth/user-login.mutation"

export const useLoginViewModel = () => {
  const userLoginMutation = useLoginMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = handleSubmit(async (useFormData) => {
    const userData = await userLoginMutation.mutateAsync(useFormData)
    return userData
  })

  return { control, errors, onSubmit }
}
