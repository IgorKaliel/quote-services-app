import { BudgetSummaryInterface } from "@/shared/interface/budgets"
import { useBudgetInfiniteQuery } from "@/shared/queries/budget/use-budget-infinite-query"

export const useHomeViewModel = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useBudgetInfiniteQuery({})

  const budgets: BudgetSummaryInterface[] =
    data?.pages.flatMap((page) => page.data) ?? []

  const handleLoadMore = () => {
    if (!hasNextPage || isFetchingNextPage) {
      return
    }

    fetchNextPage()
  }

  const handleRefresh = async () => {
    await refetch()
  }

  return {
    budgets,
    handleLoadMore,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    isRefetching,
    handleRefresh,
  }
}
