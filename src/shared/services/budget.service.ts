import { fluxorApiClient } from "@/shared/api/fluxor-api"
import { BudgetInterface } from "@/shared/interface/budgets"
import {
  GetBudgetsRequestParams,
  ListBudgetsResponseProps,
} from "@/shared/interface/http/list-budgets"

export const getBudgets = async ({
  page,
  perPage,
  search,
  status,
  sortBy,
  sortDirection,
}: GetBudgetsRequestParams) => {
  const { data } = await fluxorApiClient.get<ListBudgetsResponseProps>(
    "/budgets",
    {
      params: {
        page,
        perPage,
        search,
        status,
        sortBy,
        sortDirection,
      },
    },
  )
  return data
}

export const getBudgetById = async (budgetId: string) => {
  const { data } = await fluxorApiClient.get<BudgetInterface>(
    `/budgets/${budgetId}`,
  )

  return data
}
