import { FC } from "react"
import { useSupportViewModel } from "./useSupport.viewModel"
import { View, Text } from "react-native"

export const SupportView: FC<ReturnType<typeof useSupportViewModel>> = ({}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Support Page</Text>
    </View>
  )
}
