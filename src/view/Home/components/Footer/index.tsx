import { FC } from "react"
import { colors } from "@/styles/colors"

import { View, ActivityIndicator } from "react-native"
interface FooterProps {
  isLoading: boolean
}

export const Footer: FC<FooterProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={45} color={colors["purple-base"]} />
    </View>
  )
}
