import { memo } from "react"
import { Header } from "../Header"
import { PromoCard } from "../PromoCard"
import { Search } from "../Search"

export const RenderHeader = memo(
  ({
    searchText,
    setSearchText,
    draftBudgetsCount,
  }: {
    searchText: string
    setSearchText: (text: string) => void
    draftBudgetsCount: number
  }) => (
    <>
      <Header draftBudgetsCount={draftBudgetsCount} />
      <Search setSearchText={setSearchText} inputValue={searchText} />
      <PromoCard />
    </>
  ),
)
