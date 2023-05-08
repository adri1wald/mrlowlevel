import { assignVars, createThemeContract } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { focusRing } from '@/styles/common.css'
import { mapColors, shouldUseDarkForegroundText } from '@/styles/palette'
import { vars } from '@/styles/theme.css'
import { rem } from '@/styles/utils'
import { pick, transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'

const sizes = transformValues(
  pick(vars.fontSize, ['xs', 'sm', 'md', 'lg', 'xl']),
  (value) => calc(value).multiply(2).toString(),
)

const createEmptyVariant = () => ({
  color: '',
  bg: '',
  bgHover: '',
  bgActive: '',
  border: '',
  borderHover: '',
})

const buttonColors = createThemeContract({
  subtle: createEmptyVariant(),
  light: createEmptyVariant(),
  'light+': createEmptyVariant(),
  filled: createEmptyVariant(),
  outline: createEmptyVariant(),
})

export const style = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    appearance: 'none',
    selectors: {
      '&:disabled, &[data-disabled]': {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },

  variants: {
    color: mapColors((getScale, color) => [
      focusRing[color],
      {
        vars: assignVars(buttonColors, {
          subtle: {
            color: vars.palette.color[getScale(11)],
            bg: 'transparent',
            bgHover: vars.palette.color[getScale(4)],
            bgActive: vars.palette.color[getScale(5)],
            border: 'transparent',
            borderHover: 'transparent',
          },
          light: {
            color: vars.palette.color[getScale(11)],
            bg: vars.palette.color[getScale(3)],
            bgHover: vars.palette.color[getScale(4)],
            bgActive: vars.palette.color[getScale(5)],
            border: 'transparent',
            borderHover: 'transparent',
          },
          'light+': {
            color: vars.palette.color[getScale(11)],
            bg: vars.palette.color[getScale(4)],
            bgHover: vars.palette.color[getScale(5)],
            bgActive: vars.palette.color[getScale(6)],
            border: 'transparent',
            borderHover: 'transparent',
          },
          filled: {
            color: shouldUseDarkForegroundText(color)
              ? vars.palette.shades['black.12']
              : vars.palette.shades['white.12'],
            bg: vars.palette.color[getScale(9)],
            bgHover: vars.palette.color[getScale(10)],
            bgActive: vars.palette.color[getScale(10)],
            border: 'transparent',
            borderHover: 'transparent',
          },
          outline: {
            color: vars.palette.color[getScale(11)],
            bg: vars.palette.color[getScale(2)],
            bgHover: vars.palette.color[getScale(2)],
            bgActive: vars.palette.color[getScale(2)],
            border: vars.palette.color[getScale(7)],
            borderHover: vars.palette.color[getScale(8)],
          },
        }),
      },
    ]),
    size: transformValues(sizes, (value) => ({
      width: value,
      height: value,
    })),
    radius: {
      ...transformValues(vars.radius, (value) => ({
        borderRadius: value,
      })),
      pill: {
        borderRadius: rem(99999),
      },
    },
    inline: {
      true: {
        display: 'inline-flex',
      },
    },
    variant: transformValues(buttonColors, (variant) => ({
      color: variant.color,
      backgroundColor: variant.bg,
      border: `${rem(1)} solid ${variant.border}`,
      selectors: {
        ['&:not(:disabled):hover, &:not([data-disabled]):hover']: {
          backgroundColor: variant.bgHover,
          borderColor: variant.borderHover,
        },
        ['&:not(:disabled):active, &:not([data-disabled]):active']: {
          backgroundColor: variant.bgActive,
        },
      },
    })),
  },

  defaultVariants: {
    color: 'neutral',
    size: 'md',
    radius: 'sm',
    variant: 'light',
  },
})

export type StyleProps = Expand<RecipeVariants<typeof style>>
