import { RegisterView } from "@/view/Register/Register.view"
import { useRegisterViewModel } from "@/view/Register/useRegister.viewModel"

export default function Register() {
  const propsUseRegisterViewModel = useRegisterViewModel()

  return <RegisterView {...propsUseRegisterViewModel} />
}
