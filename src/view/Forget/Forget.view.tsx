import { FC } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import { KeyboardContainer } from "@/shared/components/organisms/KeyboardContainer"
import { AuthFormHeader } from "@/shared/components/molecules/AppFormHeader"
import { AppInput } from "@/shared/components/organisms/AppInput"
import { AppButton } from "@/shared/components/atoms/AppButton"

export const ForgetView: FC = () => {
  const isSuccess = true

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
          {!isSuccess ? (
            <>
              <AuthFormHeader
                title="Recuperar senha"
                subTitle="Informe seu e-mail para receber as instruções de redefinição"
              />

              <View className="w-full">
                <AppInput
                  label="E-MAIL"
                  leftIcon="mail-outline"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />

                <AppButton className="mt-6" rightIcon="arrow-forward">
                  Enviar instruções
                </AppButton>
              </View>

              <TouchableOpacity
                className="mt-8"
                activeOpacity={0.7}
                onPress={() => router.push("/(public)/login")}
              >
                <Text className="text-sm font-bold text-purple-base">
                  Voltar para login
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <AuthFormHeader
                title="Confira seu e-mail"
                subTitle="Se encontrarmos uma conta com esse e-mail, enviaremos as instruções para redefinir sua senha"
              />

              <View className="w-full mt-4">
                <AppButton
                  onPress={() => router.push("/(public)/login")}
                  rightIcon="arrow-forward"
                >
                  Voltar para login
                </AppButton>

                <TouchableOpacity className="mt-8" activeOpacity={0.7}>
                  <Text className="text-sm font-bold text-purple-base text-center">
                    Reenviar e-mail
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardContainer>
  )
}
