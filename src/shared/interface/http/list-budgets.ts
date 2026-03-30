import { BudgetStatus, BudgetSummaryInterface } from "../budgets"

export interface ListBudgetsResponseProps {
  data: BudgetSummaryInterface[]
  totalRows: number
  totalPages: number
  page: number
  perPage: number
}

export interface GetBudgetsRequestParams {
  page: number
  perPage: number
  search?: string
  status?: BudgetStatus
  sortBy?: "createdAt" | "updatedAt" | "total" | "title"
  sortDirection?: "asc" | "desc"
}
