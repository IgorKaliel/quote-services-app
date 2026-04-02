import { FC } from "react"
import { useBudgetCardViewModel } from "./useBudgetCard.viewModel"
import { BudgetCardView } from "./BudgetCard.view"
import { BudgetSummaryInterface } from "@/shared/interface/budgets"

interface BudgetCardProps {
  budget: BudgetSummaryInterface
}

export const BudgetCard: FC<BudgetCardProps> = (props) => {
  const viewModel = useBudgetCardViewModel(props)
  return <BudgetCardView {...viewModel} />
}
