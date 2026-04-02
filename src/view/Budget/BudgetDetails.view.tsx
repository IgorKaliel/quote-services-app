import { FC } from "react"
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { AppPriceText } from "@/shared/components/molecules/AppPriceText"
import { colors } from "@/styles/colors"
import { theme } from "@/styles/theme"
import { useBudgetDetailsViewModel } from "./useBudgetDetails.viewModel"

export const BudgetDetailsView: FC<
  ReturnType<typeof useBudgetDetailsViewModel>
> = ({
  budget,
  isLoading,
  isError,
  statusLabel,
  createdAtLabel,
  updatedAtLabel,
  discountAmount,
  discountChipLabel,
  isPercentageDiscount,
}) => {
  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
        <ActivityIndicator size="large" color={colors["purple-base"]} />
      </SafeAreaView>
    )
  }

  if (isError || !budget) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-100 px-6">
        <Text className="text-base text-gray-500 text-center">
          Nao foi possivel carregar o orcamento.
        </Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-row items-center gap-4 px-4 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="p-1">
          <Ionicons name="chevron-back" size={22} color={theme.text} />
        </TouchableOpacity>
        <Text className="flex-1 text-base font-bold text-gray-700">
          Orcamento #{budget.id.slice(0, 5)}
        </Text>
        <View className="rounded-full bg-info-light px-3 py-1">
          <Text className="text-xs font-bold text-info-dark">{statusLabel}</Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="rounded-2xl border border-gray-200 bg-white mb-4 overflow-hidden">
          <View className="flex-row gap-3 p-4">
            <View className="size-11 rounded-xl items-center justify-center bg-purple-light">
              <Ionicons
                name="document-text-outline"
                size={20}
                color={colors["purple-base"]}
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-700">
                {budget.title}
              </Text>
              <Text className="text-sm text-gray-500 mt-4">Cliente</Text>
              <Text className="text-base font-semibold text-gray-700">
                {budget.clientName}
              </Text>

              <View className="flex-row mt-4 gap-8">
                <View>
                  <Text className="text-sm text-gray-500">Criado em</Text>
                  <Text className="text-base font-semibold text-gray-700">
                    {createdAtLabel}
                  </Text>
                </View>
                <View>
                  <Text className="text-sm text-gray-500">Atualizado em</Text>
                  <Text className="text-base font-semibold text-gray-700">
                    {updatedAtLabel}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="rounded-2xl border border-gray-200 bg-white mb-4 overflow-hidden">
          <View className="flex-row items-center gap-2 px-4 py-3 border-b border-gray-200">
            <Ionicons
              name="receipt-outline"
              size={18}
              color={colors["purple-base"]}
            />
            <Text className="text-sm font-semibold text-gray-500">
              Servicos inclusos
            </Text>
          </View>

          <View className="p-4 gap-5">
            {budget.items.map((item) => (
              <View
                key={item.id}
                className="flex-row items-start justify-between gap-4"
              >
                <View className="flex-1">
                  <Text className="text-base font-bold text-gray-700">
                    {item.title}
                  </Text>
                  {item.description ? (
                    <Text className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </Text>
                  ) : null}
                </View>

                <View className="items-end">
                  <AppPriceText
                    value={item.total}
                    classNameCurrency="text-sm font-bold text-gray-700"
                    classNameValue="text-base font-bold text-gray-700"
                  />
                  <Text className="text-sm text-gray-500">
                    Qt: {item.quantity}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <View className="p-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-base text-gray-500">Subtotal</Text>
              <AppPriceText
                value={budget.subtotal}
                classNameCurrency="text-sm font-semibold text-gray-700"
                classNameValue="text-base font-semibold text-gray-700"
              />
            </View>

            {budget.discountValue > 0 ? (
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-2">
                  <Text className="text-base text-gray-500">Desconto</Text>
                  <View className="rounded-md bg-success-light px-2 py-1">
                    {isPercentageDiscount ? (
                      <Text className="text-xs font-bold text-success-base">
                        {discountChipLabel}
                      </Text>
                    ) : (
                      <AppPriceText
                        value={budget.discountValue}
                        classNameCurrency="text-xs font-bold text-success-base"
                        classNameValue="text-xs font-bold text-success-base"
                      />
                    )}
                  </View>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-success-base">
                    -
                  </Text>
                  <AppPriceText
                    value={discountAmount}
                    classNameCurrency="text-sm font-semibold text-success-base"
                    classNameValue="text-base font-semibold text-success-base"
                  />
                </View>
              </View>
            ) : null}

            <View className="flex-row items-center justify-between border-t border-gray-200 pt-3">
              <Text className="text-lg font-bold text-gray-700">
                Investimento total
              </Text>
              <AppPriceText
                value={budget.total}
                classNameCurrency="text-lg font-bold text-gray-700"
                classNameValue="text-2xl font-bold text-gray-700"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-6 left-4 right-4 flex-row items-center gap-3">
        <TouchableOpacity className="size-14 rounded-full bg-white items-center justify-center border border-gray-200">
          <Ionicons
            name="trash-outline"
            size={22}
            color={colors["danger-base"]}
          />
        </TouchableOpacity>
        <TouchableOpacity className="size-14 rounded-full bg-white items-center justify-center border border-gray-200">
          <Ionicons
            name="copy-outline"
            size={22}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
        <TouchableOpacity className="size-14 rounded-full bg-white items-center justify-center border border-gray-200">
          <Ionicons
            name="create-outline"
            size={22}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 h-14 rounded-full bg-purple-base items-center justify-center flex-row gap-2">
          <Ionicons
            name="paper-plane-outline"
            size={20}
            color={colors.white}
          />
          <Text className="text-base font-bold text-white">Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
