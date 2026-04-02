import { tv, type VariantProps } from "tailwind-variants"

export enum PromoCardToneEnum {
  PURPLE = "purple",
  INFO = "info",
  NEUTRAL = "neutral",
}

export enum PromoCardLayoutEnum {
  FEATURED = "featured",
  SIMPLE = "simple",
}

export enum PromoCardHighlightsEnum {
  CHIPS = "chips",
  CHECKLIST = "checklist",
  DOTLIST = "dotlist",
}

export const promoCardVariants = tv({
  slots: {
    base: "overflow-hidden px-5",
    shapePrimary: "absolute opacity-100",
    shapeSecondary: "absolute opacity-100",
    badge: "self-start px-3 py-2",
    badgeText: "text-xs font-bold",
    content: "mt-4 flex-row items-start gap-4",
    iconWrap: "size-12 items-center justify-center bg-white",
    title: "font-bold",
    description: "mt-2 text-sm leading-5",
    highlightList: "mt-4",
    highlightItem: "px-3 py-2",
    highlightText: "text-xs font-semibold",
    highlightIconWrap: "",
    footer: "mt-4",
    primaryButton:
      "self-start flex-row items-center gap-2 px-4 py-3 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md",
    primaryButtonText: "text-sm font-bold",
    secondaryButton: "mt-3 self-center rounded-full px-4 py-2",
    secondaryButtonText: "text-sm font-bold",
  },
  variants: {
    tone: {
      purple: {
        base: "rounded-tl-[28px] rounded-tr-[16px] rounded-br-[28px] rounded-bl-[16px] bg-purple-light pb-7 pt-5",
        shapePrimary:
          "-right-10 -top-10 size-32 rounded-bl-[80px] rounded-tr-[32px] bg-white/30",
        shapeSecondary:
          "right-12 top-20 h-16 w-16 rounded-tl-[24px] rounded-br-[24px] bg-white/15",
        badge:
          "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md bg-white",
        badgeText: "text-purple-base",
        iconWrap:
          "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-white",
        title: "text-[28px] leading-9 text-gray-700",
        description: "text-gray-500 leading-6",
        highlightItem: "rounded-full bg-white",
        highlightText: "text-gray-700",
        primaryButton: "bg-purple-base",
        primaryButtonText: "text-white",
        secondaryButtonText: "text-purple-base",
      },
      info: {
        base: "rounded-tl-[28px] rounded-tr-[16px] rounded-br-[28px] rounded-bl-[16px] bg-info-light pb-5 pt-4",
        shapePrimary:
          "-right-6 -top-8 size-24 rounded-bl-[60px] rounded-tr-[24px] bg-white/30",
        shapeSecondary:
          "bottom-0 right-10 h-12 w-12 rounded-tl-[20px] rounded-br-[20px] bg-white/20",
        badge:
          "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md bg-white",
        badgeText: "text-info-dark",
        iconWrap:
          "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-white",
        title: "text-xl leading-7 text-info-dark",
        description: "text-gray-600",
        highlightItem: "rounded-full bg-white",
        highlightText: "text-gray-700",
        primaryButton: "bg-info-base",
        primaryButtonText: "text-white",
        secondaryButtonText: "text-info-dark",
      },
      neutral: {
        base: "rounded-tl-[24px] rounded-tr-[14px] rounded-br-[24px] rounded-bl-[14px] border border-gray-200 bg-white py-5",
        badge:
          "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md bg-gray-100",
        badgeText: "text-gray-700",
        iconWrap:
          "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-gray-100",
        title: "text-base leading-6 text-gray-700",
        description: "text-gray-500 leading-6",
        highlightItem: "",
        highlightText: "text-gray-600",
        primaryButton: "bg-purple-base",
        primaryButtonText: "text-white",
        secondaryButtonText: "text-purple-base",
      },
    },
    layout: {
      featured: {},
      simple: {
        content: "mt-0",
        footer: "mt-0",
      },
    },
    hasIcon: {
      true: {},
      false: {
        content: "gap-0",
      },
    },
    highlightsVariant: {
      chips: {
        highlightList: "flex-row flex-wrap gap-2",
      },
      checklist: {
        highlightList: "gap-3",
        highlightItem: "px-0 py-0 flex-row items-center gap-3",
        highlightText: "flex-1 text-sm leading-5",
        highlightIconWrap:
          "size-8 rounded-full bg-white items-center justify-center",
      },
      dotlist: {
        highlightList: "gap-2",
        highlightItem: "px-0 py-0 flex-row items-center gap-2",
        highlightText: "text-sm",
      },
    },
  },
  compoundVariants: [
    {
      tone: "neutral",
      layout: "simple",
      class: {
        base: "px-5",
      },
    },
  ],
  defaultVariants: {
    tone: PromoCardToneEnum.PURPLE,
    layout: PromoCardLayoutEnum.FEATURED,
    hasIcon: true,
    highlightsVariant: PromoCardHighlightsEnum.CHIPS,
  },
})

export type PromoCardVariants = VariantProps<typeof promoCardVariants>
