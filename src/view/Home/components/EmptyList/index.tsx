import { BudgetPreviewCard } from "@/shared/components/organisms/BudgetPreviewCard"
import { PromoCard } from "@/shared/components/organisms/PromoCard"
import {
  PromoCardHighlightsEnum,
  PromoCardLayoutEnum,
  PromoCardToneEnum,
} from "@/shared/components/organisms/PromoCard/promo-card.variants"
import { budgetPreviewMock } from "@/shared/mocks/budget-preview"
import { View } from "react-native"

const highlights = [
  "Envie um orçamento em poucos minutos",
  "Organize clientes, rascunhos e propostas",
  "Passe mais confiança logo no primeiro contato",
]

export const EmptyList = () => {
  return (
    <View>
      <PromoCard
        tone={PromoCardToneEnum.PURPLE}
        badge="Ganhe velocidade no atendimento"
        title="Envie um orçamento profissional em poucos minutos"
        description="Responda clientes com mais rapidez, organize seu processo comercial e aumente sua chance de fechar."
        highlights={highlights}
        highlightsVariant={PromoCardHighlightsEnum.CHECKLIST}
        primaryActionLabel="Criar meu primeiro orçamento"
        secondaryActionLabel="Ver um exemplo de orçamento"
      />

      <BudgetPreviewCard
        budget={budgetPreviewMock}
        headerTitle="Veja como seu orçamento vai aparecer"
        headerDescription="Um exemplo simples, claro e pronto para enviar ao cliente"
      />

      <PromoCard
        className="mt-4"
        tone={PromoCardToneEnum.NEUTRAL}
        layout={PromoCardLayoutEnum.SIMPLE}
        badge="Mais controle comercial"
        icon="briefcase-outline"
        title="Quanto mais rapido voce envia, maior a chance de avancar a venda"
        description="Tenha um processo mais claro para montar propostas, acompanhar rascunhos e nao deixar nenhum cliente esperando resposta."
        highlightsVariant={PromoCardHighlightsEnum.DOTLIST}
        highlights={[
          "Comece com um modelo simples e objetivo",
          "Tenha mais organização no dia a dia",
          "Passe mais confiança em cada proposta enviada",
        ]}
      />
    </View>
  )
}
