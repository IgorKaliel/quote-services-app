import { FC } from "react"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { KeyboardContainer } from "@/shared/components/organisms/KeyboardContainer"
import { AuthFormHeader } from "@/shared/components/molecules/AppFormHeader"
import { AppInput } from "@/shared/components/organisms/AppInput"
import { router } from "expo-router"

export const RegisterView: FC<
  ReturnType<typeof useRegisterViewModel>
> = ({}) => {
  return (
    <KeyboardContainer>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 40,
          paddingTop: 40,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full items-center">
          <AuthFormHeader
            title="Crie sua conta"
            subTitle="Informe seus dados pessoais e de acesso"
          />

          <View className="w-full mb-6">
            <Text className="text-sm font-bold text-gray-500 mb-4">
              DADOS PESSOAIS
            </Text>

            <AppInput label="NOME" leftIcon="person-outline" />
            <AppInput label="E-MAIL" leftIcon="mail-outline" />
            <AppInput label="TELEFONE" leftIcon="call-outline" />
          </View>
          <View className="w-full">
            <Text className="text-sm font-bold text-gray-500 mb-4">
              DADOS DE ACESSO
            </Text>
            <AppInput
              label="SENHA"
              leftIcon="lock-closed-outline"
              secureTextEntry
            />
            <AppInput
              label="CONFIRMAR SENHA"
              leftIcon="lock-closed-outline"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            className="mt-8"
            activeOpacity={0.7}
            onPress={() => router.push("/(public)/login")}
          >
            <Text className="text-sm font-bold text-purple-base">
              Já tem uma conta? Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardContainer>
  )
}
