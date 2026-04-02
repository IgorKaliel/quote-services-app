import * as Yup from "yup"

export const loginScheme = Yup.object().shape({
  email: Yup.string()
    .email("E-mail é invalido")
    .required("E-mail é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres"),
})

export type LoginFormData = Yup.InferType<typeof loginScheme>
