import { BudgetSummaryInterface } from "@/shared/interface/budgets"
import { useBudgetInfiniteQuery } from "@/shared/queries/budget/use-budget-infinite-query"

export const useHomeViewModel = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useBudgetInfiniteQuery({})

  const budgets: BudgetSummaryInterface[] =
    data?.pages.flatMap((page) => page.data) ?? []

  const handleLoadMore = () => {
    if (!hasNextPage || isFetchingNextPage) {
      return
    }

    fetchNextPage()
  }
  console.log("pages", data?.pages)
  return {
    budgets,
    handleLoadMore,
    isFetchingNextPage,
    isLoading,
  }
}
