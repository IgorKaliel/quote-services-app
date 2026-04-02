import { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import { AppInput } from "@/shared/components/organisms/AppInput"
import { colors } from "@/styles/colors"

interface SearchProps {
  setSearchText: (text: string) => void
  inputValue: string
}

export const Search: FC<SearchProps> = ({ setSearchText, inputValue }) => {
  return (
    <View className="mb-5">
      <View className="flex-row items-center gap-3">
        <View className="flex-1">
          <AppInput
            value={inputValue}
            onChangeText={setSearchText}
            placeholder="Pesquisar orçamento"
            leftIcon="search"
            returnKeyType="search"
            variant="search"
            className="flex-1"
            containerClassName="my-0"
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
          className="items-center justify-center rounded-full border size-[53px] border-gray-300 bg-white"
        >
          <FontAwesome6
            name="sliders"
            size={18}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
