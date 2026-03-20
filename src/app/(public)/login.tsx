import { LoginView } from "@/view/Login/Login.view"
import { useLoginViewModel } from "@/view/Login/useLogin.viewModel"

export default function Login() {
  const propsUseLoginViewModel = useLoginViewModel()

  return <LoginView {...propsUseLoginViewModel} />
}
