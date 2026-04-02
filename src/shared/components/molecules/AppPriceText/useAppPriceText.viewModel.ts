export const useAppPriceTextViewModel = (value: number) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value))

  const parts = formattedPrice.split("\u00A0")
  const currencySymbol = parts[0]
  const valueText = parts.slice(1).join("\u00A0")

  return {
    currencySymbol,
    valueText,
  }
}
