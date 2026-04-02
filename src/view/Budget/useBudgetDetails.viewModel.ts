import { useLocalSearchParams } from "expo-router"
import { useBudgetQuery } from "@/shared/queries/budget/use-budget.query"

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(value))

const getStatusLabel = (status: string) => {
  switch (status) {
    case "approved":
      return "Aprovado"
    case "sent":
      return "Enviado"
    case "rejected":
      return "Recusado"
    default:
      return "Rascunho"
  }
}

export const useBudgetDetailsViewModel = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const budgetQuery = useBudgetQuery(id)
  const budget = budgetQuery.data

  const discountAmount =
    budget && budget.discountValue > 0
      ? budget.discountType === "percentage"
        ? (budget.subtotal * budget.discountValue) / 100
        : budget.discountValue
      : 0

  return {
    budget,
    isLoading: budgetQuery.isLoading,
    isError: budgetQuery.isError,
    statusLabel: budget ? getStatusLabel(budget.status) : "",
    createdAtLabel: budget ? formatDate(budget.createdAt) : "",
    updatedAtLabel: budget ? formatDate(budget.updatedAt) : "",
    discountAmount,
    discountChipLabel:
      budget && budget.discountValue > 0 && budget.discountType === "percentage"
        ? `${budget.discountValue}% off`
        : "",
    isPercentageDiscount: budget?.discountType === "percentage",
  }
}
