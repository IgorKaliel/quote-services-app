import * as Yup from "yup"

export const registerScheme = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório")
    .min(4, "Nome deve ter no mínimo 4 caracteres"),
  email: Yup.string()
    .email("E-mail é invalido")
    .required("E-mail é obrigatório"),
  phone: Yup.string()
    .required("Celular é obrigatório")
    .matches(/^\d{11}$/, "Celular deve ter 11 digitos ( DDD + Número )"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres"),
  confirmPassword: Yup.string()
    .required("Senha é obrigatória")
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
})

export type RegisterFormData = Yup.InferType<typeof registerScheme>
