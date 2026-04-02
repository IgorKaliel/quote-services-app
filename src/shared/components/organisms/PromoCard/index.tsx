import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import {
  PromoCardHighlightsEnum,
  PromoCardLayoutEnum,
  PromoCardToneEnum,
  promoCardVariants,
  PromoCardVariants,
} from "./promo-card.variants"

interface PromoCardProps extends PromoCardVariants {
  badge?: string
  title: string
  description: string
  highlights?: string[]
  icon?: keyof typeof Ionicons.glyphMap
  primaryActionLabel?: string
  secondaryActionLabel?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
  className?: string
}

const toneIconColors = {
  [PromoCardToneEnum.PURPLE]: colors["purple-base"],
  [PromoCardToneEnum.INFO]: colors["info-dark"],
  [PromoCardToneEnum.NEUTRAL]: colors["purple-base"],
}

export const PromoCard: FC<PromoCardProps> = ({
  badge,
  title,
  description,
  highlights,
  icon,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  tone = PromoCardToneEnum.PURPLE,
  layout = PromoCardLayoutEnum.FEATURED,
  className,
  highlightsVariant = PromoCardHighlightsEnum.CHIPS,
}) => {
  const hasIcon = Boolean(icon)
  const styles = promoCardVariants({
    tone,
    layout,
    hasIcon,
    highlightsVariant,
  })

  return (
    <View className={styles.base({ className })}>
      {layout === PromoCardLayoutEnum.FEATURED ? (
        <>
          <View className={styles.shapePrimary()} />
          <View className={styles.shapeSecondary()} />
        </>
      ) : null}

      {badge ? (
        <View className={styles.badge()}>
          <Text className={styles.badgeText()}>{badge}</Text>
        </View>
      ) : null}

      <View className={styles.content()}>
        {icon ? (
          <View className={styles.iconWrap()}>
            <Ionicons
              name={icon}
              size={layout === PromoCardLayoutEnum.FEATURED ? 22 : 16}
              color={toneIconColors[tone]}
            />
          </View>
        ) : null}

        <View className="flex-1">
          <Text className={styles.title()}>{title}</Text>
          <Text className={styles.description()}>{description}</Text>
        </View>
      </View>

      {highlights?.length ? (
        <View className={styles.highlightList()}>
          {highlights.map((item) => (
            <View key={item} className={styles.highlightItem()}>
              {highlightsVariant === PromoCardHighlightsEnum.CHECKLIST ? (
                <View className={styles.highlightIconWrap()}>
                  <Ionicons
                    name="checkmark"
                    size={18}
                    color={toneIconColors[tone]}
                  />
                </View>
              ) : null}

              {highlightsVariant === PromoCardHighlightsEnum.DOTLIST ? (
                <Ionicons
                  name="ellipse"
                  size={8}
                  color={toneIconColors[tone]}
                />
              ) : null}

              <Text className={styles.highlightText()}>{item}</Text>
            </View>
          ))}
        </View>
      ) : null}

      {primaryActionLabel || secondaryActionLabel ? (
        <View className={styles.footer()}>
          {primaryActionLabel ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={onPrimaryAction}
              className={styles.primaryButton()}
            >
              <Text className={styles.primaryButtonText()}>
                {primaryActionLabel}
              </Text>
              <Ionicons name="arrow-forward" size={16} color={colors.white} />
            </TouchableOpacity>
          ) : null}

          {secondaryActionLabel ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onSecondaryAction}
              className={styles.secondaryButton()}
            >
              <Text className={styles.secondaryButtonText()}>
                {secondaryActionLabel}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
    </View>
  )
}
