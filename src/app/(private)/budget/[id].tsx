import { BudgetDetailsView } from "@/view/Budget/BudgetDetails.view"
import { useBudgetDetailsViewModel } from "@/view/Budget/useBudgetDetails.viewModel"

export default function BudgetDetails() {
  const viewModel = useBudgetDetailsViewModel()

  return <BudgetDetailsView {...viewModel} />
}
