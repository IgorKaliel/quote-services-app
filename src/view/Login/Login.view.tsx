import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { AppInput } from "@/shared/components/organisms/AppInput"
import { AuthFormHeader } from "@/shared/components/molecules/AppFormHeader"
import { AppButton } from "@/shared/components/atoms/AppButton"
import { KeyboardContainer } from "@/shared/components/organisms/KeyboardContainer"
import { FC } from "react"
import { useLoginViewModel } from "./useLogin.viewModel"
import { AppInputController } from "@/shared/components/molecules/AppInputController"

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 px-[40px] justify-between items-center">
        <View className="w-full items-center pt-10 pb-12">
          <AuthFormHeader
            subTitle="Informe seu e-mail e senha"
            title="Acesse sua conta"
          />

          <AppInputController
            control={control}
            name="email"
            label="E-MAIL"
            leftIcon="mail-outline"
          />

          <AppInputController
            control={control}
            name="password"
            label="SENHA"
            leftIcon="lock-closed-outline"
            secureTextEntry
          />

          <View className="w-full items-end mt-1">
            <TouchableOpacity
              onPress={() => router.push("/(public)/forget-password")}
              className="px-1 py-1"
            >
              <Text className="text-sm text-purple-base font-bold">
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>
          </View>
          <AppButton
            onPress={onSubmit}
            className="mt-5"
            rightIcon="arrow-forward"
          >
            Entrar
          </AppButton>
        </View>
        <View className=" pb-20">
          <Text className="text-base mb-6 text-gray-400">
            Ainda não tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/(public)/register")}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  )
}
