import { AppPriceText } from "@/shared/components/molecules/AppPriceText"
import { FC } from "react"
import { useBudgetCardViewModel } from "./useBudgetCard.viewModel"
import { Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export const BudgetCardView: FC<ReturnType<typeof useBudgetCardViewModel>> = ({
  budget,
  displayBudgetName,
  formattedUpdatedAt,
  statusStyle,
}) => {
  return (
    <View className="w-[350px] my-1 rounded-2xl border border-gray-200 overflow-hidden bg-white mb-3">
      <View className="p-4">
        <View className="flex-row items-start justify-between gap-3">
          <Text className="flex-1 text-base font-bold text-gray-700 leading-5">
            {displayBudgetName}
          </Text>

          <View
            className="flex-row items-center rounded-lg px-3 py-2"
            style={{ backgroundColor: statusStyle.backgroundColor }}
          >
            <Ionicons name="ellipse" size={10} color={statusStyle.color} />
            <Text
              className="ml-1 text-left text-[11px] font-bold"
              style={{ color: statusStyle.color }}
            >
              {statusStyle.label}
            </Text>
          </View>
        </View>

        <Text className="text-sm font-semibold text-gray-700 mt-3">
          {budget.clientName}
        </Text>

        {budget.description ? (
          <Text className="text-sm text-gray-500 mt-1" numberOfLines={1}>
            {budget.description}
          </Text>
        ) : null}

        <View className="flex-row items-end justify-between mt-5">
          <View>
            <Text className="text-xs text-gray-500">Atualizado em</Text>
            <Text className="text-sm text-gray-700 mt-1">
              {formattedUpdatedAt}
            </Text>
          </View>

          <View className="items-end">
            <Text className="text-xs text-gray-500">Investimento</Text>
            <AppPriceText
              value={budget.total}
              classNameCurrency="mt-1 text-sm font-bold text-gray-700"
              classNameValue="text-lg font-bold text-gray-700"
            />
          </View>
        </View>
      </View>
    </View>
  )
}
