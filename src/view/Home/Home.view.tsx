import React, { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { BudgetCard } from "./components/BudgetCard"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  budgets,
  handleLoadMore,
  isFetchingNextPage,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BudgetCard budget={item} />}
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Footer isLoading={isFetchingNextPage} />}
        contentContainerClassName="px-4 pb-[120px]"
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}
