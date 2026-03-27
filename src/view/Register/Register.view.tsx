import { FC } from "react"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { KeyboardContainer } from "@/shared/components/organisms/KeyboardContainer"
import { AuthFormHeader } from "@/shared/components/molecules/AppFormHeader"
import { AppInput } from "@/shared/components/organisms/AppInput"
import { router } from "expo-router"
import { AppButton } from "@/shared/components/atoms/AppButton"
import { AppInputController } from "@/shared/components/molecules/AppInputController"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
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
            <AppInputController
              leftIcon="person-outline"
              label="NOME"
              control={control}
              name="name"
              placeholder="Digite seu nome:"
            />

            <AppInputController
              leftIcon="phone-portrait-outline"
              label="CELULAR"
              control={control}
              name="phone"
              placeholder="(00) 99999-9999"
            />
          </View>
          <View className="w-full">
            <Text className="text-sm font-bold text-gray-500 mb-4">ACESSO</Text>
            <AppInputController
              leftIcon="mail-outline"
              label="E-MAIL"
              control={control}
              name="email"
              placeholder="email@exemplo.com"
            />

            <AppInputController
              leftIcon="lock-closed-outline"
              label="SENHA"
              control={control}
              name="password"
              secureTextEntry
              placeholder="Digite a sua senha:"
            />

            <AppInputController
              leftIcon="lock-closed-outline"
              label="CONFIRMAR SENHA"
              control={control}
              name="confirmPassword"
              secureTextEntry
              placeholder="Confirme a sua senha:"
            />
          </View>
          <AppButton className="mt-4" onPress={onSubmit}>
            Registrar
          </AppButton>
          <TouchableOpacity
            className="mt-8 px-1 py-1"
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
