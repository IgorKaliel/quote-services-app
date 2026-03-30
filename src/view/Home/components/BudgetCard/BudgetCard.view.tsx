import { FC } from "react"
import { useBudgetCardViewModel } from "./useBudgetCard.viewModel"
import { Text, View } from "react-native"

export const BudgetCardView: FC<ReturnType<typeof useBudgetCardViewModel>> = ({
  budget,
  displayBudgetName,
  formattedTotal,
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
            className="rounded-full px-3 py-1"
            style={{ backgroundColor: statusStyle.backgroundColor }}
          >
            <Text
              className="text-[11px] font-bold"
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
            <Text className="text-lg font-bold text-gray-700 mt-1">
              {formattedTotal}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
