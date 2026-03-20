import { Text, View, Image } from "react-native"
import Logo from "@/assets/images/logo.png"

interface AuthFormHeaderProps {
  title: string
  subTitle: string
}

export const AuthFormHeader = ({ title, subTitle }: AuthFormHeaderProps) => {
  return (
    <View className="flex items-center mb-6">
      <Image
        source={Logo}
        resizeMode="contain"
        className="w-[210px] h-[82px] mb-6"
      />
      <Text className="text-3xl font-semibold mb-3 text-purple-base">
        {title}
      </Text>
      <Text className="text-base text-gray-500 text-center">{subTitle}</Text>
    </View>
  )
}
