import { FC } from "react"
import { useQuoteCardViewModel } from "./useQuoteCard.viewModel"
import { QuoteCardView } from "./QuoteCard.view"

interface QuoteCardProps {
  quote: null
}

export const QuoteCard: FC<QuoteCardProps> = (props) => {
  const viewModel = useQuoteCardViewModel()
  return <QuoteCardView {...viewModel} />
}
