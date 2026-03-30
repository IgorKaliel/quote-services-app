import { useInfiniteQuery } from "@tanstack/react-query"
import { GetBudgetsRequestParams } from "@/shared/interface/http/list-budgets"
import { getBudgets } from "@/shared/services/budget.service"

interface BudgetInfiniteQueryProps {
  filters?: Omit<GetBudgetsRequestParams, "page" | "perPage">
}

export const useBudgetInfiniteQuery = ({
  filters,
}: BudgetInfiniteQueryProps) => {
  const {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ["budgets", filters],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getBudgets({
        page: pageParam,
        perPage: 10,
        ...filters,
      }),
    getNextPageParam: (lastPage) => {
      const hasNextPage = lastPage.page < lastPage.totalPages

      if (!hasNextPage) {
        return undefined
      }

      return lastPage.page + 1
    },
  })

  return {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
  }
}
