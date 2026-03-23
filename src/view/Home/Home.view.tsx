import React, { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, Text } from "react-native"
import { Header } from "./components/Header"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={[3]}
        renderItem={({ item }) => <Text>{item.toFixed()}</Text>}
        numColumns={3}
        ListHeaderComponent={<Header />}
        contentContainerClassName="px-4 pb-[120px]"
      />
    </SafeAreaView>
  )
}
