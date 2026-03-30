import { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, RefreshControl } from "react-native"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { BudgetCard } from "./components/BudgetCard"
import { colors } from "@/styles/colors"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  budgets,
  handleLoadMore,
  isFetchingNextPage,
  hasNextPage,
  isLoading,
  isRefetching,
  handleRefresh,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={budgets}
        keyExtractor={({ id }) => `budget-list-item-${id}`}
        renderItem={({ item }) => <BudgetCard budget={item} />}
        ListHeaderComponent={<Header />}
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
          />
        }
        contentContainerClassName="px-4 pb-[120px]"
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
            onRefresh={handleRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}
