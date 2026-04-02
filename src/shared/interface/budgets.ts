export type BudgetStatus = "draft" | "sent" | "approved" | "rejected"
export type BudgetDiscountType = "percentage" | "fixed" | null

export interface BudgetItemInterface {
  id: string
  budgetId: string
  title: string
  description: string | null
  unitPrice: number
  quantity: number
  total: number
  createdAt: string
  updatedAt: string
}

export interface BudgetSummaryInterface {
  id: string
  clientId: string
  clientName: string
  categoryId: string | null
  categoryName: string | null
  title: string
  description: string | null
  status: BudgetStatus
  itemCount: number
  subtotal: number
  total: number
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export interface BudgetInterface extends BudgetSummaryInterface {
  discountType: BudgetDiscountType
  discountValue: number
  publicToken: string | null
  items: BudgetItemInterface[]
}
