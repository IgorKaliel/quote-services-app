import { FC } from "react"
import { AppPriceTextView } from "./AppPriceText.view"
import { useAppPriceTextViewModel } from "./useAppPriceText.viewModel"

interface AppPriceTextProps {
  classNameCurrency?: string
  classNameValue?: string
  value: number
}

export const AppPriceText: FC<AppPriceTextProps> = ({
  classNameCurrency,
  classNameValue,
  value,
}) => {
  const viewModel = useAppPriceTextViewModel(value)

  return (
    <AppPriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  )
}
