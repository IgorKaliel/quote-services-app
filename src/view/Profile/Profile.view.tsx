import { FC } from "react"
import { useProfileViewModel } from "./useProfile.viewModel"
import { View, Text } from "react-native"

export const ProfileView: FC<ReturnType<typeof useProfileViewModel>> = ({}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Profile Page</Text>
    </View>
  )
}
