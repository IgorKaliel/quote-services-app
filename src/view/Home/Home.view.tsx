import { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, RefreshControl } from "react-native"
import { Footer } from "./components/Footer"
import { BudgetCard } from "./components/BudgetCard"
import { colors } from "@/styles/colors"
import { RenderHeader } from "./components/RenderHeader"
import { EmptyList } from "./components/EmptyList"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  budgets,
  handleLoadMore,
  isFetchingNextPage,
  hasNextPage,
  isLoading,
  isRefetching,
  handleRefresh,
  searchText,
  setSearchText,
  draftBudgetsCount,
}) => {
  const isEmpty = budgets.length === 0

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={budgets}
        keyExtractor={({ id }) => `budget-list-item-${id}`}
        renderItem={({ item }) => <BudgetCard budget={item} />}
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={
          <RenderHeader
            draftBudgetsCount={draftBudgetsCount}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        }
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
          />
        }
        contentContainerClassName={
          isEmpty ? "flex-grow px-4 pb-[120px]" : "px-4 pb-[120px]"
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
            size={"large"}
            onRefresh={handleRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}
