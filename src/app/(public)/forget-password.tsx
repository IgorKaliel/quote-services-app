import { ForgetView } from "@/view/Forget/Forget.view"
import { useForgetViewModel } from "@/view/Forget/useForget.viewModel"

export default function Forget() {
  const propsUseForgetViewModel = useForgetViewModel()

  return <ForgetView {...propsUseForgetViewModel} />
}
