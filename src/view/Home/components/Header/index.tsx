import { Text, TouchableOpacity, View } from "react-native"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"

interface HeaderProps {
  draftBudgetsCount: number
}

export const Header = ({ draftBudgetsCount }: HeaderProps) => {
  const draftLabel =
    draftBudgetsCount === 1
      ? "Voce tem 1 item em rascunho"
      : `Voce tem ${draftBudgetsCount} itens em rascunho`

  return (
    <View className="mb-5 flex-row items-start justify-between gap-4">
      <View className="flex-1">
        <Text className="text-[28px] font-bold text-purple-base">
          Orçamentos
        </Text>
        <Text className="text-sm text-gray-500 mt-1">{draftLabel}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.85}
        className="flex-row items-center rounded-full bg-purple-base px-5 py-3 gap-2"
      >
        <View className="size-5 items-center justify-center">
          <Ionicons name="add" size={18} color={colors.white} />
        </View>
        <Text className="text-base font-bold text-white">Novo</Text>
      </TouchableOpacity>
    </View>
  )
}
