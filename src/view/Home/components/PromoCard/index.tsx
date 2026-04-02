import { PromoCard as SharedPromoCard } from "@/shared/components/organisms/PromoCard"
import {
  PromoCardHighlightsEnum,
  PromoCardToneEnum,
} from "@/shared/components/organisms/PromoCard/promo-card.variants"

export const PromoCard = () => {
  return (
    <SharedPromoCard
      className="mb-5"
      tone={PromoCardToneEnum.INFO}
      badge="Plano Pro"
      icon="rocket-outline"
      title="Aumente sua conversao com recursos premium"
      description="Personalize propostas, organize melhor seus atendimentos e passe mais confianca para fechar mais negocios."
      highlights={["Marca propria", "Mais automacao", "Suporte dedicado"]}
      highlightsVariant={PromoCardHighlightsEnum.CHIPS}
      primaryActionLabel="Conhecer plano"
    />
  )
}
