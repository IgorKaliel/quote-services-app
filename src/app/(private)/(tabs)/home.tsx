import { HomeView } from "@/view/Home/Home.view"
import { useHomeViewModel } from "@/view/Home/useHome.viewModel"

export default function Home() {
  const propsUseHomeViewModel = useHomeViewModel()

  return <HomeView {...propsUseHomeViewModel} />
}
