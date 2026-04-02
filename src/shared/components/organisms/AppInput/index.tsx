import {
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native"
import { AppInputVariantProps, appInputVariants } from "./input.variants"
import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { useAppInputViewModel } from "./useAppInputViewModel"

export interface AppInputProps extends TextInputProps, AppInputVariantProps {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  containerClassName?: string
  mask?: (value: string) => void | string
  error?: string
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  value,
  isError,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  error,
  isDisabled,
  variant,
  ...textInputProps
}) => {
  const {
    showPassword,
    getIconColor,
    handleFocus,
    handleBlur,
    handleTextChange,
    handleWrapperPress,
    handlePasswordToggle,
    isFocused,
  } = useAppInputViewModel({
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  })

  const styles = appInputVariants({
    variant,
    isFocused,
    isDisabled,
    isError: !!error,
  })

  const iconSize = variant === "search" ? 18 : 22
  const iconSpacing = variant === "search" ? "mr-2" : "mr-3"

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            color={getIconColor()}
            className={iconSpacing}
            size={iconSize}
            name={leftIcon}
          />
        )}
        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input()}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={showPassword}
          {...textInputProps}
        />
        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              size={iconSize}
              name={showPassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        )}
      </Pressable>
      {error && (
        <Text className={styles.error()}>
          <Ionicons className="ml-2" name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  )
}
