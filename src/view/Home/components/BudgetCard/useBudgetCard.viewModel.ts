import { BudgetSummaryInterface } from "@/shared/interface/budgets"
import { colors } from "@/styles/colors"

interface useBudgetCardProps {
  budget: BudgetSummaryInterface
}
export const useBudgetCardViewModel = ({ budget }: useBudgetCardProps) => {
  const formatBudgetName = (title: string) => {
    if (title.length >= 60) {
      return `${title.slice(0, 60)}...`
    }
    return title
  }

  const displayBudgetName = formatBudgetName(budget.title)

  const statusMap = {
    draft: {
      label: "Rascunho",
      backgroundColor: colors.gray[200],
      color: colors.gray[600],
    },
    sent: {
      label: "Enviado",
      backgroundColor: colors["info-light"],
      color: colors["info-dark"],
    },
    approved: {
      label: "Aprovado",
      backgroundColor: colors["success-light"],
      color: colors["success-base"],
    },
    rejected: {
      label: "Recusado",
      backgroundColor: colors["danger-light"],
      color: colors["danger-dark"],
    },
  }

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(budget.total)

  const formattedUpdatedAt = new Intl.DateTimeFormat("pt-BR").format(
    new Date(budget.updatedAt),
  )

  return {
    budget,
    displayBudgetName,
    formattedTotal,
    formattedUpdatedAt,
    statusStyle: statusMap[budget.status],
  }
}
