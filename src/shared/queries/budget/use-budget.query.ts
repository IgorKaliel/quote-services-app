import { useQuery } from "@tanstack/react-query"
import { getBudgetById } from "@/shared/services/budget.service"

export const useBudgetQuery = (budgetId: string) => {
  return useQuery({
    queryKey: ["budget", budgetId],
    queryFn: () => getBudgetById(budgetId),
    enabled: !!budgetId,
  })
}
