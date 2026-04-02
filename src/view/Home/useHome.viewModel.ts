import { useDebounce } from "@/shared/hooks/useDebounce"
import { BudgetSummaryInterface } from "@/shared/interface/budgets"
import { useBudgetInfiniteQuery } from "@/shared/queries/budget/use-budget-infinite-query"
import { useState } from "react"

export const useHomeViewModel = () => {
  //const { appliedFilterState } = useFilterStore()

  const [searchText, setSearchText] = useState("")

  const currentSearchText = useDebounce(searchText)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useBudgetInfiniteQuery({
    //filters: { ...appliedFilterState, searchText: currentSearchText },
  })

  const budgets: BudgetSummaryInterface[] =
    data?.pages.flatMap((page) => page.data) ?? []

  const draftBudgetsCount = budgets.filter(
    (budget) => budget.status === "draft",
  ).length

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
    searchText,
    setSearchText,
    draftBudgetsCount,
  }
}
