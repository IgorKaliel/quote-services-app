import { AppPriceText } from "@/shared/components/molecules/AppPriceText"
import { BudgetSummaryInterface } from "@/shared/interface/budgets"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { Text, View } from "react-native"

interface BudgetPreviewCardProps {
  budget: BudgetSummaryInterface
  headerTitle: string
  headerDescription: string
}

export const BudgetPreviewCard: FC<BudgetPreviewCardProps> = ({
  budget,
  headerTitle,
  headerDescription,
}) => {
  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(
    new Date(budget.updatedAt),
  )

  return (
    <View className="mt-4">
      <View className="my-1 overflow-hidden rounded-tl-[16px] rounded-tr-[28px] rounded-br-[16px] rounded-bl-[28px] border border-gray-200 bg-white">
        <View className="border-b border-gray-200 bg-info-light/60 px-4 py-3">
          <Text className="text-base font-bold text-info-dark">
            {headerTitle}
          </Text>
          <Text className="mt-1 text-xs text-gray-500">
            {headerDescription}
          </Text>
        </View>

        <View className="p-4">
          <View className="flex-row items-start justify-between gap-3">
            <Text className="flex-1 text-base font-bold text-gray-700 leading-5">
              {budget.title}
            </Text>

            <View
              className="flex-row items-center rounded-tl-xl rounded-tr-md rounded-br-xl rounded-bl-md px-3 py-2"
              style={{ backgroundColor: colors["info-light"] }}
            >
              <Ionicons name="ellipse" size={10} color={colors["info-dark"]} />
              <Text
                className="ml-1 text-left text-[11px] font-bold"
                style={{ color: colors["info-dark"] }}
              >
                Enviado
              </Text>
            </View>
          </View>

          <Text className="text-sm font-semibold text-gray-700 mt-3">
            {budget.clientName}
          </Text>

          <Text className="text-sm text-gray-500 mt-1" numberOfLines={1}>
            {budget.description}
          </Text>

          <View className="flex-row items-end justify-between mt-5">
            <View>
              <Text className="text-xs text-gray-500">Atualizado em</Text>
              <Text className="text-sm text-gray-700 mt-1">{formattedDate}</Text>
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
    </View>
  )
}
