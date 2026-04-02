import { tv, type VariantProps } from "tailwind-variants"

export const appInputVariants = tv({
  slots: {
    container: "w-full my-4",
    wrapper: "flex-row items-center border-b border-gray-400 pb-5",
    input: "bg-transparent text-gray-500 text-lg flex-1",
    label: "text-sm text-gray-400 mb-1 font-semibold",
    error: "text-sm text-danger-base mt-1",
  },
  variants: {
    variant: {
      default: {},
      search: {
        wrapper:
          "rounded-full border border-gray-300 bg-white px-4 py-2.5 min-h-[44px]",
        input: "text-sm text-gray-700",
        label: "hidden",
      },
    },
    isFocused: {
      true: {
        wrapper: "border-purple-base border",
        label: "text-purple-base",
      },
    },
    isError: {
      true: {
        wrapper: "border-danger-base",
        label: "text-danger-base",
      },
    },
    isDisabled: {
      true: {
        wrapper: "opacity-50",
        input: "text-gray-400",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    isDisabled: false,
    isError: false,
    isFocused: false,
  },
})

export type AppInputVariantProps = VariantProps<typeof appInputVariants>
