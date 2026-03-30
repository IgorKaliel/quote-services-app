import { Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { theme } from "@/styles/theme"
import { router } from "expo-router"
import { useUserStore } from "@/shared/store/user-store"

export const Header = () => {
  const { user, logout } = useUserStore()
  return (
    <View>
      {/** Transformar em um componente de toque e levar a página de perfil */}
      <View className="flex-row items-center gap-6">
        <View className="relative">
          <View className="size-[56px] rounded-xl bg-shape border-2 items-center justify-center border-gray-300">
            <Ionicons name="person" size={24} color={theme.text} />
          </View>
        </View>
        {/** Ver perfil \/ */}
        <View>
          <Text className="font-bold text-base">Olá, {user?.name}</Text>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity onPress={logout}>
              <Text className="text-base color-purple-base font-bold">
                sair
              </Text>
            </TouchableOpacity>
            <Ionicons name="arrow-forward" size={20} color={theme.primary} />
          </View>
        </View>
      </View>
    </View>
  )
}
